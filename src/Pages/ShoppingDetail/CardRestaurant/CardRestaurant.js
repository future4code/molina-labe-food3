import React  from 'react'
import { Container, Img, PName, Grey, ContainerDescription, ContainerNumb} from './styled'

 const CardRestaurant = ({restaurant}) => {
    return(
        <Container>
            <Img src={restaurant.logoUrl} />
            <ContainerDescription>
                <PName> {restaurant.name} </PName>
                <Grey> {restaurant.category} </Grey>
                <ContainerNumb>
                    <Grey> {Math.floor(restaurant.deliveryTime * 0.9)} - {restaurant.deliveryTime} min </Grey>
                    <Grey> Frete: R${restaurant.shipping.toFixed(2)} </Grey>
                </ContainerNumb>
                
                <Grey> {restaurant.address}</Grey>
            </ContainerDescription>
        </Container>
    )
}

export default CardRestaurant
