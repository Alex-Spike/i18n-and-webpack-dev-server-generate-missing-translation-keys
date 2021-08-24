import React from 'react';
import {useTranslation} from 'react-i18next'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="header">
      {t('changeLng')}
        {' '}
        <button onClick={() => handleChangeLanguage('ru')} disabled={i18n.language === 'ru'}>ru</button>
        {' '}
        <button onClick={() => handleChangeLanguage('en')} disabled={i18n.language === 'en'}>en</button>
    </div>
  );
};

export default Header;