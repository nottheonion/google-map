import { Button } from "@mui/material"

const CustomButton = (props) => {
    const { buttonText, onClick } = props

    return <Button variant="contained" onClick={onClick}>{buttonText}</Button>
}

export default CustomButton