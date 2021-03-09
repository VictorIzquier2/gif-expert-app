import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

    console.log('handleInputChange llamado');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('handleSubmit', inputValue);

    if(inputValue.trim().length > 0){
      setCategories(cats => [inputValue, ...cats])
      setInputValue('');
    }
  }

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
      >
        <p>{inputValue}</p>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </Fragment>
   );
}
AddCategory.protoTypes = {
  setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;