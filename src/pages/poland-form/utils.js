const t = (s) => s;

export const personalDataInputs = [
    {
        name: "firstName",
        title: t("First Name")
    },
    {
        name: "lastName",
        title: t("Last Name")
    },
    {
        name: "maidenName",
        title: t("Maiden Name")
    },
    {
        name: "fathersName",
        title: t("Father's Name")
    },
    {
        name: "mothersName",
        title: t("Mother's Name")
    },
    {
        name: "sex",
        title: t("Sex")
    },
    {
        name: "dateOfBirth",
        title: t("Date of Birth")
    },
    {
        name: "placeOfBirth",
        title: t("Place of Birth")
    },
    {
        name: "countryOfBirth",
        title: t("Country of Birth")
    },
    {
        name: "citizenships",
        title: t("Citizenships")
    },
    {
        name: "maritalStatus",
        title: t("Marital Status")
    },
    {
        name: "height",
        title: t("Height")
    },
    {
        name: "specialMarks",
        title: t("Special Marks")
    },
    {
        name: "colorOfEyes",
        title: t("Color of Eyes")
    },
    {
        name: "polishIdentificationNumber",
        title: t("Polish Identification Number")
    },
];
export const travelDocumentsInputs = [
    {
        name: "series",
        title: t("Series")
    },
    {
        name: "number",
        title: t("Number")
    },
    {
        name: "dateOfIssue",
        title: t("Date of Issue")
    },
    {
        name: "dateOfExpiry",
        title: t("Date of Expiry")
    },
    {
        name: "issuingAuthority",
        title: t("Issuing Authority")
    },
    {
        name: "numberOfEnteredPersons",
        title: t("Number of Entered Persons")
    },
];
export const placeOfStayInputs = [
    {
        name: "city",
        title: t("City")
    },
    {
        name: "street",
        title: t("Street")
    },
    {
        name: "buildingNumber",
        title: t("Building Number")
    },
    {
        name: "apartmentNumber",
        title: t("Apartment Number")
    },
    {
        name: "postalCode",
        title: t("Postal Code")
    },
];

export const initializeFieldsState = () => {
    const allInputs = personalDataInputs.concat(travelDocumentsInputs).concat(placeOfStayInputs);

    return allInputs.reduce((finalState, inputItem) => ({...finalState, [inputItem.name]: ""}), {});
}
