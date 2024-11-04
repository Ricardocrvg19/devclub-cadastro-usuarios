import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: space-evenly;
    padding: 20px;
    
`

export const Title = styled.h2`


        color: #fff;
        font-size: 32px;
        font-weight: 700;
        margin-top: 30px;
`

export const ContainerUsers = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 30px;

    @media (max-width:750px){
        grid-template-columns: 1fr
    }


`

export const CardUsers = styled.div`

    background-color: #252d48;
    padding: 16px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    max-width: 400px;
    

    h3{
        color: #ffffff;
        font-size: 20px;
        text-transform: capitalize;
    }

    p{
        color: gray;
        font-size: 15px;
    }


`

export const TrashIcon = styled.img`

    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.8;
        height: 40px;
    }

    &:active{
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`

    height: 80px;

`

