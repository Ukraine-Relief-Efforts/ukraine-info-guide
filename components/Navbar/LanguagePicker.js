import React from "react";
import Select from "react-select";
import { useRouter } from "next/router";

const languages = [
  { value: "en", label: "English" },
  { value: "ua", label: "Українська" },
  { value: "ru", label: "Русский" },
  { value: "it", label: "Italiano" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Español" },
  { value: "pl", label: "Polski" },
  { value: "kr", label: "한국어" },
  { value: "rs", label: "Српски"},
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
};

const LanguagePicker = () => {
  const router = useRouter();

  const updateLocale = ({ value }) =>
    router.push(router.asPath, router.asPath, { locale: value })

  return (
    <div style={{ minWidth: "140px" }}>
      <Select
        styles={customStyles}
        options={languages}
        value={languages.find(({ value }) => value === (router.locale || "en"))}
        onChange={updateLocale}
      />
    </div>
  );
}

export default LanguagePicker;
