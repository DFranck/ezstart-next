import Section from "@/components/layout/section";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <h1 className="text-5xl">Welcome to My EZ Start Boilerplate</h1>
        <p>
          My EZ Start Boilerplate is a comprehensive and flexible starting point
          for your web development projects. Built with modern technologies and
          best practices, it helps you kickstart your development process with a
          robust foundation.
        </p>
      </AuroraBackground>
      <Section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Next.js Framework:</strong> Enjoy the power and flexibility
            of Next.js for server-side rendering, static site generation, and
            client-side rendering.
          </li>
          <li>
            <strong>TypeScript Support:</strong> Benefit from TypeScript&apos;s
            type-checking and autocompletion for a more robust and maintainable
            codebase.
          </li>
          <li>
            <strong>Prisma ORM:</strong> Easily manage your database with
            Prisma, a next-generation ORM that provides powerful data modeling
            and querying capabilities.
          </li>
          <li>
            <strong>NextAuth Authentication:</strong> Secure your application
            with NextAuth, a flexible and easy-to-implement authentication
            solution.
          </li>
          <li>
            <strong>Internationalization:</strong> Reach a global audience with
            built-in support for multiple languages using next-intl.
          </li>
          <li>
            <strong>Theme Management:</strong> Customize your application&apos;s
            appearance with next-themes, allowing for easy theme switching.
          </li>
          <li>
            <strong>Security:</strong> Protect user data with bcryptjs for
            password hashing and JWT token verification.
          </li>
          <li>
            <strong>Styling:</strong> Create beautiful user interfaces with
            Tailwind CSS, a utility-first CSS framework.
          </li>
          <li>
            <strong>Code Quality:</strong> Maintain high code quality with
            ESLint and Prettier integrations.
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Getting Started</h2>
        <p>
          To get started with My EZ Start Boilerplate, clone the repository and
          follow the setup instructions in the README file. Customize the
          configuration files to suit your project needs, and start building
          your application with ease.
        </p>
        <p>
          This boilerplate is designed to be flexible and extensible, allowing
          you to add features and modify existing ones to fit your specific
          requirements.
        </p>
      </Section>
      <Section>
        <h2>Join the Community</h2>
        <p>
          Join our community of developers to share your experiences, ask
          questions, and collaborate on improving the boilerplate. We welcome
          contributions and feedback to make My EZ Start Boilerplate even
          better.
        </p>
      </Section>
    </>
  );
}
