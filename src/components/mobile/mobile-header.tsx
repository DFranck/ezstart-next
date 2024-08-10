'use client';
import Burger from '@/components/burger';
import Nav from '@/components/nav';
import { cn } from '@/lib/utils';
import { Home, User } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <header
        className="fixed bottom-0 left-0 right-0 z-40 border-t shadow  "
        onClick={() => handleClick()}
      >
        <div
          className={cn(
            'bg-background  z-50 transition-[max-height] duration-500 ease-in-out overflow-hidden',
            isOpen ? 'max-h-screen' : 'max-h-0',
          )}
        >
          <Nav
            ulClass="flex flex-col p-2"
            navClass="flex flex-col"
            liClass="text-left p-2"
            t="pages"
            render="nav-links"
            root={[0]}
            dir="col"
            active
            variant="primary"
            subNavClass="text-right"
            setIsOpen={setIsOpen}
            subNavProps={{
              ulClass: 'text-right border-b mt-2',
              liClass: 'text-right p-2 ',
            }}
          />
        </div>
        <div className="grid grid-cols-3 items-center bg-background shadow-md">
          <Link href={`/${locale}`} className="w-full flex justify-center py-2">
            <Home className="w-9 h-9" strokeWidth={1.5} />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-center py-2"
          >
            <Burger isOpen={isOpen} />
          </div>
          <Link href={`/profile`} className="w-full flex justify-center py-2">
            <User className="w-9 h-9" strokeWidth={1.5} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
