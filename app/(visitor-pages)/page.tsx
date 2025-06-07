import BlurFade from "@/components/ui/blur-fade";
import { IconCloudComponent } from "@/components/widgets/IconCloudComponent";
import ProjectDisplayCard from "@/components/widgets/ProjectDisplayCard";
import TestimonialCard from "@/components/widgets/TestimonialCard";
import WorkProcess from "@/components/widgets/WorkProcess";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import { BsMedium } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { MyServices } from "../database/services";
import projects from "../database/projects";
import { Testimonials } from "../database/testimonials";
import { SocialAccounts } from "../database/socialAccounts";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhimpundu Anne Marie",
  url: "",
  description:
    "Muhimpundu Anne Marie is a software developer with a passion for building things, both digitally and creatively. She enjoys combining her tech skills with her design background to create innovative solutions. Currently, she is working on empowering women through tech at IRO. Outside of work, she loves exploring new ideas, dancing, and diving into a good book or movie.",
  image: "/1718313379119.jpeg",
  author: {
    "@type": "WebSite",
    name: "Muhimpundu Anne Marie",
    url: "https://www.muhimpundu.com",
    image: "/1718313379119.jpeg",
    sameAs: [
      "https://github.com/muhimpundu",
      "https://www.linkedin.com/in/muhimpundu/",
      "https://medium.com/@muhimpundu",
      "https://www.instagram.com/muhimpundu/",
    ],
  },
};

