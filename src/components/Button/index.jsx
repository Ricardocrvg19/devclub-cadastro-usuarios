import {Button} from "./styles"

function DefaultButton({children, theme, ...props}) {
// spread operator (...props) --> todo o resto 
    
    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}


export default DefaultButton
