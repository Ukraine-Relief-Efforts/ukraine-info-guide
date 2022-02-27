import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";

import {useTranslation} from "react-i18next";

const PolandFormPage = () => {
    const {t} = useTranslation();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Layout hero={<Hero title={t("Form to apply for Asylum in Poland")}/>}>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h1 className="text-lg mt-6 mb-3">{t("Personal Data")}</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-5" htmlFor="firstName">
                            <p>{t("First Name")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="firstName"
                                id="firstName" type="text"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Last Name")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="lastName"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Maiden Name")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="maidenName"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Father's Name")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="fathersName"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Mother's Name")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="mothersName"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Date of Birth")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="dateOfBirth"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Sex")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="sex"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Place of Birth")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="placeOfBirth"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Country of Birth")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="countryOfBirth"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Citizenships")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="citizenships"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Marital status")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="maritalStatus"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Height")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="height"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Color of Eyes")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="colorOfEyes"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Special Marks")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="specialMarks"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Polish Identification Number")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="polishIdentificationNumber"/>
                        </label>
                        <h1 className="text-lg mt-6 mb-3">{t("Travel Documents")}</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Series")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="series"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Number")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="number"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Date of issue")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="dateOfIssue"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Date of Expiry")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="dateOfExpiry"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Issuing Authority")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="issuingAuthority"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Number of entered persons")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="numberOfEnteredPersons"/>
                        </label>
                        <h1 className="text-lg mt-6 mb-3">{t("Place of Stay")}</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("City")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="city"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Street")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="street"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Building Number")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="buildingNumber"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Apartment number")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="apartmentNumber"/>
                        </label>
                        <label className="block text-gray-700 text-sm font-bold mb-5">
                            <p>{t("Postal Code")}</p>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="postalCode"/>
                        </label>
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
