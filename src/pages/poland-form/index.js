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
      <Hero title="Form to apply for Asylum in Poland" />
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1>Personal Data</h1>
            <label>
              <p>First Name</p>
              <input name="firstName" />
            </label>
            <label>
              <p>Last Name</p>
              <input name="lastName" />
            </label>
            <label>
              <p>Maiden Name</p>
              <input name="maidenName" />
            </label>
            <label>
              <p>Father's Name</p>
              <input name="fathersName" />
            </label>
            <label>
              <p>Mother's Name</p>
              <input name="mothersName" />
            </label>
            <label>
              <p>Date of Birth</p>
              <input name="dateOfBirth" />
            </label>
            <label>
              <p>Sex</p>
              <input name="sex" />
            </label>
            <label>
              <p>Place of Birth</p>
              <input name="placeOfBirth" />
            </label>
            <label>
              <p>Country of Birth</p>
              <input name="countryOfBirth" />
            </label>
            <label>
              <p>Citizenships</p>
              <input name="citizenships" />
            </label>
            <label>
              <p>Marital status</p>
              <input name="maritalStatus" />
            </label>
            <label>
              <p>Height</p>
              <input name="height" />
            </label>
            <label>
              <p>Color of Eyes</p>
              <input name="colorOfEyes" />
            </label>
            <label>
              <p>Special Marks</p>
              <input name="specialMarks" />
            </label>
            <label>
              <p>Polish Identification Number</p>
              <input name="polishIdentificationNumber" />
            </label>
            <h1>Travel Documents</h1>
            <label>
              <p>Series</p>
              <input name="series" />
            </label>
            <label>
              <p>Number</p>
              <input name="number" />
            </label>
            <label>
              <p>Date of issue</p>
              <input name="dateOfIssue" />
            </label>
            <label>
              <p>Date of Expiry</p>
              <input name="dateOfExpiry" />
            </label>
            <label>
              <p>Issuing Authority</p>
              <input name="issuingAuthority" />
            </label>
            <label>
              <p>Number of entered persons</p>
              <input name="numberOfEnteredPersons" />
            </label>
            <h1>Place of Stay</h1>
            <label>
              <p>City</p>
              <input name="city" />
            </label>
            <label>
              <p>Street</p>
              <input name="street" />
            </label>
            <label>
              <p>Building Number</p>
              <input name="buildingNumber" />
            </label>
            <label>
              <p>Apartment number</p>
              <input name="apartmentNumber" />
            </label>
            <label>
              <p>Postal Code</p>
              <input name="postalCode" />
            </label>
          </fieldset>
          <button type="submit">Sumbit</button>
        </form>
      </div>
    </Layout>
  );
};

export default PolandFormPage;
