const translations = () => (
  <div className="prose">
    <h1>Translations</h1>
    <p>
      My EZ Start uses NextIntl for internationalization. This allows you to
      easily manage translations for multiple languages.
    </p>
    <h2>Adding Translations</h2>
    <p>
      1. **Create Translation Files**: Add JSON files for each language in the
      `messages` directory.
    </p>
    <pre>
      <code>
        {`{
  "Header": {
    "title": "EzStart",
    "links": ["Home", "About"],
    "signin": "Sign in",
    "signup": "Sign up",
    "logout": "Sign out"
  },
  ...
}`}
      </code>
    </pre>
    <p>
      2. **Use Translations in Components**: Use the `useTranslations` hook from
      NextIntl to access translations in your components.
    </p>
    <pre>
      <code>
        {`import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Navigation = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const links = t.raw("links") as string[];
  return (
    <nav className="justify-center items-center gap-5 hidden md:flex">
      <ul className="flex justify-center items-center gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={\`/\${locale}/\${link.toLowerCase()}\`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
`}
      </code>
    </pre>
    <h2>Best Practices</h2>
    <ul>
      <li>Always provide default translations in the base language.</li>
      <li>Keep translation keys consistent across languages.</li>
    </ul>
  </div>
);

export default translations;
