import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <section>
      <nav className="navbar">
        <div className="navbar-item navbar-item-active">
          <a className="">{t("Leave Ukraine")}</a>
        </div>
        <div className="navbar-item">
          <a className="">{t("Border info")}</a>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
