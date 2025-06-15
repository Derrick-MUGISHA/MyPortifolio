import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, to, type = 'contact' } = await request.json()

    if (!name || !email || !subject || !message || !to) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json(
        { error: "Email service not configured. Contact admin." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    let emailSubject = subject
    let emailContent = type === 'service-inquiry'
      ? `...HTML for service inquiry...` // keep your original content here
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            You have received a new message from your website contact form.
          </p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: emailSubject,
      replyTo: email,
      html: emailContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      {
        error: process.env.NODE_ENV === 'development'
          ? error.message || 'Failed to send email'
          : 'Failed to send email. Please try again later.',
      },
      { status: 500 }
    )
  }
}
