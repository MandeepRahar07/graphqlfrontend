// // QuotesEdit.js

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_QUOTE, EDIT_QUOTE } from '../gqloprations/mutations';

// function QuotesEdit() {
//   const { id } = useParams();
//   const Navigate = useNavigate();
//   const { loading, error, data } = useQuery(GET_QUOTE, {
//     variables: { _id: id },
//   });

//   const [formData, setFormData] = useState({
//     title: '',
//     name: '',
//   });

//   const [editQuote] = useMutation(EDIT_QUOTE);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await editQuote({
//         variables: {
//           _id: id,
//           quoteUpdate: formData,
//         },
//       });
//       Navigate('/');
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <p>Error fetching quote</p>;

//   const { title, name } = data.editQuote;

//   return (
//     <div>
//       <h2>Edit Quote</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title || title}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name || name}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default QuotesEdit;
