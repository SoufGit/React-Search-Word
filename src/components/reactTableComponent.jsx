import React from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const ReactTableComponent = ({ data, columns, sortedName }) => (
    <ReactTable
        data={data || []}
        columns={columns}
        defaultSortedName={sortedName}
        defaultPageSize={10}
        className="-striped -highlight"
        filterable
        previousText='Précédent'
        nextText='Suivant'
        loadingText='chargement en cours...'
        noDataText='Aucune donnée à afficher'
        pageText='Page'
        ofText='de'
        rowsText='lignes'
    />
);
export default ReactTableComponent;