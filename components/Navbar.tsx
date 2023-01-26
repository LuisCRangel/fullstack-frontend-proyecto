const Navbar = () => {
  return (
    <div className="flex bg-primary-black p-3 h-14 text-primary-gray">
      <div className="flex w-4/12 bg-nav-logo bg-no-repeat ml-4 bg-[length:65px_25px]"></div>
      <article className="w-8/12 mr-4">
        <ul className=".h500-normal-16px xs:text-[9.594px] sm:text-xs leading-4 flex flex-row gap-7 items-center justify-end">
          <a
            className="flex flex-row gap-2 items-center text-primary-blue"
            href=""
          >
            <i className="bx bx-plus text-2xl"></i>
            <h3>Crear publicacion</h3>
          </a>
          <a href="/login">Log in</a>
          <a href="/signUp">Sign up</a>
        </ul>
      </article>
    </div>
  );
};

export default Navbar;
