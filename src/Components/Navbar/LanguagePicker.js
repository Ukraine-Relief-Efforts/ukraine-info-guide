import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", label: "English", },
  { value: "ua", label: "Українська", },
  { value: "ru", label: "Русский", },
  { value: "it", label: "Italiana", },
  { value: "de", label: "Deutsch", },
  { value: "es", label: "Español", },
];

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      options={languages}
      value={languages.find(({ value }) => value === (i18n.language || "en"))}
      onChange={({ value }) => i18n.changeLanguage(value)}
    />
  );
};

export default LanguagePicker;
