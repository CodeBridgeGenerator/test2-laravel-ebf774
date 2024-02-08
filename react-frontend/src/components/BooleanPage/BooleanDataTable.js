
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const BooleanDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.text}</p>
    const tickTemplate1 = (rowData, { rowIndex }) => <i className={`pi ${rowData.tick?"pi-check": "pi-times"}`}  ></i>
    const checkboxTemplate2 = (rowData, { rowIndex }) => <Checkbox checked={rowData.checkbox}  ></Checkbox>
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.switch}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="text" header="Text" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="tick" header="Tick" body={tickTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="checkbox" header="Checkbox" body={checkboxTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="switch" header="Switch" body={switchTemplate3} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default BooleanDataTable;