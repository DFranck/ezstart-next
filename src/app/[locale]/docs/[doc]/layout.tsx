import Nav from "@/components/layout/nav";

const Layout = ({
  children,
  params: { doc },
}: {
  children: React.ReactNode;
  params: { doc: string };
}) => {
  return (
    <div className="flex w-full h-full">
      <aside className="flex">
        <Nav
          t={`pages.docs.${doc}.sections`}
          render={`nav-links`}
          anchorLinks={true}
          dir={"col"}
          pos={"fixed"}
          active
          navClass="hidden lg:flex bg-input"
          variant={"primary"}
        />
      </aside>
      <div className="h-full flex items-center justify-center flex-col flex-grow w-full relative py-10 px-4 bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default Layout;
