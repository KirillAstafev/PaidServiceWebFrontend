import {alpha} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import {DocumentList} from "../components/content/document/DocumentList";
import {useDocuments} from "../hooks/document/DocumentPage.hooks";

export const DocumentPage = () => {
    const [documents, setDocuments] = useDocuments();

    return (
        <Box
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 50%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: {xs: 14, sm: 20},
                    pb: {xs: 8, sm: 12},
                }}
            >
                <DocumentList documents={documents}/>
            </Container>
        </Box>
    );
}