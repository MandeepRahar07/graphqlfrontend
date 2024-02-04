import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_QUOTES } from '../gqloprations/query';
import { DELETE_QUOTE } from '../gqloprations/mutations';
import { Link } from 'react-router-dom';
function Quotes() {

    const {loading, error, data,refetch } = useQuery(GET_ALL_QUOTES);
    const [deleteQuote] = useMutation(DELETE_QUOTE);

    if(loading) return <h1>Loading</h1>
    if(error){
        console.log(error.message)
    }
    const handleDelete = async (id) => {
        try {
          await deleteQuote({
            variables: { _id: id },
          });
          // After deletion, refetch the data to update the UI
          refetch();
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        <div>
         
            <ul>
              {data.quotes.map((item,i) => {
                return <div>
                    <li key={item.id}>{item.name}</li>
                    <h1>{item.id}</h1>
                    <Link to={`/edit/${item._id}`}>
                  <button>Edit</button>
                         </Link>

                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
                })}
            </ul>
       
        </div>
      );
}

export default Quotes