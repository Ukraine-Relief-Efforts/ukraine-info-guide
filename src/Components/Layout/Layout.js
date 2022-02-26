const Layout = ({ children, hero = null }) => {
  return (
    <section className="w-full bg-white">
      {hero}

      <div className="max-w-6xl mx-auto my-10 flex flex-col flex-wrap items-center justify-center">{children}</div>
    </section>
  );
};

export default Layout;
