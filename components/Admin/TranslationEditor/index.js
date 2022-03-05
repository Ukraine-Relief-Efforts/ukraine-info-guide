import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  fetchTranslations,
  updateTranslations,
} from "../../../apiClient/TranslationsApi";
import TextField from "../../TextField";
import Spinner from "../../Spinner";
import SaveButton from "./SaveButton";

const TranslationEditor = ({ t, lang }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const init = async () => {
      const res = await fetchTranslations(lang);
      const data = [];
      for (const key in res)
        data.push({ key, value: res[key] });
      setData(data);
    };
    init();
  }, [lang]);

  if (!data)
    return <Spinner />;

  const onUpdate = (key, value) => {
    const newData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === key) {
        newData[i].value = value;
        setData(newData);
        break;
      }
    }
  }

  const onSubmit = async () => {
    const output = {};
    for (const item of data)
      output[item.key] = item.value;
    try {
      await updateTranslations(lang, output);
      toast.success(t("Saved!"));
    } catch (e) {
      toast.error(t("Something went wrong!"));
    }
  }

  return (
    <div className="flex flex-col text-left">
      <SaveButton t={t} onSubmit={onSubmit} />
      {
        data.map(({ key, value }) =>
          <>
            <hr />
            <div key={key} className="flex flex-row items-center">
              <div className="grow basis-0 my-3">
                {key}
              </div>
              <div className="grow basis-0 my-3">
                <TextField
                  value={value}
                  onChange={v => onUpdate(key, v.target.value)}
                />
              </div>
            </div>
          </>
        )
      }
      <hr />
      <SaveButton t={t} onSubmit={onSubmit} />
    </div>
  );
}

export default TranslationEditor;
