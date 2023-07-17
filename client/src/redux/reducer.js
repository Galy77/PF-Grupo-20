// import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER } from "./actionTypes"

// const initialState = {
//     user:{},
//     categories: [{name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},

// /* eslint-disable no-case-declarations */
// /*
//   categories: [{name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},
//      {name: "Tecnología", img: "https://pcacademia.com/wp-content/uploads/2019/09/precios-de-computadoras.jpg"}, 
//      {name: "Electrodomesticos", img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x"}, 
//      {name: "Moda", img: "https://audaces.com/wp-content/uploads/2022/05/estilos-de-moda-qual-o-seu-scaled.jpg"}, 
//      {name: "Alimento y bebidas", img: "https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg"},
//      {name: "Construcción", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhlsHISi9oUcOsHFc4milaQ3kTV7PtxtmQQ&usqp=CAU"}, 
//      {name: "Hobbies", img: "https://www.reed.co.uk/career-advice/wp-content/uploads/sites/6/2016/06/career-advice-article-header-should-i-include-hobbies-and-interests-in-my-cv.jpg"},
//      {name: "Joyeria", img: "https://img.freepik.com/foto-gratis/joyas-oro-gemas-escaparate_1398-4327.jpg?w=2000"}],
//      carouselPhotos: [{img: "https://www.native-instruments.com/typo3temp/pics/img-welcome-hero-guitar-rig-6-player-product-page-01-hero-v2-8c04bb712c562230a837e56511c10f1d-m@2x.jpg", description: "Algun texto descriptivo"},
//      {img: "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Algun texto descriptivo"},
//      {img: "https://images.ecestaticos.com/oycpBwJcX7i-r9GCd1vztzplwCQ=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbfd%2F097%2Fcc7%2Fbfd097cc74485783a690289860e14759.jpg", description: "Algun texto descriptivo"},
//      {img: "https://www.cleanipedia.com/images/iohqr4whhl17/7fvPOEi6Aros2m9Qxdo1De/757a393ca1569b66eff2f27d8f5bfe45/U2NyZWVuc2hvdF8yLnBuZw/944w-629h/lavarropas-de-color-blanco-sobre-un-piso-gris.jpg", description: "Algun texto descriptivo"}
//     ],
// */

import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER,GET_ALL_CATEGORIES, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER} from "./actionTypes"

