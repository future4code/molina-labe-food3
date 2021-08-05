
import React, { useContext, useState, useEffect }  from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'


import {useParams} from 'react-router-dom'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import CardProduct from './CardProduct/CardProduct'
import getRestaurant from '../../services/getRestaurant/getRestaurant'
import Footer from '../../components/Footer/Footer'
import { ContainerRestaurantsDetails, CardCategory } from './styled'
import Header from '../../components/Header/Header'


const ShoppingDetail = () =>{
    useProtectedPage()
    
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [products, setProducts] = useState([])
    const params = useParams()
    const [quant, setQuant]=useState(0)
    const {cart,setCart}=useContext(GlobalStateContext)

    const onChangeQuant = (event) =>{
        setQuant(event.target.value)
    } 
    
    const sendQuant = (id,nome,preco,descricao,picture,category)=>{ 
        const obj = {
            id: id,
            name: nome,
            description: descricao,
            quantidade: Number(quant),
            price: preco,
            url: picture,
            category: category,
            idRestaurant: params.id,
            restaurantName: restaurant.name,
            restaurantTime: restaurant.deliveryTime,
            restauranteAddress: restaurant.address,
            shipping : restaurant.shipping
        } 
        setCart([...cart,obj])
    }
        
    useEffect(() => {
        tryGetRestaurante()
    }, [])
    
    const tryGetRestaurante = async() => {
        try {
            const res = await getRestaurant(params.id)
            setRestaurant(res.data.restaurant)
            setProducts(res.data.restaurant.products)
            analizeCategories(res.data.restaurant.products)
            setIsLoading(false)
                
        } catch (err){
            alert(err.message)
        }
    }
    
    const analizeCategories = (products) => {
        const newCategories = []
        products.forEach(product=>{
            if(newCategories.includes(product.category) === false) {
                newCategories.push(product.category)
            }
        })
        setCategories(newCategories)
    }
    
    const renderCategory = () => {
        let i
        let  auxiliarArray = []
        for( i=0; i<categories.length; i++){
            const auxiliar = renderiza(categories[i])
            auxiliarArray.push(auxiliar)
                
        }
        return auxiliarArray
    }
    
    const renderiza = (category) => {
        let categorie = category
        if(category.substring(category.length - 2) === "ão") {
            categorie = categorie.replaceAll('ão', 'ões')
        } else if(category.substring(category.length - 2) === "el") {
            categorie = categorie.replaceAll('el', 'éis')
        }else {
            categorie = category.concat("s")
        }
        return(
            <CardCategory key={category}>
                <h3> {categorie}</h3>
                {renderProducts(category)}
            </CardCategory>
        )
    }
    
    const renderProducts = (category) => {
        return(
            products.map((product) => {
                if(category === product.category){
                    return(
                        <CardProduct 
                            product={product}  
                            onChangeQuant={onChangeQuant}
                            sendQuant={sendQuant}
                            quant={quant}
                            idRestaurant={params.id}
                            key={product.id}
                        />
                    )  
                }
            })
        )
    }
        
    return(
        <div>
            <Header/>
            { isLoading ? 
                <Loading />
            : 
            <ContainerRestaurantsDetails>
                <CardRestaurant restaurant={restaurant}/>
                <div> {renderCategory()} </div>
            </ContainerRestaurantsDetails>}
        </div>
    )
}

export default ShoppingDetail





