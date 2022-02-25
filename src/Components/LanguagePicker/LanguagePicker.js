import React from 'react';
import { useTranslation }  from 'react-i18next';

const LanguagePicker = () => {
	const { i18n } = useTranslation();

	const onChange = ev => i18n.changeLanguage(ev.target.value || 'en');

	return (
		<select onChange={onChange} value={i18n.language}>
			<option value="en">English</option>
			<option value="ua">Українська</option>
			<option value="ru">Русский</option>
		</select>
	);
}

export default LanguagePicker;
