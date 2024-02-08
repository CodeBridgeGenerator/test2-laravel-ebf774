
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';

import moment from "moment";

const StringDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.text}</p>
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.input}  />
    const iconTemplate2 = (rowData, { rowIndex }) => <i className={"pi " + rowData.icon}  ></i>
    const imageTemplate3 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const avatarTemplate4 = (rowData, { rowIndex }) => <Avatar image={rowData.avatar}  />
    const chipTemplate5 = (rowData, { rowIndex }) => <Chip label={rowData.chip}  />
    const tagTemplate6 = (rowData, { rowIndex }) => <Tag value={rowData.tag}  ></Tag>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="text" header="Text" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="input" header="Input" body={inputTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="icon" header="Icon" body={iconTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="image" header="Image" body={imageTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="avatar" header="Avatar" body={avatarTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="chip" header="Chip" body={chipTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="tag" header="Tag" body={tagTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default StringDataTable;