import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export const AppMenuItem = ({option, text}) => {
    return (
        <MenuItem sx={{py: '6px', px: '12px'}}>
            <Link to={option} className='App-link'>
                <Typography variant='body2' color='text.primary'>
                    {text}
                </Typography>
            </Link>
        </MenuItem>
    );
}