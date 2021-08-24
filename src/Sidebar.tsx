import React from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
  const { t } = useTranslation('Sidebar');

  return (
    <ul className="sidebar">
      <li>{t('home')}</li>
      <li>{t('posts')}</li>
      <li>{t('about')}</li>
      <li>{t('news')}</li>
      <li>{t('contact')}</li>
      <li>{t('contact-new')}</li>
    </ul>
  );
};

export default Sidebar;