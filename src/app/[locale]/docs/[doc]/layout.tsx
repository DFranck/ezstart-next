import Nav from "@/components/layout/nav";

const Layout = ({
  children,
  params: { doc },
}: {
  children: React.ReactNode;
  params: { doc: string };
}) => {
  return (
    <div className="mt-[88px] flex w-full h-full">
      <aside className="flex">
        <Nav
          t="pages.docs"
          render={`${doc}.sections`}
          path={`docs/${doc}`}
          anchorLinks={true}
          dir={"col"}
          pos={"fixed"}
          active
          navClass="hidden lg:flex bg-blue-500"
          variant={"primary"}
        />
      </aside>
      <div className="w-full h-full flex bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default Layout;
