import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export const Copyright = () => {
    return (
        <Typography variant='body2' color='text.secondary' mt={1}>
            {'Copyright © '}
            <Link href="#">MedClinic&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}