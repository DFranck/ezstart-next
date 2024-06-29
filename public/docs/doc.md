## Authentication

Implement secure authentication in your application using NextAuth.js. This allows for integration with various providers like Google and GitHub, ensuring flexible and secure user authentication and account management.

## Multilingual Support

Expand your application's reach globally with Next-Intl for seamless localization. This setup enables you to manage translations effortlessly and cater to a diverse audience by breaking language barriers.

## Database Management

Utilize Tailwind CSS and Next Themes for efficient theming in your application. This setup allows for easy customization and responsive design, ensuring a consistent look and feel across different devices.

## Form Management

Manage your application's state efficiently with React Hook Form and Zod for validation. This combination ensures robust handling of form inputs and data validation, enhancing the reliability of your app.

## Components & Libraries

Utilize Framer Motion for creating dynamic and accessible animations. Build sophisticated and interactive animations with ease, enhancing the user experience of your application.

## Developer-Centric Tools

Integrate with Prisma for simplified and efficient database management. Generate automatic migrations, access type-safe data, and ensure compatibility with PostgreSQL.

## Custom Components

### Nav Component

The `Nav` component is a reusable navigation component that adapts to different translations and links. It integrates with next-intl for translations and next/navigation for handling the current pathname. The component also includes accessibility features and allows for conditional styling based on the `active` prop.

### Props

- `t?: string`: The translation key (optional).
- `render?: string`: The key to render an array or object from translations (optional).
- `root?: number[]`: Indices for root links (only applicable if `links` is an array).
- `links?: string[] | { [key: string]: string }`: Direct links array or object.
- `path?: string`: Base path for non-root links.
- `active?: boolean`: If true, applies active styles based on the current pathname.
- `navClass?: string`: Custom class for the `nav` element.
- `ulClass?: string`: Custom class for the `ul` element.
- `liClass?: string`: Custom class for the `li` elements.
- `variant?: "default" | "primary" | "secondary"`: Style variant for links.
- `pos?: "default" | "fixed"`: Position type for the `ul` element.
- `dir?: "row" | "col"`: Direction of the navigation items.

#### Example Usage

To use the `Nav` component, import it and pass the necessary `t`, `render`, `root`, `className`, `path`, `pos`, `dir`, and `active` props:

```jsx
import Nav from "./Nav";

const Header = () => {
  return <Nav t="Header" render="links" root={[0]} />;
};

export default Header;

or

import Nav from "@/components/layout/nav/nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[88px] flex w-full h-full">
      <Nav
        t="SideNav"
        render="links"
        path="docs"
        pos={"fixed"}
        dir={"col"}
        active
      />
      <div className="w-full h-full flex bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default layout;
```

##### Localization

The Nav component uses the useLocale hook from next-intl to determine the current locale and adjust the links accordingly. Ensure that your translation files include the necessary links for each locale.

##### Accessibility

The nav element includes an aria-label for screen readers.
Each Link includes an aria-label to provide meaningful descriptions.

##### Styling

The component includes basic styling classes for layout and positioning. You can customize the styles as needed by modifying the class names or adding new styles.

##### Example Translation File

Ensure your translation file includes the necessary structure and keys Array or Object. Here is an example:

```
{
  "Header": {
    "title": "EzStart",
    "links": ["Home", "About"]
  },

  "SideNav": {
    "links": {
      "getStarted": "Get Started",
      "authentication": "Authentication",
      "internationalization": "Internationalization",
      "theming": "Theming"
    }
  },
}
```
