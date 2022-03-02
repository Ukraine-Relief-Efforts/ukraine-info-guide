import React from "react";
import SelectSearch from "react-select-search";
import { useRouter } from "next/router";
import languages from "../../configs/languages";

const LanguagePicker = () => {
  const router = useRouter();

  const updateLocale = (locale) =>
    router.push(router.asPath, router.asPath, { locale });

  return (
    <SelectSearch
      name="language"
      options={languages}
      value={languages.find(({ value }) => value === (router.locale || "en"))}
      onChange={updateLocale}
    />
  );
}

export default LanguagePicker;