export default function page() {
  const jssStyles: React.CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, rgba(39, 39, 42, 0), rgba(9, 9, 11, 1)), url("https://i.postimg.cc/gkZXK1t8/wallpaperflare-com-wallpaper-1.jpg")`,
    backgroundSize: "cover", // Ensures the image covers the full screen
    backgroundAttachment: "fixed", // Keeps the background fixed when scrolling
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents repeating the image
    transition: "background-image 0.3s ease-in-out",
    willChange: "background-image",
    height: "100vh", // Makes sure the section takes the full height of the screen
    width: "100vw", // Ensures the background covers the full width of the screen
    position: "relative", // Keeps the section layout intact
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col items-center justify-start w-full scroll-smooth">
        <section
          id="home"
          className="flex flex-col justify-center items-center w-full pt-48 pb-48 px-4 relative overflow-hidden fade-in"
          style={jssStyles}
        >
          <BlurFade delay={0.25} className="mt-40" inView>
            <h1 className="text-center z-40">
              <span className="text-primary mb-10 text-2xl md:text-4xl block animate-float">
                Hello, I&apos;m
              </span>
              <span
                className="text-primary text-4xl md:text-6xl block typing-effect animate-out"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  borderRight: "3px solid black", // Adding cursor effect
                  display: "inline-block",
                }}
              >
                Muhimpundu Anne Marie
              </span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h2 className="text-center text-3xl md:text-5xl mt-10">
              A Full Stack Software Developer
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h3 className="text-center text-xl text-wrap md:text-2xl mt-6">
              I design and build software and systems that respond to user needs
              and vision.
            </h3>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <Link
              href="#skills"
              className="flex items-center justify-center gap-4 mt-14"
            >
              <span className="border-2 border-zinc-800 dark:border-zinc-400 dark:hover:border-zinc-200 p-3 rounded-full">
                <ArrowDownIcon className="hover:-rotate-90 transition-transform duration-300" />
              </span>
              <span className="text-center text-lg">MY SERVICES</span>
            </Link>
          </BlurFade>
        </section>
      </div>
      <section
        id="skills"
        className="max-w-screen-xl flex flex-col mx-auto justify-between items-start w-full px-4"
      >
        <div className="w-full mt-16">
          <IconCloudComponent />
        </div>
        <div className="flex flex-col gap-8 w-full relative -top-60 -mb-64">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {MyServices.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 shadow-lg shadow-zinc-300/50 dark:shadow-zinc-900/50 hover:shadow-2xl hover:shadow-zinc-400/60 dark:hover:shadow-zinc-900/80 transition-all duration-500 hover:-translate-y-2 transform-gpu"
              >
                {/* Inner shadow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-inner shadow-zinc-400/20 dark:shadow-zinc-700/30"></div>

                {/* Card content */}
                <div className="relative p-4 md:p-6 flex flex-col justify-between h-full">
                  {/* Header section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-300 dark:bg-zinc-700 w-8 h-8 rounded-lg flex items-center justify-center shadow-md text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold uppercase mb-2 text-zinc-800 dark:text-zinc-100">
                      {service.name}
                    </h4>

                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Technologies section */}
                  <div className="mb-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {service.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="text-xs px-2 py-1 text-zinc-700 dark:text-zinc-200 bg-zinc-300 dark:bg-zinc-700 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <Link
                    href={"/services#" + service.slug}
                    className="flex items-center justify-start gap-3 group/link mt-auto"
                  >
                    <span className="border border-zinc-400 dark:border-zinc-600 p-2 rounded-full bg-zinc-300 dark:bg-zinc-700 shadow-md hover:shadow-lg transition-all duration-300 group-hover/link:scale-110">
                      <ArrowUpIcon className="w-3 h-3 rotate-45 group-hover/link:rotate-90 transition-transform duration-300" />
                    </span>
                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      ABOUT {service.name.toUpperCase()}
                    </span>
                  </Link>
                </div>

                {/* Subtle bottom shadow bar */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-zinc-400/20 dark:via-zinc-600/20 to-transparent rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="process"
        className="max-w-screen-xl flex flex-col mx-auto justify-center items-center w-full px-4 mt-16"
      >
        <h3 className="text-lg font-semibold">THE PROCESS</h3>
        <h4 className="text-6xl md:text-8xl flex flex-col font-extralight items-center text-zinc-800 dark:text-zinc-300">
          <span className="text-center">Your next project</span>
          <em className="pt-serif-regular-italic"> in 5 steps</em>
        </h4>
        <div className="flex flex-col justify-between items-center gap-8">
          <span className="border border-zinc-800 mt-8 dark:border-zinc-600 p-4 rounded-full bg-zinc-300 dark:bg-zinc-800">
            <ArrowDownIcon className="" />
          </span>
          <WorkProcess />
        </div>
      </section>
      <section id="works" className="max-w-screen-xl flex flex-col mx-auto justify-start items-start w-full pt-32 pb-12 lg:pb-32 px-4">
                    <div className="flex justify-between items-center w-full ">
                        <h3 className="text-3xl md:text-4xl text-zinc-800 dark:text-zinc-300">Selected Work</h3>
                        <Link href="/work" className="flex items-center justify-center gap-4 group">
                            <span className="border border-zinc-800 dark:border-zinc-500 dark:hover:border-zinc-200 p-2 rounded-full bg-zinc-300 dark:bg-zinc-800">
                                <ArrowUpIcon className="rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                            </span>
                            <span className="text-center text-base md:text-xl">
                                SEE ALL
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-10 w-full justify-between">
                        {projects.map((project) => <ProjectDisplayCard key={project.name} project={project} />) || <>No projects found</>}
                    </div>
                </section>
      <section className="max-w-screen-xl flex flex-col mx-auto py-12 lg:py-36 justify-center items-center w-full px-4">
        <div className="gap-4 flex flex-col justify-between items-center">
          <h3 className="text-6xl md:text-8xl flex flex-col font-extralight items-center text-zinc-800 dark:text-zinc-300">
            <span className="">What my</span>
            <em className="pt-serif-regular-italic"> clients say</em>
          </h3>
          <p className="text-center text-lg">
            See what my clients have to say about working with me <br />
            and the results I helped them achieve.
          </p>
        </div>
        <div className="flex justify-between items-start mt-12 w-full flex-wrap">
          {Testimonials.map((testimonal, index) => (
            <TestimonialCard key={index} testimonial={testimonal} />
          ))}
        </div>
      </section>
      <section className="flex flex-col mx-auto justify-center items-center w-full gap-32 pb-32">
        <div
          style={jssStyles}
          className="flex h-screen justify-center md:justify-between items-center w-full flex-wrap"
        >
          <p className="text-8xl w-full md:w-1/2 text-center md:text-start md:text-9xl mb-0 pt-serif-regular-italic font-light">
            Jean Eric
          </p>
          <p className="text-8xl w-full md:w-1/2 text-center md:text-end md:text-9xl mt-0 font-light">
            Hirwa
          </p>
        </div>
        <div className="max-w-screen-xl px-4 flex w-full justify-between items-start flex-wrap md:flex-nowrap gap-8">
          <h3 className="w-full md:w-[48%] text-4xl md:text-5xl flex flex-col font-extralight text-zinc-800 dark:text-zinc-300">
            <span className="">Let&apos; build a solution that</span>
            <em className="pt-serif-regular-italic">
              leaves a lasting impression
            </em>
          </h3>
          <div className="w-full md:w-[48%] flex flex-col justify-start items-start gap-8">
            <p className="text-lg">
              Hi, I&apos;m Jean Eric. I&apos;m a software developer with a
              passion for building things, both digitally and creatively. I
              enjoy combining my tech skills with my design background to create
              innovative solutions. Currently, I&apos;m working on empowering
              women through tech at IRO. Outside of work, I love exploring new
              ideas, dancing, and diving into a good book or movie.
            </p>
            <div className="flex justify-start items-start gap-3">
              {SocialAccounts.map((account, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={account.url}
                  className="flex items-center justify-center gap-4"
                >
                  <span className="border border-zinc-800 dark:border-zinc-500 p-3 rounded-full bg-zinc-300 dark:bg-zinc-800">
                    {account.name === "Github" && (
                      <GitHubLogoIcon className="w-6 h-6" />
                    )}
                    {account.name === "LinkedIn" && (
                      <LinkedInLogoIcon className="w-6 h-6" />
                    )}
                    {account.name === "Instagram" && (
                      <InstagramLogoIcon className="w-6 h-6" />
                    )}
                    {account.name === "Medium" && (
                      <BsMedium className="w-6 h-6" />
                    )}
                    {account.name === "YouTube" && (
                      <FaYoutube className="w-6 h-6" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
