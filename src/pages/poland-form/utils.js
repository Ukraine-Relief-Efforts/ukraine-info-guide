export const personalDataInputs = [
    {
        name: "firstName",
        title: "First Name"
    },
    {
        name: "lastName",
        title: "Last Name"
    },
    {
        name: "maidenName",
        title: "Maiden Name"
    },
    {
        name: "fathersName",
        title: "Father's Name"
    },
    {
        name: "mothersName",
        title: "Mother's Name"
    },
    {
        name: "sex",
        title: "Sex"
    },
    {
        name: "dateOfBirth",
        title: "Date of Birth"
    },
    {
        name: "placeOfBirth",
        title: "Place of Birth"
    },
    {
        name: "countryOfBirth",
        title: "Country of Birth"
    },
    {
        name: "citizenships",
        title: "Citizenships"
    },
    {
        name: "maritalStatus",
        title: "Marital Status"
    },
    {
        name: "height",
        title: "Height"
    },
    {
        name: "specialMarks",
        title: "Special Marks"
    },
    {
        name: "colorOfEyes",
        title: "Color of Eyes"
    },
    {
        name: "polishIdentificationNumber",
        title: "Polish Identification Number"
    },
];
export const travelDocumentsInputs = [
    {
        name: "series",
        title: "Series"
    },
    {
        name: "number",
        title: "Number"
    },
    {
        name: "dateOfIssue",
        title: "Date of Issue"
    },
    {
        name: "dateOfExpiry",
        title: "Date of Expiry"
    },
    {
        name: "issuingAuthority",
        title: "Issuing Authority"
    },
    {
        name: "numberOfEnteredPersons",
        title: "Number of Entered Persons"
    },
];
export const placeOfStayInputs = [
    {
        name: "city",
        title: "City"
    },
    {
        name: "street",
        title: "Street"
    },
    {
        name: "buildingNumber",
        title: "Building Number"
    },
    {
        name: "apartmentNumber",
        title: "Apartment Number"
    },
    {
        name: "postalCode",
        title: "Postal Code"
    },
];

export const initializeFieldsState = () => {
    const allInputs = personalDataInputs.concat(travelDocumentsInputs).concat(placeOfStayInputs);

    return allInputs.reduce((finalState, inputItem) => ({...finalState, [inputItem.name]: ""}), {});
}
