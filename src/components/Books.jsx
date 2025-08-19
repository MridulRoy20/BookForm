import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
    const {data, loading, error} = useFetch("https://be-4-assignment1-pi-three.vercel.app/books");
    const [successMessage, setSuccessMessage] = useState("")
    const handleDelete = async(bookId) => {
        try {
            const response = await fetch(`https://be-4-assignment1-pi-three.vercel.app/books/${bookId}`, {
            method: "DELETE"
            })
            if(!response.ok){
                throw "Unable to delete book."
            }
            const data = await response.json();
            if(data){
                setSuccessMessage("Book Successfully Deleted.");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(data);
    return(
        <>
            <h1>All Books</h1>
            <ul>
                {data?.map(book => (
                    <li key={book._id}>{book.title}{"  "}<button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </>
    )
}
export default Books;