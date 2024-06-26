import SideNav from "@/features/side-nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[88px] flex w-full h-full">
      <div className="hidden md:block min-w-60 relative">
        <SideNav />
      </div>
      <div className="w-full h-full flex bg-secondary text-secondary-foreground">
        {children}
      </div>
    </div>
  );
};

export default layout;
