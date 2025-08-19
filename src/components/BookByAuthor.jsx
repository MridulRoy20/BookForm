import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`https://be-4-assignment1-pi-three.vercel.app/books/author/${author}`)
    console.log(data);
    
    return(
        <div>
            <h1>Books By {author}</h1>
            <ul>
                {data?.map(book => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
    // ) : (
    // <div>
    //     {loading && <p>Loading.. </p>}
    // </div>)

}
export default BookByAuthor;