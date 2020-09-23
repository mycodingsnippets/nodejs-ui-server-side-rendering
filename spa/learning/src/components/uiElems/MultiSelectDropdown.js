import React, {useEffect, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import './multiSelectDropdown.css';

const MultiSelectDropdown = () => {
    const data = [
        {id: 1, Country: 'India'},
        {id: 2, Country: 'America'},
        {id: 3, Country: 'France'},
        {id: 4, Country: 'Germany'},
    ];

    const [options] = useState(data);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
       console.log(selectedOptions);
    }, [selectedOptions]);

    return (
        <div>
            <Multiselect
                options={options}
                displayValue="Country"
                selectedValues={selectedOptions}
                onSelect={(e) => {
                    setSelectedOptions(e)
                }}
                onRemove={(e) => {
                    setSelectedOptions(e)
                }}
            />
        </div>
    );
}

export default MultiSelectDropdown;