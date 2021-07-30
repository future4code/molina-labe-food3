import React from 'react'
import { ScreenContainer } from './styled'
import SignUpform from './SignUpForm'
import logo from '../../assets/logo-future-eats-red.png'
import useProtectedPage from '../../hooks/useProtectedPage'
import SignUpFormAdress from '../SignUpFormAdress/SignUpFormAdress'

const SignUp = ({setInitialPage,changeInfoHeader}) =>{
    changeInfoHeader("Cadastrar")
    setInitialPage(false)
    /*useProtectedPage()*/
    
    return(
        <div>
           <ScreenContainer>
               <img src={logo}></img>
                <h3>Cadastrar</h3>
                <SignUpform />
                {/* <SignUpFormAdress /> */}
            </ScreenContainer>
        </div>
    )
}
export default SignUp