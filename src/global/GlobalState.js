import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'

const GlobalState = (props) =>{

    const[dataProfile, setDataProfile] = useState({})
    const[address, setAddress] = useState([])
    const[activeOrder, setActiveOrder] = useState({})

    const [cart,setCart] = useState([])
    // const ativeOrder = useRequestData({}, "/active-order")
    // const address = useRequestData({}, `/profile/address`)
    // const dataProfile = useRequestData([], "/profile")

    const getDataProfile = () => {
        axios.get(`${BASE_URL}/profile`, {headers:{
            'auth': localStorage.getItem('token')
        }})
        .then((res) => {
            setDataProfile(res.data)
        })
        .catch((err) => {
            window.alert('Erro ao realizar solicitação.\n Tente novamente.')
        })
    }

    const getAddress = () => {
        axios.get(`${BASE_URL}/profile/address`, {headers:{
            'auth': localStorage.getItem('token')
        }})
        .then((res) => {
            setAddress(res.data)
        })
        .catch((err) => {
            window.alert('Erro ao realizar solicitação.\n Tente novamente.')
        })
    }

    const getActiveOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {headers:{
            'auth': localStorage.getItem('token')
        }})
        .then((res) => {
                setActiveOrder(res.data)
        })
        .catch((err) => {
            window.alert('Erro ao realizar solicitação.\n Tente novamente.')
        })
    }
    
    return(
        <GlobalStateContext.Provider value={{ cart,setCart, dataProfile, getDataProfile, address, getAddress, activeOrder, getActiveOrder}}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState