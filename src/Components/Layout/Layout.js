import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.content}>
        {children}</div>
      <Footer />
    </>
  );
};

export default Layout;