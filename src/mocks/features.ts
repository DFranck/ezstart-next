import AuthSvg from '@/components/svgs/auth-svg';
import NextIntl from '@/components/svgs/intl-svg';
import NextSvg from '@/components/svgs/next-svg';
import PrismaSvg from '@/components/svgs/prisma-svg';
import TypescriptSvg from '@/components/svgs/typescript-svg';

export const features = [
  {
    title: 'Next.js Framework',
    description:
      'Enjoy the power and flexibility of Next.js for server-side rendering, static site generation, and client-side rendering.',
    link: 'https://nextjs.org/docs',
    image: NextSvg,
  },
  {
    title: 'TypeScript Support',
    description:
      "Benefit from TypeScript's type-checking and autocompletion for a more robust and maintainable codebase.",
    link: 'https://www.typescriptlang.org/docs/',
    image: TypescriptSvg,
  },
  {
    title: 'Prisma ORM',
    description:
      'Easily manage your database with Prisma, a next-generation ORM that provides powerful data modeling and querying capabilities.',
    link: 'https://www.prisma.io/docs/',
    image: PrismaSvg,
  },
  {
    title: 'NextAuth Authentication',
    description:
      'Secure your application with NextAuth, a flexible and easy-to-implement authentication solution.',
    link: 'https://next-auth.js.org/getting-started/introduction',
    image: AuthSvg,
  },
  {
    title: 'Internationalization',
    description:
      'Reach a global audience with built-in support for multiple languages using next-intl.',
    link: 'https://next-intl-docs.vercel.app/',
    image: NextIntl,
  },
  {
    title: 'Theme Management',
    description:
      "Customize your application's appearance with next-themes, allowing for easy theme switching.",
    link: 'https://github.com/pacocoursey/next-themes',
    image: NextSvg,
  },
  {
    title: 'Security',
    description:
      'Protect user data with bcryptjs for password hashing and JWT token verification.',
    link: 'https://github.com/dcodeIO/bcrypt.js',
    image: '',
  },
  {
    title: 'Styling',
    description:
      'Create beautiful user interfaces with Tailwind CSS, a utility-first CSS framework.',
    link: 'https://tailwindcss.com/docs',
    image:
      'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
  },
  {
    title: 'Code Quality',
    description:
      'Maintain high code quality with ESLint and Prettier integrations.',
    link: 'https://eslint.org/docs/latest/user-guide/getting-started',
    image: '',
  },
];
