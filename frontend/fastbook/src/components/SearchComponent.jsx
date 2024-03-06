import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  const [ books, setBooks ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:8000/libros/'
  

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setBooks(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }

   //metodo de filtrado 2   
   const results = !search ? books : books.filter((dato)=> dato.libro_nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>AUTOR</th>
                    <th>STOCK</th>
                    <th>RESERVAR</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.libro_nombre}</td>
                        <td>{book.autor_id.autor_nombre}</td>
                        <td>{book.libro_stock}</td>
                        <td>
                            {/* Agrega aquí el botón o icono para reservar */}
                            <button onClick={() => reservarLibro(book.id)}>
                            Agregar al Carrito
                            </button>
                         </td>
                    </tr>                    
                ))} 
            </tbody>
        </table>
    </div>
  )
}

const reservarLibro = (libroId) => {
    
    console.log(`Reservar libro con ID: ${libroId}`);
  };
  
export default SearchComponent;