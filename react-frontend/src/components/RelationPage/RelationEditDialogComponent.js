import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';



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

const RelationCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState([])
    const [profileEmail, setProfileEmail] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    useEffect(() => {
                    //on mount users 
                    client
                        .service("users")
                        .find({ query: { $limit: 100 } })
                        .then((res) => {
                            setProfile(res.data.map((e) => ({ name: e['name'], value: e._id })));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Users", type: "error", message: error.message || "Failed get users" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            profile: _entity.profile,
            profileEmail: _entity.profileEmail,
        };

        setLoading(true);
        try {
            
        await client.service("relation").patch(_entity._id, _data);
        const eagerResult = await client
            .service("relation")
            .find({ query: { $limit: 100 ,  _id :  { $in :[_entity._id]}, $populate : [
                
                {
                    path : "profile",
                    service : "users",
                    select:["name"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info relation updated successfully" });
        props.onEditResult(eagerResult.data[0]);
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

    const profileOptions = profile.map((elem) => ({ name: elem.name, value: elem.value }));
    const profileEmailOptions = profileEmail.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="relation-edit-dialog-component">
                <div>
                <p className="m-0">profile:</p>
                <Dropdown value={_entity?.profile?._id} options={profileOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("profile", e.value)} />
            </div>
            <div>
                <p className="m-0">ProfileEmail:</p>
                <Dropdown value={_entity?.profileEmail?._id} options={profileEmailOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("profileEmail", e.value)} />
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

export default connect(mapState, mapDispatch)(RelationCreateDialogComponent);
