import Typography from "@mui/material/Typography";

export const Title = ({title}) => {
    return (
        <Typography
            component="h3"
            variant="h3"
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignSelf: 'center',
                textAlign: 'center',
            }}
        >
            {title}
        </Typography>
    );
}