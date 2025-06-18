import { ProjectShowcase } from "./ui/project-showcase";

function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

const LTRVersion = () => (
  <div className="px-4 sm:px-8 py-8 sm:py-16 rounded-lg min-h-[300px] flex flex-wrap gap-4 sm:gap-6 items-center justify-center relative">
    <div
      className="items-center justify-center relative flex w-full max-w-full sm:max-w-[1536px]"
    >
      <ProjectShowcase
        testimonials={[
          {
            name: "Plum Cave",
            quote: 'A cloud backup solution that employs the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme for data encryption and ML-KEM-1024 for quantum-resistant key exchange.',
            designation: "Next.js Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp",
            link: "https://plum-cave.netlify.app/",
          },
          {
            name: "Namer UI",
            quote: "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.",
            designation: "Next.js Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp",
            link: "https://namer-ui.netlify.app/",
          },
          {
            name: "Namer UI For Vue",
            quote: "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.",
            designation: "Vue Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp",
            link: "https://namer-ui-for-vue.netlify.app/",
          },
          {
            name: "React Cryptographic Toolkit",
            quote: "A web app that’s capable of encrypting user data, hashing strings, and calculating tags using the available HMAC algorithms.",
            designation: "React Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp",
            link: "https://northstrix.github.io/React-Cryptographic-Toolkit/",
          },
          {
            name: "PHA5E-Inspired Hero Section",
            quote: "An unorthodox, customizable component. I put it here just to demonstrate that I'm capable of creating an Angular app.",
            designation: "Angular Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp",
            link: "https://pha5e-inspired-hero-section.netlify.app/",
          },
          {
            name: "Bootleg Website Localization Tool",
            quote: "A simple tool designed to localize websites created with the Bazium website builder, as well as their vanilla HTML/CSS/JS counterparts.",
            designation: "Vanilla HTML/CSS/JS Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp",
            link: "https://codepen.io/Northstrix/full/mydWRJB",
          },
          {
            name: "In-Browser-File-Encrypter",
            quote: "A browser-based tool that encrypts files locally without interacting with the server. It uses AES-256 for data encryption and HMAC-SHA512 for integrity verification.",
            designation: "Vanilla HTML/CSS/JS Project",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/in-browser-file-encrypter.webp",
            link: "https://codepen.io/Northstrix/full/xxvXvJL",
          },
        ]}
        // keep your existing styles
        colors={{
          name: "var(--project-showcase-name-color)",
          position: "var(--project-showcase-position-color)",
          testimony: "var(--project-showcase-testimony-color)",
        }}
        fontSizes={{
          name: "var(--project-showcase-name-size)",
          position: "var(--project-showcase-position-size)",
          testimony: "var(--project-showcase-testimony-size)",
        }}
        spacing={{
          nameTop: "var(--project-showcase-name-top)",
          nameBottom: "var(--project-showcase-name-bottom)",
          positionTop: "var(--project-showcase-position-top)",
          positionBottom: "var(--project-showcase-position-bottom)",
          testimonyTop: "var(--project-showcase-testimony-top)",
          testimonyBottom: "var(--project-showcase-testimony-bottom)",
          lineHeight: "var(--project-showcase-line-height)",
        }}
        halomotButtonGradient="var(--project-showcase-button-gradient)"
        halomotButtonBackground="var(--project-showcase-button-background)"
        halomotButtonTextColor="var(--project-showcase-button-text-color)"
        halomotButtonOuterBorderRadius="var(--project-showcase-button-outer-radius)"
        halomotButtonInnerBorderRadius="var(--project-showcase-button-inner-radius)"
        halomotButtonHoverTextColor="var(--project-showcase-button-hover-text-color)"
        onItemClick={openInNewTab}
      />
    </div>
  </div>
);

const RTLVersion = () => (
  <div className="px-4 sm:px-8 py-8 sm:py-16 rounded-lg min-h-[300px] flex flex-wrap gap-4 sm:gap-6 items-center justify-center relative">
    <div
      className="items-center justify-center relative flex w-full max-w-full sm:max-w-[1152px]"
    >
      <ProjectShowcase
        testimonials={[
          {
            name: "פלאם קייב",
            quote: 'פתרון גיבוי בענן המשתמש בסכימת הצפנה מאומתת "HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20"...',
            designation: "פרויקט Next.js",
            src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave-hebrew.webp",
            link: "https://plum-cave.netlify.app/",
          },
          // ...rest unchanged
        ]}
        colors={{
          name: "var(--project-showcase-name-color)",
          position: "var(--project-showcase-position-color)",
          testimony: "var(--project-showcase-testimony-color)",
        }}
        fontSizes={{
          name: "var(--project-showcase-name-size)",
          position: "var(--project-showcase-position-size)",
          testimony: "var(--project-showcase-testimony-size)",
        }}
        spacing={{
          nameTop: "var(--project-showcase-name-top)",
          nameBottom: "var(--project-showcase-name-bottom)",
          positionTop: "var(--project-showcase-position-top)",
          positionBottom: "var(--project-showcase-position-bottom)",
          testimonyTop: "var(--project-showcase-testimony-top)",
          testimonyBottom: "var(--project-showcase-testimony-bottom)",
          lineHeight: "var(--project-showcase-line-height)",
        }}
        isRTL={true}
        buttonInscriptions={{
          previousButton: "הקודם",
          nextButton: "הבא",
          openWebAppButton: "פתח אפליקציה",
        }}
        halomotButtonGradient="var(--project-showcase-button-gradient)"
        halomotButtonBackground="var(--project-showcase-button-background)"
        halomotButtonTextColor="var(--project-showcase-button-text-color)"
        halomotButtonOuterBorderRadius="var(--project-showcase-button-outer-radius)"
        halomotButtonInnerBorderRadius="var(--project-showcase-button-inner-radius)"
        halomotButtonHoverTextColor="var(--project-showcase-button-hover-text-color)"
        onItemClick={openInNewTab}
      />
    </div>
  </div>
);

export { LTRVersion, RTLVersion };
