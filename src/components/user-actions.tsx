const UserAction = () => {
  return (
    <div className="rounded-b max-lg:border-t max-lg:border-border max-lg:w-full max-lg:bg-secondary max-lg:p-5">
      <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&amp;_li:not(:last-child):hover]:opacity-100 [&amp;_li:not(:last-child)]:opacity-60">
        <li>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 p-2 focus-visible:ring-offset-0"
            type="button"
            id="radix-:Rcgpuubta:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 stroke-current stroke-2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8"></path>
              <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
          </button>
        </li>
        <li>
          <a href="/sign-in">Se connecter</a>
        </li>
        <li>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            href="/sign-up"
          >
            S&#39;inscrire
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserAction;
