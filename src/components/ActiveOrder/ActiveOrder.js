import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import clock from '../../assets/clock.png'
import { ContainerActiveOrder } from './styled'

const ActiveOrder = () => {
    const {activeOrder, getActiveOrder} = useContext(GlobalStateContext)
    getActiveOrder()

    return(
        <div>
            {activeOrder.order &&
            <ContainerActiveOrder>
                <img src={clock} alt={"relogio de tempo"}/>
                <div>
                    <p id={"title"}>Pedido em andamento</p>
                    <p>{activeOrder.order.restaurantName}</p>
                    <p id={"price"}>SUBTOTAL: R${activeOrder.order.totalPrice.toFixed(2)}</p>
                </div>
            </ContainerActiveOrder>}
        </div>
    )
}

export default ActiveOrder