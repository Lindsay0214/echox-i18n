import React from 'react';
import { useTranslation } from 'react-i18next';

const Content = () => {
    const { t } = useTranslation();

    return (
        <div className="content">
            <p>{t('home')}</p>
            <p>{t('about')}</p>
        </div>
    )
};

export default Content;
