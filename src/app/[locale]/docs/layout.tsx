import Nav from "@/components/layout/nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[88px] flex w-full h-full">
      <aside className="flex">
        <Nav
          t="pages.docs"
          render="nav-links"
          path="docs"
          dir={"col"}
          pos={"fixed"}
          active
          navClass="hidden lg:flex"
          variant={"primary"}
        />
      </aside>
      <div className="w-full h-full flex">{children}</div>
    </div>
  );
};

export default Layout;
