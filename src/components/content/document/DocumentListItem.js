import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import {openPdfInNewTab} from "../../../utils/openPdf";

export const DocumentListItem = ({document}) => {
    return (
        <Stack spacing={1} useFlexGap
               sx={{
                   width: {xs: '100%', sm: '100%'},
                   borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
               }}>
            <Typography
                variant="body-2"
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignSelf: 'center',
                    textAlign: 'center',
                }}>
                {document.description}
            </Typography>
            <Button
                className={"App-link"}
                onClick={() => openPdfInNewTab(document.link)}>
                Открыть документ
            </Button>
        </Stack>
    );
}