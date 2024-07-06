import { cn } from "@/lib/utils";

const UserNav = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "rounded-t max-lg:mt-2 max-lg:w-full max-lg:bg-secondary max-lg:p-5",
        className
      )}
    >
      <ul className="flex gap-x-6 gap-y-1 text-lg font-medium max-lg:flex-col [&amp;_a:hover]:opacity-100 [&amp;_a]:opacity-60 max-lg:[&amp;_a]:inline-block max-lg:[&amp;_a]:w-full">
        <li>
          <a href="/sign-up">Home</a>
        </li>
        <li>
          <a href="/sign-up">todos</a>
        </li>
        <li>
          <a href="/sign-up">menmbers</a>
        </li>
        <li>
          <a href="/sign-up">reglage</a>
        </li>
        <li>
          <a href="/sign-up">facturation</a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
