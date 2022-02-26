import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";

import { useTranslation } from "react-i18next";

const PolandFormPage = () => {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Hero title={t("Form to apply for Asylum in Poland")} />
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1 className="text-lg mt-6 mb-3">{t("Personal Data")}</h1>
            <label>
              <p>{t("First Name")}</p>
              <input name="firstName" />
            </label>
            <label>
              <p>{t("Last Name")}</p>
              <input name="lastName" />
            </label>
            <label>
              <p>{t("Maiden Name")}</p>
              <input name="maidenName" />
            </label>
            <label>
              <p>{t("Father's Name")}</p>
              <input name="fathersName" />
            </label>
            <label>
              <p>{t("Mother's Name")}</p>
              <input name="mothersName" />
            </label>
            <label>
              <p>{t("Date of Birth")}</p>
              <input name="dateOfBirth" />
            </label>
            <label>
              <p>{t("Sex")}</p>
              <input name="sex" />
            </label>
            <label>
              <p>{t("Place of Birth")}</p>
              <input name="placeOfBirth" />
            </label>
            <label>
              <p>{t("Country of Birth")}</p>
              <input name="countryOfBirth" />
            </label>
            <label>
              <p>{t("Citizenships")}</p>
              <input name="citizenships" />
            </label>
            <label>
              <p>{t("Marital status")}</p>
              <input name="maritalStatus" />
            </label>
            <label>
              <p>{t("Height")}</p>
              <input name="height" />
            </label>
            <label>
              <p>{t("Color of Eyes")}</p>
              <input name="colorOfEyes" />
            </label>
            <label>
              <p>{t("Special Marks")}</p>
              <input name="specialMarks" />
            </label>
            <label>
              <p>{t("Polish Identification Number")}</p>
              <input name="polishIdentificationNumber" />
            </label>
            <h1 className="text-lg mt-6 mb-3">{t("Travel Documents")}</h1>
            <label>
              <p>{t("Series")}</p>
              <input name="series" />
            </label>
            <label>
              <p>{t("Number")}</p>
              <input name="number" />
            </label>
            <label>
              <p>{t("Date of issue")}</p>
              <input name="dateOfIssue" />
            </label>
            <label>
              <p>{t("Date of Expiry")}</p>
              <input name="dateOfExpiry" />
            </label>
            <label>
              <p>{t("Issuing Authority")}</p>
              <input name="issuingAuthority" />
            </label>
            <label>
              <p>{t("Number of entered persons")}</p>
              <input name="numberOfEnteredPersons" />
            </label>
            <h1 className="text-lg mt-6 mb-3">{t("Place of Stay")}</h1>
            <label>
              <p>{t("City")}</p>
              <input name="city" />
            </label>
            <label>
              <p>{t("Street")}</p>
              <input name="street" />
            </label>
            <label>
              <p>{t("Building Number")}</p>
              <input name="buildingNumber" />
            </label>
            <label>
              <p>{t("Apartment number")}</p>
              <input name="apartmentNumber" />
            </label>
            <label>
              <p>{t("Postal Code")}</p>
              <input name="postalCode" />
            </label>
          </fieldset>
          <button
            type="submit"
            className="mt-4 mb-20 p-3 rounded"
            style={{ backgroundColor: "#999" }}
          >
            {t("Submit")}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PolandFormPage;
