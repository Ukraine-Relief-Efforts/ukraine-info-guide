import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TextField from "../components/TextField";
import {
    placeOfStayInputs,
    personalDataInputs,
    travelDocumentsInputs,
    initializeFieldsState
} from "../configs/polandFormConfig";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const PolandFormPage = () => {
    const { t } = useTranslation();
    const [fieldsValues, setFieldsValues] = useState(initializeFieldsState());

    const handleChangeInputs = ({ target }) => {
        const { name, value } = target;
        setFieldsValues({...fieldsValues, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const renderTextField = ({ name, title }) => (
      <div className="mb-5">
        <TextField
            key={name}
            title={title}
            name={name}
            value={fieldsValues[name]}
            onChange={handleChangeInputs}
        />
      </div>
    );

    return (
        <Layout hero={<Hero title={t("Form to apply for Asylum in Poland")}/>}>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h1 className="text-lg mt-6 mb-3">
                            {t("Personal Data")}
                        </h1>
                        {personalDataInputs.map(renderTextField)}

                        <h1 className="text-lg mt-6 mb-3">
                            {t("Travel Documents")}
                        </h1>
                        {travelDocumentsInputs.map(renderTextField)}

                        <h1 className="text-lg mt-6 mb-3">
                            {t("Place of Stay")}
                        </h1>
                        {placeOfStayInputs.map(renderTextField)}
                    </fieldset>
                    <button type="submit" className="mt-4 mb-20 p-3 rounded" style={{backgroundColor: "#999"}}>
                        {t("Submit")}
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default PolandFormPage;
