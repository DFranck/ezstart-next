'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navVariants = cva('', {
  variants: {
    dir: {
      row: '',
      col: 'lg:block w-fit relative lg:p-4 min-w-max',
    },
  },
  defaultVariants: {
    dir: 'row',
  },
});

const ulVariants = cva('', {
  variants: {
    dir: {
      row: 'flex flex-row',
      col: 'flex flex-col gap-2',
    },
    pos: {
      default: 'justify-center items-center',
      fixed: 'lg:fixed',
    },
  },
  defaultVariants: {
    dir: 'row',
    pos: 'default',
  },
});

const linkVariants = cva(
  'text-lg lg:p-2 rounded duration-100 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 w-full block text-center',
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        secondary: '',
      },
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        isActive: true,
        className: 'bg-primary text-primary-foreground',
      },
      {
        variant: 'primary',
        isActive: false,
        className: 'hover:bg-primary/50 hover:text-primary-foreground',
      },
      {
        variant: 'secondary',
        isActive: true,
        className: 'bg-accent text-accent-foreground',
      },
      {
        variant: 'secondary',
        isActive: false,
        className: 'hover:bg-accent rounded w-full text-center cursor-pointer',
      },
    ],
    defaultVariants: {
      variant: 'default',
      isActive: false,
    },
  },
);

type NavProps = {
  main?: boolean; // If true, the nav is the main nav
  t?: string; // Translation key
  render?: string; // Display array or object key
  root?: number[]; // Root indices (only applicable if d is an array)
  links?: string[] | { [key: string]: string }; // Direct links array or object
  path?: string; // Base path for non-root links
  active?: boolean; // If true, applies active styles based on the current pathname
  navClass?: string; // Custom class
  ulClass?: string; // Custom class
  liClass?: string; // Custom class
  variant?: VariantProps<typeof linkVariants>['variant'];
  anchorLinks?: boolean; // If true, uses anchor links
  pos?: VariantProps<typeof ulVariants>['pos'];
  dir?: VariantProps<typeof navVariants>['dir'];
  setIsOpen?: (value: boolean) => void;
  subNavClass?: string; // Custom class for sub navigation
  subNavProps?: NavProps; // Additional props for sub navigation
};

const Nav = ({
  main = true,
  t,
  render,
  root = [],
  links,
  navClass = '',
  ulClass = '',
  liClass = '',
  path = '',
  pos,
  anchorLinks = false,
  active = false,
  variant = 'default',
  dir,
  subNavClass,
  setIsOpen,
  subNavProps,
}: NavProps) => {
  const locale = useLocale();
  const pathname = usePathname();
  const intl = useTranslations(t || '');

  const rawLinks = t && render ? intl.raw(render) : links;

  if (!rawLinks) return null;

  const linkList = Array.isArray(rawLinks) ? rawLinks : Object.values(rawLinks);
  const linkKeys = Array.isArray(rawLinks) ? linkList : Object.keys(rawLinks);

  return (
    <>
      <nav
        className={cn(navVariants({ dir }), 'w-full lg:w-fit', navClass)}
        aria-label={main ? 'Main navigation' : 'Secondary navigation'}
      >
        <ul className={cn(ulVariants({ dir, pos }), ulClass)}>
          {linkList.map((link, index) => {
            let linkPath = '';
            if (root.includes(index)) {
              linkPath = `/${locale}`;
            } else if (anchorLinks) {
              linkPath = `#${linkKeys[index].toLowerCase()}`;
            } else if (Array.isArray(rawLinks)) {
              linkPath = `/${locale}/${
                path ? `${path}/` : ''
              }${link.toLowerCase()}`;
            } else {
              linkPath = `/${locale}/${path ? `${path}/` : ''}${linkKeys[
                index
              ].toLowerCase()}`;
            }

            const isActive = pathname.includes(link.toLowerCase());
            const activePath = t + '.' + link.toLowerCase();

            return (
              <li
                key={`${link}-${index}`}
                className={cn('w-full')}
                onClick={() => setIsOpen?.(false)}
              >
                <Link
                  href={linkPath}
                  aria-label={link}
                  className={cn(
                    linkVariants({ variant, isActive: active && isActive }),
                    liClass,
                  )}
                >
                  {link}
                </Link>
                {isActive && subNavProps && (
                  <Nav
                    navClass={cn(subNavClass, 'mt-2 border-t border-primary')}
                    t={activePath}
                    render={'nav-links'}
                    dir="col"
                    ulClass="p-2 "
                    path={link.toLowerCase()}
                    setIsOpen={setIsOpen}
                    variant={variant}
                    active
                    {...subNavProps} // Passer les props supplémentaires à la sous-navigation
                  />
                )}
              </li>
            );
          })}
        </ul>
        {dir === 'col' && (
          <ul className={cn(pos === 'fixed' ? 'invisible' : 'hidden')}>
            {linkList.map((link, index) => (
              <li
                key={`${link}-${index}`}
                className="text-lg p-2"
                onClick={() => setIsOpen?.(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
