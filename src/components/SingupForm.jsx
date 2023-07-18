import { TextField } from "@mui/material"

const Form = () => {
    return (
        <>
        <div>
            <TextField
                variant="outlined"
                label='Name'
                floatingLabelText="Password"
                type="text"
                />
        </div>
        </>
    )
}

export default Form