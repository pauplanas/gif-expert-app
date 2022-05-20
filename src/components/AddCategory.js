import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 2) {
            return;
        }
        setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func,
}

export default AddCategory;
