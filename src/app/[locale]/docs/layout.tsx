import SideNav from "@/features/side-nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-20 flex w-full h-full">
      <div className="hidden md:block min-w-60 relative">
        <SideNav />
      </div>
      <div className="w-full h-full flex">{children}</div>
    </div>
  );
};

export default layout;
