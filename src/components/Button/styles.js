import styled from "styled-components";

export const Button = styled.button`

        border-radius: 20px;
        border: ${props => props.theme === "primary" ? "none" : "1px solid #fff"};
        background: ${props => props.theme === "primary" ? "linear-gradient(100deg, #fe7e5d 0%, #ff6378 100%)" : "transparent"} ;
        font-size: 20px;
        width: fit-content;
        cursor: pointer;
        padding: 10px 12px;
        color: #fff;
    
        &:hover {
            ${props => props.theme === "primary" ? "opacity: .8" : "background: #000000 "};
        }

        &:active {
            ${props => props.theme === "primary" ? "opacity: .5" : "opacity: .3" };
        }


    `