import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';




const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const NumberCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            text: _entity.text,
            input: _entity.input,
            badge: _entity.badge,
            knob: _entity.knob,
            rating: _entity.rating,
            slider: _entity.slider,
            progressbar: _entity.progressbar,
        };

        setLoading(true);
        try {
            
        const result = await client.service("number").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info number updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options

    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="number-edit-dialog-component">
                <div>
                <p className="m-0">Text:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.text} onChange={(e) => setValByKey("text", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Input:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.input} onChange={(e) => setValByKey("input", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Badge:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.badge} onChange={(e) => setValByKey("badge", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Knob:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.knob} onChange={(e) => setValByKey("knob", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Rating:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.rating} onChange={(e) => setValByKey("rating", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Slider:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.slider} onChange={(e) => setValByKey("slider", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Progressbar:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.progressbar} onChange={(e) => setValByKey("progressbar", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(NumberCreateDialogComponent);
