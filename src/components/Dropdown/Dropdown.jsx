import React from 'react';

const Dropdown = ({ options, name }) => (
    <select name={ name }>
        {
            options.map(option => (
                <option key={ option.name } value={ option.name } >{ option.name } </option>
            ))
        }
	</select>
);

export default Dropdown;