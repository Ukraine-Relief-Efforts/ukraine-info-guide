import React from "react";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const onChange = (ev) => i18n.changeLanguage(ev.target.value || "en");

  return (
    <section className="flex flex-col items-center justify-center pt-5 bg-gray-200">
      <select onChange={onChange} value={i18n.language}>
        <option value="en">English</option>
        <option value="ua">Українська</option>
        <option value="ru">Русский</option>
        <option value="it">Italiana</option>
      </select>
    </section>
  );
};

export default LanguagePicker;
