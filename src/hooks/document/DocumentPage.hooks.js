import {useEffect, useState} from "react";
import {DocumentDescription} from "../../domain/document/DocumentDescription";

export const useDocuments = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const documents = [
                new DocumentDescription('«Об утверждении правил предоставления медицинскими организациями ' +
                    'платных медицинских услуг, ' +
                    'внесении изменений в некоторые акты правительства Российской Федерации и ' +
                    'признании утратившим силу постановления правительства ' +
                    'Российской Федерации от 4 октября 2012 г.N 1006»', '/docs/postanovlenie-736-11052023.pdf'),
                new DocumentDescription('«О защите прав потребителей»', '/docs/zakon-23001-I.pdf'),
                new DocumentDescription('«Об утверждении Порядка оказания медицинской помощи ' +
                    'детям со стоматологическими заболеваниями»', '/docs/prikaz-1496-ministerstva-zdravoohranenia.pdf'),
                new DocumentDescription('«Об утверждении Порядка оказания медицинской помощи взрослому населению ' +
                    'при стоматологических заболеваниях»', '/docs/prikaz-910-ministerstva-zdravoohranenia.pdf'),
                new DocumentDescription('«Об основах охраны здоровья ' +
                    'граждан в Российской Федерации»', '/docs/FZ-323.pdf'),
                new DocumentDescription('«Об охране здоровья граждан от воздействия окружающего ' +
                    'табачного дыма и последствий потребления табака»', '/docs/FZ-15.pdf'),
                new DocumentDescription('«Об обязательном медицинском страховании ' +
                    'в Российской Федерации»', '/docs/FZ-326.pdf')
            ];

        setDocuments(documents);
    }, []);

    return [documents, setDocuments];
}