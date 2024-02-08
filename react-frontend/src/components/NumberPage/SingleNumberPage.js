import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleNumberPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("number")
            .get(urlParams.singleNumberId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Number", type: "error", message: error.message || "Failed get number" });
            });
    }, [props,urlParams.singleNumberId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Number</h3>
                </div>
                <p>number/{urlParams.singleNumberId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Text</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.text}</p></div>
                    <label className="text-sm text-primary">Input</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.input}</p></div>
                    <label className="text-sm text-primary">Badge</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.badge}</p></div>
                    <label className="text-sm text-primary">Knob</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.knob}</p></div>
                    <label className="text-sm text-primary">Rating</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.rating}</p></div>
                    <label className="text-sm text-primary">Progressbar</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.progressbar}</p></div>
            
                    <label className="text-sm text-primary">created</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    <label className="text-sm text-primary">updated</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleNumberPage);
