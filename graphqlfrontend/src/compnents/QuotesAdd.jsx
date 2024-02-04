import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD_QUOTES } from '../gqloprations/mutations';
import { GET_ALL_QUOTES } from '../gqloprations/query';
function QuotesAdd() {

    const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    name: '',
  });
  const [addQuotes, { loading, error }] = useMutation(ADD_QUOTES, {
    refetchQueries: [{ query: GET_ALL_QUOTES }],
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuotes({
      variables: {
        quoteInput: formData,
      },
    });
    // Add your logic to handle the form submission, e.g., sending the data to an API
    console.log('Form submitted with data:', formData);
    Navigate('/');
  };
  

  if(loading) return <h1>Loading</h1>
  if(error){
      console.log(error.message)
  }
  return (
    <div>
      <h2>Add Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuotesAdd;
