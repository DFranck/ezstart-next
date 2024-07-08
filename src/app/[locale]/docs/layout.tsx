import Nav from "@/components/layout/nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[88px] flex w-full h-full">
      <Nav
        t="SideNav"
        render="links"
        path="docs"
        dir={"col"}
        pos={"fixed"}
        active
        navClass="hidden lg:flex"
        variant={"primary"}
      />
      <div className="w-full h-full flex bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default layout;
