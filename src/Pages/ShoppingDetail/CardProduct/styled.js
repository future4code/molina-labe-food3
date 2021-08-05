import styled from "styled-components"



export const Card = styled.div`
    width: 100%;
    height: 100%;    
    border: 1px solid #b8b8b8;
    display: flex;
    
    border-radius: 8px;
    margin-bottom: 8px;
    position: relative;

`

export const ContainerImg = styled.div`
    width: 35%;
    min-height: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
`
export const Img = styled.img`
    width: 35%;
    
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

`
export const PName = styled.p`
    /* margin: 1.125rem 3.063rem 0.5rem 1rem; */
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    /* letter-spacing: -0.39px; */
    color: #E8222E;
    

`
export const PDescription = styled.p`
  
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #B8B8B8;
    height: 33%;
    
    /* padding: 10px; */

`
export const ContainerDescription = styled.div`
    width: 65%;
    height: 100%;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 16px;
    /* background-color: yellow; */
  
  
`


export const Text = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px;
    padding: 0px;

    /* background-color: black; */

 
  p{
        padding: 0px;
        margin-bottom: 0px;
        :nth-child(2){
        min-width: 36px;
        min-height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #E8222E;
        box-sizing: border-box;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 0px;
        margin: 0px;
        color: #E8222E;
    }
  }
`
export const PPrice = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;

`
export const Button = styled.button`
    width: 5.625rem;
    height: 1.938rem;
    border: 1px solid black;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;

    

`
export const ContainerCard = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    box-sizing: border-box;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;

`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
    align-items: flex-end;
    width: 100%;
    height: 33%;
    /* padding-left: 10px; */
    box-sizing: border-box;
    /* background-color: green; */
`