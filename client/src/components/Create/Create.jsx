/* name, description, price, catergory, image, stock y rating */
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,getAllCategories } from "../../redux/actions";
import "../Create/Create.style.css";

function Create(){
    //const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.categories);

    const [success, setSuccess] = useState(false);
  /*
    useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);
  */
    const [input, setInput] = useState({
        name: "",
        description: "",
        price:"",
        image: null,
        stock: "",
        rating:"",
        category:""
    });

    const [error,setError] = useState({
        name: "",
        description: "",
        price:"",
        image: "",
        stock: "",
        rating:"",
        category:""
    })


    const validate = (input) =>{
      
        let error = {}
      
        if (input.name.trim().length === 0) {
          error.name = "Ingrese un nombre.";
        } 
      
       
        if (input.description.trim().length === 0) {
          error.description = "Ingrese una descripción.";
        }else if(input.description.length < 20 ||input.description.length > 500){
          error.description = "La descripción debe tener entre 20 y 500 caracteres."
        }

      
        if (input.rating <= 1 || input.rating >= 5) {
          error.rating = "Ingrese una calificación válida (entre 1 y 5).";
        }else if(input.rating.trim().length === 0){
          error.rating = "Ingrese una calificación.";
        }

        if (input.stock <= 0 || input.stock >= 5000) {
            error.stock = "Ingrese stock válido (entre 0 y 5000).";
        }else if((input.rating.trim().length === 0) ){
            error.stock = "Ingrese el stock disponible.";
        }

        if (!/^\d+(\.\d{1,2})?$/.test(input.price)) {
          error.price = "Ingrese un precio válido (número con hasta 2 decimales).";
        }else if(input.price.trim().length === 0){
          error.price = "Ingrese un precio."
        }

        return error;  
        
      }

    const handleChange = (event) => {
      console.log(event.target.value)
        setInput({
          ...input,
          [event.target.name]: event.target.value
        });
        
        setError(
          validate({
            ...input,
            [event.target.name]: event.target.value
          })
        );
        
      }
      
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        setInput({
          ...input,
          image: file,
        });
    
        setError(
          validate({
            ...input,
            image: file,
          })
        );
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(error).length === 0) {
          alert("todo nashei")
          /*const productData = {
            ...input
          }
          dispatch(addProduct(productData))
          .then((response) => {
              alert("¡El juego se creó exitosamente!");
              setSuccess(true); // Actualiza el estado de éxito si la respuesta fue exitosa
              setInput({
                name: "",
                description: "",
                price:"",
                image: null,
                stock: "",
                rating:"",
                category:""
              });
          })
          .catch((error) => {
            console.log("Error:", error);
          });
          */
        } else {
            setSuccess(false)
          alert("Faltan datos");
        }
      };
    return(
        <div>
          <div className="createContainer">

          
            <form  className="formContainer" onSubmit={handleSubmit}> 
                <h1>Crear tu Producto</h1>
                <label className="titleInput" >Nombre</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Nombre del producto"/>
                 <p>{error.name && error.name}</p>

                <label className="titleInput" >Descripcion</label>
                <input type="text" name="description" value={input.description} onChange={handleChange} placeholder="inserte aquí su descripcion..."/>
                <p>{error.description && error.description}</p>

                <label className="titleInput" >Precio</label>
                <input type="text" name="price" value={input.price} onChange={handleChange} placeholder="Ej: 750.70"/>
                <p>{error.price && error.price}</p>

                <label>Categoria</label>
                <select id="genreSelect" name="category" value={input.category} onChange={handleChange}>
                    <option value="nn">Seleccione un valor</option>
                    {allCategories.map((category) => (
                        <option key={category.id} value={category.name}>
                    {category.name}
                    </option>
                    ))}
                </select>
                <p>{error.category && error.category}</p>

                <label>Imagen</label>
                 <input type="file" name="image" onChange={handleImageChange} accept="image/*"/>
        <p>{error.image && error.image}</p>

                <label>Stock</label>
                <input type="text" name="stock" value={input.stock} onChange={handleChange} placeholder="65"/>
                <p>{error.stock && error.stock}</p>

                <label>Puntuacion</label>
                <input type="text" name="rating" value={input.rating} onChange={handleChange} placeholder="Ej: 4.5"/>
                <p>{error.rating && error.rating}</p>

                <button type="submit" onClick={handleSubmit}>Crear</button>
                {success && <p></p>}
            </form>
        </div>
      </div>
    )
}
export default Create
