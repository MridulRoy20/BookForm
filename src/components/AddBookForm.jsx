import { useState } from "react";

const AddBookFrom = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState, [name] : name === "publishedYear" || name === "rating" ? parseInt(value): value
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("https://be-4-assignment1-pi-three.vercel.app/books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        if(!response.ok){
            console.log("Failed to add Book.");
            
        }

        const data = await response.json();
        console.log("New Book Added.",data);
            

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label for="title">Title:</label><br/>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="author">Author:</label><br/>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="publishedYear">Published Year:</label><br/>
            <input type="number" id="publishedYear" name="publishedYear" value={formData.publishedYear} onChange={handleChange}  required/>
            <br/><br/>

            
            <label for="genre">Genre:</label><br/>
            <input type="text" id="genre" name="genre" value={formData.genre} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="language">Language:</label><br/>
            <input type="text" id="language" name="language" value={formData.language} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="country">Country:</label><br/>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="rating">Rating:</label><br/>
            <input type="number" step="0.1" id="rating" name="rating" min="0" max="10" value={formData.rating} onChange={handleChange} required/>
            <br/><br/>

            
            <label for="summary">Summary:</label><br/>
            <textarea id="summary" name="summary" rows="4" cols="50" value={formData.summary} onChange={handleChange} required></textarea>
            <br/><br/>

            
            <label for="coverImageUrl">Cover Image URL:</label><br/>
            <input type="url" id="coverImageUrl" name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange} required/>
            <br/><br/>

            
            <button type="submit">Add Book</button>
        </form>
        </>
    )
}
export default AddBookFrom;