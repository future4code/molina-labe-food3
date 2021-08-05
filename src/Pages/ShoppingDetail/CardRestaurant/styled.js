import styled from "styled-components"


export const Container = styled.article`
  /* width: 100vw; */
  min-height: 268px;
  max-height: 268px;
  margin-top: 17.008px;
  border-radius: 8px;
  overflow: hidden;

  margin-left: 16px;
  margin-right: 16px;
  box-sizing: border-box;

  /* padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  

`

export const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  /* margin-right: 16px;
  margin-left: 16px;
  margin-top: 8px; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

`

export const PName = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  /* margin: 0.75rem 1rem 0.5rem; */
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #E8222E;

`
export const Grey = styled.p`
  color : #B8B8B8;

`
export const ContainerDescription = styled.div`
  width: 100%;
  min-height: 148px;
  max-height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  


  p{
      margin: 0px;
      /* padding-left: 16px; */

  }
`

export const ContainerNumb = styled.div`
  display: flex;
  flex-direction: row;

  p{
    margin-right: 30px;
  }
  
`

