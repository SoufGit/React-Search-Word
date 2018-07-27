import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldMultiline = ({ value, onChange, rowsMax, label, className }) => (
    <TextField
        id="multiline-flexible"
        label={label}
        multiline
        rowsMax={rowsMax}
        value={value}
        onChange={onChange}
        margin="normal"
        className={className}
    />
);

export default TextFieldMultiline;