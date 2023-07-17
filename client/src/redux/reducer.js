import { ADD_USER,REMOVE_USER,ADD_PRODUCT,REMOVE_PRODUCT,ADD_ORDER,REMOVE_ORDER,GET_ALL_CATEGORIES, MINIMUM_PRICE, MAXIMUM_PRICE, BETTER_QUALIFIED_FILTER, ALL_FILTER, GET_ALL_PRODUCTS} from "./actionTypes"

const initialState = {
    user:{},
    categories:[
      {
        id: "MLA5725",
        name: "Accesorios para Vehículos",
        img: "https://peru21.pe/resizer/Q-FJJsYBO0XDVoatA2evvlgq6FQ=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NPWZ3NUUK5BSBIK62Q33KTTZQI.jpg"
      },
      {
        id: "MLA1512",
        name: "Agro",
        img: "https://agroapparg.com/img/arch-slider/intro_og.png"
      },
      {
        id: "MLA1403",
        name: "Alimentos y Bebidas",
        img: "https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg"
      },
      {
        id: "MLA1071",
        name: "Animales y Mascotas",
        img: "https://as01.epimg.net/diarioas/imagenes/2022/01/09/actualidad/1641723199_369382_1641723267_noticia_normal_recorte1.jpg"
      },
      {
        id: "MLA1367",
        name: "Antigüedades y Colecciones",
        img: "https://http2.mlstatic.com/D_NQ_NP767510-MLA44229767080_122020-O.webp"
      },
      {
        id: "MLA1368",
        name: "Arte, Librería y Mercería",
        img: "https://http2.mlstatic.com/D_NQ_NP657477-MLA43230937556_082020-O.webp"
      },  
      {
        id: "MLA1743",
        name: "Autos, Motos y Otros",
        img: "https://www.auto-casa.com.ar/public/images/avisos/fotos/2876--07092021134523.jpg"
      },
      {
        id: "MLA1384",
        name: "Bebés",
        img: "https://www.consumer.es/app/uploads/fly-images/95613/img_como-debe-ser-cuna-hd-1200x550-cc.jpg"
      },
      {
        id: "MLA1246",
        name: "Belleza y Cuidado Personal",
        img: "https://diarioresponsable.com/images/CLARA_2021/unilever_belleza_positiva_dr.png"
      },
      {
        id: "MLA1039",
        name: "Cámaras y Accesorios",
        img: "https://www.javierdlt.com/wp-content/uploads/2022/01/accesorios-para-camaras-fotograficas.jpg"
      },
      {
        id: "MLA1051",
        name: "Celulares y Teléfonos",
        img: "https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg"
      },
      {
        id: "MLA1648",
        name: "Computación",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQffZtTNgoiIjp82xHiyvKyymuWIMtu3Rz_Q&usqp=CAU"
      },
      {
        id: "MLA1144",
        name: "Consolas y Videojuegos",
        img: "https://cnnespanol.cnn.com/wp-content/uploads/2021/12/211201164602-file-sony-playstation-5-microsoft-xbox-series-x-consoles-restricted-super-tease.jpg?quality=100&strip=info"
      },
      {
        id: "MLA1500",
        name: "Construcción",
        img: "https://www.elindependiente.com.ar/elindependiente/1.0/img/743550066.jpg"
      },
      {
        id: "MLA1276",
        name: "Deportes y Fitness",
        img: "https://2356021.fs1.hubspotusercontent-na1.net/hubfs/2356021/areas%20de%20un%20gimnasio.webp"
      },
      {
        id: "MLA5726",
        name: "Electrodomésticos y Aires Ac.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy50q1pV8ZPhkGevaIhAJ3hc-X_TPZj0gyg&usqp=CAU"
      },
      {
        id: "MLA1000",
        name: "Electrónica, Audio y Video",
        img: "https://mundocdistribuciones.com/wp-content/uploads/2019/10/Electr%C3%B3nica-Audio-y-Video-1-2.jpg"
      },
      {
        id: "MLA2547",
        name: "Entradas para Eventos",
        img: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/1200x630/public/2022-07/conciertos-recomendaciones.jpg?itok=N4PhTFa8"
      },
      {
        id: "MLA407134",
        name: "Herramientas",
        img: "https://definicion.de/wp-content/uploads/2010/06/herramienta-1.jpg"
      },
      {
        id: "MLA1574",
        name: "Hogar, Muebles y Jardín",
        img: "https://media.admagazine.com/photos/618a625090c4ec9a52ca0f33/master/w_1600%2Cc_limit/81384.jpg"
      },
      {
        id: "MLA1499",
        name: "Industrias y Oficinas",
        img: "https://images.theconversation.com/files/349727/original/file-20200727-37-592phd.jpg?ixlib=rb-1.1.0&rect=359%2C159%2C4967%2C3386&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
      },
      {
        id: "MLA1459",
        name: "Inmuebles",
        img: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg"
      },
      {
        id: "MLA1182",
        name: "Instrumentos Musicles",
        img: "https://www.elfinanciero.com.mx/resizer/KmztX7EtED6nwEhERiawZ8T8xD8=/400x267/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/IEUM66UOW5ET3LSESPXRUULXU4.jpg"
      },
      {
        id: "MLA3937",
        name: "Joyas y Relojes",
        img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766823152443.jpg"
      },
      {
        id: "MLA1132",
        name: "Juegos y Juguetes",
        img: "https://www.clikisalud.net/wp-content/uploads/2016/10/shutterstock_320840780.jpg"
      },
      {
        id: "MLA3025",
        name: "Libros, Revistas y Comics",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FOjTvChpVjaK2mUfCCqwQsamy7kBmj0mdw&usqp=CAU"
      },  
      {
        id: "MLA1168",
        name: "Música, Películas y Series",
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/L4JXVA3U7WRCNLUT62YBMAJW24.jpg"
      },
      {
        id: "MLA1430",
        name: "Ropa y Accesorios",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFnsFFWii_iNSdUAEoz9lYu8P30-DI_LbZQ&usqp=CAU"
      },
      {
        id: "MLA409431",
        name: "Salud y Equipamiento Médico",
        img: "https://concepto.de/wp-content/uploads/2013/08/salud-OMS-e1551914081412.jpg"
      },
      {
        id: "MLA1540",
        name: "Servicios",
        img: "https://numdea.com/wp-content/uploads/2020/03/definicion-servicios.jpg"
      },
      {
        id: "MLA9304",
        name: "Souvenirs, Cotillón y Fiestas",
        img: "https://estaticos-cdn.prensaiberica.es/clip/2b02df77-1e52-4ca2-980b-606a0a153ab0_16-9-aspect-ratio_default_0.jpg"
      },
      {
        id: "MLA1953",
        name: "Otras categorías",
        img: "https://www.revistaneo.com/sites/default/files/2018-01/Viajar.jpg"
      }
      ],  
    products: [],
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
              // categories:payload
            }
            
        case GET_ALL_PRODUCTS:
          return{
            ...state,
            products: payload
          }

        default:
            return{
                ...state
            }
            
    }
}