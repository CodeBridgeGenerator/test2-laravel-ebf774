
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';

import moment from "moment";

const NumberDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.text}</p>
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.input}  />
    const badgeTemplate2 = (rowData, { rowIndex }) => <Badge value={rowData.badge}  ></Badge>
    const knobTemplate3 = (rowData, { rowIndex }) => <Knob value={rowData.knob}  />
    const ratingTemplate4 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />
    const sliderTemplate5 = (rowData, { rowIndex }) => <Slider value={rowData.slider} style={{width:"20rem"}}  />
    const progressBarTemplate6 = (rowData, { rowIndex }) => <ProgressBar value={rowData.progressbar} style={{width:"20rem"}}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="text" header="Text" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="input" header="Input" body={inputTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="badge" header="Badge" body={badgeTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="knob" header="Knob" body={knobTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="Rating" body={ratingTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="slider" header="Slider" body={sliderTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="progressbar" header="Progressbar" body={progressBarTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default NumberDataTable;