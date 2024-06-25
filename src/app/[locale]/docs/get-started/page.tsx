"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GetStarted = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const navItems = [
    { title: "Get Started", href: `/${locale}/docs` },
    { title: "Features", href: `/${locale}/docs/features` },
    { title: "Authentication", href: "/docs/authentication" },
    { title: "Internationalization", href: "/docs/internationalization" },
    { title: "Theming", href: "/docs/theming" },
    { title: "Form Management", href: "/docs/form-management" },
    { title: "Animations", href: "/docs/animations" },
    { title: "Database Management", href: "/docs/database-management" },
    { title: "Deployment", href: "/docs/deployment" },
    { title: "FAQ", href: "/docs/faq" },
    { title: "Contributing", href: "/docs/contributing" },
  ];
  console.log(navItems[0].href);

  return (
    <div className="flex mt-20">
      <nav className="w-1/4 p-4 ">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block p-2 rounded ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/50 hover:text-primary-foreground duration-100"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-4">
          Get Started with My EZ Start
        </h1>
        <p className="mb-4">Welcome 👋</p>
        <p className="mb-4">
          My EZ Start is a boilerplate designed to quickly kickstart your
          Next.js projects with advanced integrated features.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Installation</h2>
        <pre className="bg-accent p-4 rounded mb-8 text-accent-foreground">
          <code>
            {`git clone https://github.com/DFranck/my-ez-start.git
cd my-ez-start
npm install
npm run dev`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
        <p className="mb-4">
          Explore the powerful technologies and tools integrated into this
          boilerplate, designed to enhance your development workflow and deliver
          high-quality web applications.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Authentication</h3>
        <p className="mb-4">
          My EZ Start includes integration with NextAuth.js for handling
          authentication. You can set up providers and manage user sessions with
          ease.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Internationalization</h3>
        <p className="mb-4">
          Utilize NextIntl for multi-language support. Easily add new languages
          and manage translations.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Theming</h3>
        <p className="mb-4">
          Customize your application's appearance with Tailwind CSS and Next
          Themes for theme management.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Form Management</h3>
        <p className="mb-4">
          Manage forms with React Hook Form and validate them using Zod.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Animations</h3>
        <p className="mb-4">Implement animations with Framer Motion.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Database Management</h3>
        <p className="mb-4">
          Set up Prisma ORM from scratch with your favorite database and learn
          basic workflows like data modeling, querying, and migrations.
        </p>
      </main>
    </div>
  );
};

export default GetStarted;
