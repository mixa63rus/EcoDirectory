import React from "react";
import Select from 'react-select';
import { options, customMainStyles } from './elements';


export default function MainSelect({ value, onChange }) {
    return (
        <Select
        value={value}
        onChange={onChange}
        options={options}
        styles={customMainStyles}
      />
    )
}
