import Box from "@mui/material/Box";
import {AppMenuItem} from "./AppMenuItem";

export const AppMenu = () => {
    return (
        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <AppMenuItem option='/' text='На главную'/>
            <AppMenuItem option='/appointments' text='Запись на приём'/>
            <AppMenuItem option='/prices' text='Прейскурант платных услуг'/>
            <AppMenuItem option='/docs' text='Нормативные документы'/>
        </Box>
    );
}