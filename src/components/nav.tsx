const Nav = () => {
  return (
    <nav className="rounded-t max-lg:mt-2 max-lg:w-full max-lg:bg-secondary max-lg:p-5">
      <ul className="flex gap-x-6 gap-y-1 text-lg font-medium max-lg:flex-col [&amp;_a:hover]:opacity-100 [&amp;_a]:opacity-60 max-lg:[&amp;_a]:inline-block max-lg:[&amp;_a]:w-full">
        <li>
          <a href="/sign-up">Produit</a>
        </li>
        <li>
          <a href="/sign-up">Docs</a>
        </li>
        <li>
          <a href="/sign-up">Blog</a>
        </li>
        <li>
          <a href="/sign-up">Communauté</a>
        </li>
        <li>
          <a href="/sign-up">Entreprise</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