const initialState = {
    user:{},
    categories:[{id: 1,name: "Muebles", img: "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg"},
    {id: 2,name: "Tecnología", img: "https://pcacademia.com/wp-content/uploads/2019/09/precios-de-computadoras.jpg"}, 
    {id: 3,name: "Electrodomesticos", img: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x"}, 
    {id: 4,name: "Moda", img: "https://audaces.com/wp-content/uploads/2022/05/estilos-de-moda-qual-o-seu-scaled.jpg"}, 
    {id: 5,name: "Alimento y bebidas", img: "https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg"},
    {id: 6,name: "Construcción", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhlsHISi9oUcOsHFc4milaQ3kTV7PtxtmQQ&usqp=CAU"}, 
    {id: 7,name: "Hobbies", img: "https://www.reed.co.uk/career-advice/wp-content/uploads/sites/6/2016/06/career-advice-article-header-should-i-include-hobbies-and-interests-in-my-cv.jpg"},
    {id: 8,name: "Joyeria", img: "https://img.freepik.com/foto-gratis/joyas-oro-gemas-escaparate_1398-4327.jpg?w=2000"}],
    carouselPhotos: [{img: "https://www.native-instruments.com/typo3temp/pics/img-welcome-hero-guitar-rig-6-player-product-page-01-hero-v2-8c04bb712c562230a837e56511c10f1d-m@2x.jpg", description: "Algun texto descriptivo"},
    {img: "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Algun texto descriptivo"},
    {img: "https://images.ecestaticos.com/oycpBwJcX7i-r9GCd1vztzplwCQ=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbfd%2F097%2Fcc7%2Fbfd097cc74485783a690289860e14759.jpg", description: "Algun texto descriptivo"},
    {img: "https://www.cleanipedia.com/images/iohqr4whhl17/7fvPOEi6Aros2m9Qxdo1De/757a393ca1569b66eff2f27d8f5bfe45/U2NyZWVuc2hvdF8yLnBuZw/944w-629h/lavarropas-de-color-blanco-sobre-un-piso-gris.jpg", description: "Algun texto descriptivo"}
   ],
    products: [
        {
          id: 1,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Teléfono inteligente",
          description: "Un teléfono móvil avanzado con funciones inteligentes.",
          price: 599.99,
          stock: 50,
          category: "Hobbies",
          rating:0.1
        },
        {
          id: 2,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Tableta",
          description: "Una tablet de alta calidad para entretenimiento y productividad.",
          price: 399.99,
          stock: 30,
          category: "Hobbies",
          rating:0.6
        },
        {
          id: 3,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Camiseta",
          description: "Una camiseta cómoda y de diseño moderno.",
          price: 19.99,
          stock: 100,
          category: "Hobbies",
          rating:1.4
        },
        {
          id: 4,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Pantalones",
          description: "Pantalones elegantes y duraderos para cualquier ocasión.",
          price: 49.99,
          stock: 80,
          category: "Hobbies",
          rating:1.6
        },
    
        {
          id: 5,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Mesa de comedor",
          description: "Una mesa espaciosa y elegante para compartir comidas en familia.",
          price: 299.99,
          stock: 20,
          category: "Hobbies",
          rating:2.1
        },
        {
          id: 6,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Sofá",
          description: "Un sofá cómodo y de alta calidad para relajarse en el salón.",
          price: 599.99,
          stock: 10,
          category: "Hobbies",
          rating:2.7
        },
        {
          id: 7,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Balón de fútbol",
          description: "Un balón oficial para practicar fútbol con amigos.",
          price: 29.99,
          stock: 50,
          category: "Hobbies",
          rating:3.3
        },
        {
          id: 8,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Raqueta de tenis",
          description: "Una raqueta de tenis profesional para mejorar tu juego.",
          price: 89.99,
          stock: 20,
          category: "Hobbies",
          rating:3.8
        },
    
        {
          id: 9,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "El Gran Gatsby",
          description: "Una novela clásica que retrata la decadencia de la sociedad.",
          price: 14.99,
          stock: 30,
          category: "Hobbies",
          rating:4.5
        },
        {
          id: 10,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Cien años de soledad",
          description: "Una obra maestra de la literatura que narra la historia de una familia.",
          price: 19.99,
          stock: 15,
          category: "Hobbies",
          rating:4.51
        },
        {
          id: 1,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Teléfono inteligente",
          description: "Un teléfono móvil avanzado con funciones inteligentes.",
          price: 599.99,
          stock: 50,
          category: "Hobbies",
          rating:0.1
        },
        {
          id: 2,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Tableta",
          description: "Una tablet de alta calidad para entretenimiento y productividad.",
          price: 399.99,
          stock: 30,
          category: "Hobbies",
          rating:0.6
        },
        {
          id: 3,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Camiseta",
          description: "Una camiseta cómoda y de diseño moderno.",
          price: 19.99,
          stock: 100,
          category: "Hobbies",
          rating:1.4
        },
        {
          id: 4,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Pantalones",
          description: "Pantalones elegantes y duraderos para cualquier ocasión.",
          price: 49.99,
          stock: 80,
          category: "Hobbies",
          rating:1.6
        },
    
        {
          id: 5,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Mesa de comedor",
          description: "Una mesa espaciosa y elegante para compartir comidas en familia.",
          price: 299.99,
          stock: 20,
          category: "Hobbies",
          rating:2.1
        },
        {
          id: 6,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Sofá",
          description: "Un sofá cómodo y de alta calidad para relajarse en el salón.",
          price: 599.99,
          stock: 10,
          category: "Hobbies",
          rating:2.7
        },
        {
          id: 7,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Balón de fútbol",
          description: "Un balón oficial para practicar fútbol con amigos.",
          price: 29.99,
          stock: 50,
          category: "Hobbies",
          rating:3.3
        },
        {
          id: 8,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Raqueta de tenis",
          description: "Una raqueta de tenis profesional para mejorar tu juego.",
          price: 89.99,
          stock: 20,
          category: "Hobbies",
          rating:3.8
        },
    
        {
          id: 9,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "El Gran Gatsby",
          description: "Una novela clásica que retrata la decadencia de la sociedad.",
          price: 14.99,
          stock: 30,
          category: "Hobbies",
          rating:4.5
        },
        {
          id: 10,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Cien años de soledad",
          description: "Una obra maestra de la literatura que narra la historia de una familia.",
          price: 19.99,
          stock: 15,
          category: "Hobbies",
          rating:4.51
        },
        {
          id: 1,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Teléfono inteligente",
          description: "Un teléfono móvil avanzado con funciones inteligentes.",
          price: 599.99,
          stock: 50,
          category: "Hobbies",
          rating:0.1
        },
        {
          id: 2,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Tableta",
          description: "Una tablet de alta calidad para entretenimiento y productividad.",
          price: 399.99,
          stock: 30,
          category: "Hobbies",
          rating:0.6
        },
        {
          id: 3,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Camiseta",
          description: "Una camiseta cómoda y de diseño moderno.",
          price: 19.99,
          stock: 100,
          category: "Hobbies",
          rating:1.4
        },
        {
          id: 4,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Pantalones",
          description: "Pantalones elegantes y duraderos para cualquier ocasión.",
          price: 49.99,
          stock: 80,
          category: "Hobbies",
          rating:1.6
        },
    
        {
          id: 5,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Mesa de comedor",
          description: "Una mesa espaciosa y elegante para compartir comidas en familia.",
          price: 299.99,
          stock: 20,
          category: "Hobbies",
          rating:2.1
        },
        {
          id: 6,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Sofá",
          description: "Un sofá cómodo y de alta calidad para relajarse en el salón.",
          price: 599.99,
          stock: 10,
          category: "Hobbies",
          rating:2.7
        },
        {
          id: 7,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Balón de fútbol",
          description: "Un balón oficial para practicar fútbol con amigos.",
          price: 29.99,
          stock: 50,
          category: "Hobbies",
          rating:3.3
        },
        {
          id: 8,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Raqueta de tenis",
          description: "Una raqueta de tenis profesional para mejorar tu juego.",
          price: 89.99,
          stock: 20,
          category: "Hobbies",
          rating:3.8
        },
    
        {
          id: 9,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "El Gran Gatsby",
          description: "Una novela clásica que retrata la decadencia de la sociedad.",
          price: 14.99,
          stock: 30,
          category: "Hobbies",
          rating:4.5
        },
        {
          id: 10,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
          name: "Cien años de soledad",
          description: "Una obra maestra de la literatura que narra la historia de una familia.",
          price: 19.99,
          stock: 15,
          category: "Hobbies",
          rating:4.51
        }
      ],
      carouselPhotos: [{img: "https://www.native-instruments.com/typo3temp/pics/img-welcome-hero-guitar-rig-6-player-product-page-01-hero-v2-8c04bb712c562230a837e56511c10f1d-m@2x.jpg", description: "Algun texto descriptivo"},
      {img: "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", description: "Algun texto descriptivo"},
      {img: "https://images.ecestaticos.com/oycpBwJcX7i-r9GCd1vztzplwCQ=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbfd%2F097%2Fcc7%2Fbfd097cc74485783a690289860e14759.jpg", description: "Algun texto descriptivo"},
      {img: "https://www.cleanipedia.com/images/iohqr4whhl17/7fvPOEi6Aros2m9Qxdo1De/757a393ca1569b66eff2f27d8f5bfe45/U2NyZWVuc2hvdF8yLnBuZw/944w-629h/lavarropas-de-color-blanco-sobre-un-piso-gris.jpg", description: "Algun texto descriptivo"}
     ],
    orders:[],
    minimumPrice: "",
    maximumPrice: "",
    ratingFilterValue: "all"
}

export const reducer = (state = initialState,{type,payload})=>{
    switch (type) {

        //USER
        case ADD_USER:
            return{
                ...state,
                user:payload
            }
            
        case REMOVE_USER:
            return{
                ...state,
                user: {}
            }

        //PRODUCT
        case ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,payload]
            }
            
        case REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(el => el.id !== payload)
            }

        //ORDER
        case ADD_ORDER:
          const aux = ()=>{
            if(state.orders.length){

            const match = state.orders.filter(el => el.id == payload.id)
            const unmatch = state.orders.filter(el => el.id !== payload.id)

            if(match.length){

              let productos = [...unmatch,...match.map(el =>{
                return{
                ...el,
                cant:el.cant + 1
                }})]

              localStorage.setItem("productos",JSON.stringify(productos))

              return productos
            }else{
              let productos = [...state.orders,payload]
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }

            }else{
              let productos = [payload]
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }
          }
          return{
              ...state,
              orders: aux()
          }
            
        case REMOVE_ORDER:
            const aux1 = () => {
              let productos = state.orders.filter(el => el.id !== payload)
              localStorage.setItem("productos",JSON.stringify(productos))
              return productos
            }
            return{
                ...state,
                orders: aux1()
            }
        
        case MINIMUM_PRICE:
          return {
            ...state,
            minimumPrice: payload
          }

        case MAXIMUM_PRICE:
          return {
            ...state,
            maximumPrice: payload
          }

        case BETTER_QUALIFIED_FILTER:
          return {
              ...state,
              ratingFilterValue: payload
          }

        case ALL_FILTER:
          return {
            ...state,
            ratingFilterValue: payload
          }

            
          case GET_ALL_CATEGORIES:
            return{
              ...state,
              categories:payload
            }
            

        default:
            return{
                ...state
            }
            
    }
}