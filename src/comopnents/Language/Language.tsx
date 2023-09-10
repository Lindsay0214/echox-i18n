import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Language = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [dropdownLanguage, setDropdownLanguage] = React.useState(i18n.language || 'zh_TW');

    const languageHandler = (event: React.ChangeEvent<any>) => {
        const newLanguage = event.target.value;
        if (dropdownLanguage !== newLanguage) {
            i18n.changeLanguage(newLanguage);
            setDropdownLanguage(newLanguage);
            navigate("/" + newLanguage + "/home");
        }
    };

    return (
        <FormControl style={{ width: "200px" }}>
            <InputLabel id="select-label">Language</InputLabel>
            <Select labelId="select-label" id="select" value={dropdownLanguage} onChange={languageHandler}>
                <MenuItem value="zh-TW">繁體中文</MenuItem>
                <MenuItem value="zh-CN">简体中文</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Language;
