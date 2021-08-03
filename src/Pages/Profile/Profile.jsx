import { Button } from '@material-ui/core'
import React , { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OrdersHistory from '../../components/OrdersHistory/OrdersHistory'
import PersonalData from '../../components/PersonalData.js/PersonalData'
import UserAdress from '../../components/UserAdress/UserAdress'
import { goToLogin } from '../../routes/coordinator'
import { ContainerProfile } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Loading from '../../components/Loading/Loading'

const Profile = () =>{
    const history = useHistory()

    const {dataProfile, address} = useContext(GlobalStateContext)

    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(history)
    }
    
    return(
        <div>
            <Header/>{!dataProfile || !address ? <Loading/> :
            <ContainerProfile>
                <PersonalData dataProfile={dataProfile}/>
                <UserAdress address={address}/>
                <p>Histórico de Pedidos</p>
                <hr/>
                <OrdersHistory/>
                <Button
                    variant="contained" 
                    color="primary"
                    type={'submit'}
                    fullWidth
                    margin={'normal'}
                    onClick={()=>logout()}
                >
                    Logout
                </Button>
            </ContainerProfile>}
            <Footer/>
        </div>
    )
}
export default Profile