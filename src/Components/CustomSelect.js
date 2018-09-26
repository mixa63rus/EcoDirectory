import React from "react";
import Select from 'react-select';
import { options, customSecondStyles } from './elements';


export default function CustomSelect({ value, onChange }) {
    return (
        <Select
        value={value}
        onChange={onChange}
        options={options}
        styles={customSecondStyles}
      />
    )
}
