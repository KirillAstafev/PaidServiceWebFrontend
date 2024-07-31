import {DataGrid} from "@mui/x-data-grid";

export const PriceTable = ({services}) => {

    const columns = [
        {field: 'name', headerName: 'Мед.услуга', width: 600, headerAlign: 'center', align: 'center'},
        {field: 'price', headerName: 'Цена (руб.)', width: 300, headerAlign: 'center', align: 'center'}
    ];

    return (
        <DataGrid
            columns={columns}
            rows={services}
            hideFooter={true}
        />
    );
}