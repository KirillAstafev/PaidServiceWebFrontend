import Stack from "@mui/material/Stack";
import * as React from "react";
import {DocumentListItem} from "./DocumentListItem";
import {Title} from "../../shared/Title";

export const DocumentList = ({documents}) => {
    return (
        <Stack spacing={3} useFlexGap sx={{width: {xs: '100%', sm: '80%'}}}>
            <Title title={'Федеральные нормативные акты'}/>
            {documents.map((document) => {
                return <DocumentListItem document={document}/>
            })}
        </Stack>
    );
}