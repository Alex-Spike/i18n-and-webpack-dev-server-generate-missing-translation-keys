import React from 'react';
import { useTranslation } from 'react-i18next';

const Content: React.FC = () => {
  const { t } = useTranslation('Content');

  return (
    <div className="content">
      {t('text')}
    </div>
  );
};

export default Content;
