import Nav from "@/components/nav";
import Pathname from "@/components/pathname";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full ">
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
      <div className="w-full h-full flex flex-col bg-secondary text-secondary-foreground px-4">
        <Pathname />
        {children}
      </div>
    </div>
  );
};

export default DocsLayout;
