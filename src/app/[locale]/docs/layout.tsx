import Nav from '@/components/nav';
import Pathname from '@/components/pathname';
import getDeviceType from '@/lib/getDeviceType';
import { cn } from '@/lib/utils';

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const device = await getDeviceType();
  return (
    <div
      className={cn('flex w-full h-full', { 'mt-[88px]': device !== 'mobile' })}
    >
      <aside className="flex">
        <Nav
          t="pages.docs"
          render="nav-links"
          path="docs"
          dir={'col'}
          pos={'fixed'}
          active
          navClass="hidden lg:flex "
          variant={'primary'}
          liClass="text-left"
        />
      </aside>
      <div className="w-full h-full flex flex-col bg-secondary text-secondary-foreground px-4">
        <Pathname />
        {children}
      </div>
    </div>
  );
};

export default DocsLayout;
