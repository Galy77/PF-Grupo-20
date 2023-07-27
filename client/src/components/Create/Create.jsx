import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,getAllCategories } from "../../redux/actions";
import "../Create/Create.style.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2"
import "./create.css"
function Create(){
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.categories);
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    const navigate = useNavigate();
    
    const { user } = useAuth();
    const [isUser, setIsUser] = useState();
  
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
      dispatch(getAllCategories());
    }, [dispatch]);
    
    useEffect(() => {
      if(usuarioActual !== null){
        setIsUser(usuarioActual);
      }else{
        setIsUser(user);
      }
    }, [user, usuarioActual]);
      
    const [input, setInput] = useState({
        name: "",
        description: "",
        price:"",
        image: null,
        stock: "",
        CategoryId:""
    });

    const [error,setError] = useState({
        name: "",
        description: "",
        price:"",
        image: "",
        stock: "",
        CategoryId:""
    })
    if (!isUser) {
      navigate("/login");
      return null;
    }

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
        if(input.image === null){
          error.image = "Ingrese una Imagen.";
        }

        if (input.stock <= 0 || input.stock >= 5000) {
          error.stock = "Ingrese stock válido (entre 0 y 5000).";
        } else if (input.stock.trim().length === 0) {
          error.stock = "Ingrese el stock disponible.";
        }

        if (!/^\d+(\.\d{1,2})?$/.test(input.price)) {
          error.price = "Ingrese un precio válido (número con hasta 2 decimales).";
        } else if(input.price <= 0) {
          error.price = "El precio del producto no puede ser 0 o negativo";
        } else if(input.price.trim().length === 0){
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
        console.log("all Inputs", input);
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
      console.log("all Inputs", input);
        event.preventDefault();
        if (Object.keys(error).length === 0) {
          const productData = {
            ...input
          }
          dispatch(addProduct(productData))
          .then((response) => {
              if(response){
                Swal.fire(
                  'El producto se creo exitosamente!',
                  '',
                  'success'
                );
                setSuccess(true); 
                setInput({
                  name: "",
                  description: "",
                  price:"",
                  image: null,
                  stock: "",
                  CategoryId:""
                });
              }
          })
          .catch((error) => {
            console.log("Error:", error);
          });
          
          
        } else {
            setSuccess(false)
          alert("Faltan datos");
        }
      };
      const goBack = () => {
        window.history.back();
    }
      return (
        <div>
          <div class='w-50 d-flex mx-4'>
              <i class="arrow bi bi-arrow-left-circle-fill" onClick={goBack}></i>
          </div>
          <div className="createContainer">
              <h1 class='mt-4 createProductTittle'>Crea un Producto</h1>
            <Form className="formContainer azul" onSubmit={handleSubmit}>
              <Form.Group controlId="name" class='d-flex flex-column'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Nombre del producto"
                  class='text-center'
                />
                {error.name && <Form.Text className="text-danger">{error.name}</Form.Text>}
              </Form.Group>
    
              <Form.Group controlId="description" class='d-flex flex-column'>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  placeholder="Inserte aquí su descripción..."
                  class='description text-center'
                />
                {error.description && <Form.Text className="text-danger">{error.description}</Form.Text>}
              </Form.Group>
    
              <Form.Group controlId="price" class='d-flex flex-column'>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={handleChange}
                  placeholder="Ej: 750.70"
                  class='text-center'
                />
                {error.price && <Form.Text className="text-danger">{error.price}</Form.Text>}
              </Form.Group>
    
              <Form.Group controlId="category" class='d-flex flex-column'>
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select" name="CategoryId" value={input.CategoryId} onChange={handleChange}>
                  <option value="nn">Seleccione un valor</option>
                  {allCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
                {error.CategoryId && <Form.Text className="text-danger">{error.CategoryId}</Form.Text>}
              </Form.Group>
    
              <Form.Group controlId="image" class='d-flex flex-column'>
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" name="image" onChange={handleImageChange} accept="image/*" />
                {error.image && <Form.Text className="text-danger">{error.image}</Form.Text>}
              </Form.Group>
    
              <Form.Group controlId="stock" class='d-flex flex-column'>
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  value={input.stock}
                  onChange={handleChange}
                  placeholder="65"
                  class='text-center'
                />
                {error.stock && <Form.Text className="text-danger">{error.stock}</Form.Text>}
              </Form.Group>
    
              <Button variant="primary" type="submit">
                Crear
              </Button>
              {success && <p></p>}
            </Form>
          </div>
        </div>
      );
}
export default Create;