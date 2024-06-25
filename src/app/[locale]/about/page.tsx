import Section from "@/components/layout/section";
import Link from "next/link";

export default function about() {
  return (
    <Section className="flex flex-col items-center text-center pt-40 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">About Me</h1>
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl font-light mb-6">
          Hi, I'm Franck, a passionate web developer with expertise in creating
          dynamic and responsive web applications. With a strong background in
          Next.js, React, TypeScript, and Tailwind CSS, I strive to build
          seamless and user-friendly digital experiences.
        </p>
        <p className="text-lg md:text-xl font-light mb-6">
          Over the years, I've worked on various projects, ranging from small
          personal websites to large-scale enterprise applications. My
          commitment to continuous learning and improvement has allowed me to
          stay updated with the latest industry trends and technologies.
        </p>
        <p className="text-lg md:text-xl font-light mb-6">
          I'm always excited to collaborate on new projects and bring innovative
          ideas to life. Feel free to explore my portfolio and connect with me
          on LinkedIn and GitHub to stay updated with my latest work and
          contributions.
        </p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <Link
            href="https://dfranck.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            View My Portfolio
          </Link>
          <Link
            href="https://www.linkedin.com/in/franck-dufournet-239446151/"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            Connect with Me on LinkedIn
          </Link>
          <Link
            href="https://github.com/DFranck"
            passHref
            target="_blank"
            rel="noreferrer noopener"
          >
            Check Out My GitHub
          </Link>
        </div>
      </div>
    </Section>
  );
}
