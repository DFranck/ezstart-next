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
        className="hidden"
        variant={"primary"}
      />
      <div className="w-full h-full flex bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default layout;
