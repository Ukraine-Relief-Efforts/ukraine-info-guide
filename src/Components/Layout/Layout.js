const Layout = ({ children, hero = null }) => {
  return (
    <section>
      {hero}
      <div className="flex flex-col flex-wrap mt-10 items-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default Layout;
