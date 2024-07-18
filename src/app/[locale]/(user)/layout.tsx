const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[88px] flex w-full h-full flex-col px-4 ">
      {children}
    </div>
  );
};

export default UserLayout;
