import { useTranslation } from "next-i18next";

const TextField = ({ name, onChange, value = "", title }) => {
    const { t } = useTranslation();

    return (
        <label className="block text-gray-700 text-sm font-bold mb-5" htmlFor={name}>
            {title && <p>{t(title)}</p>}
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={name}
                id={name}
                value={value}
                type="text"
                onChange={onChange}
            />
        </label>
    );
};

export default TextField;
