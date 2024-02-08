import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleRelationPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [profile, setProfile] = useState([]);
    const [profileEmail, setProfileEmail] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("relation")
            .get(urlParams.singleRelationId, { query: { $populate: ["profile","profileEmail"] }})
            .then((res) => {
                set_entity(res || {});
                const profile = Array.isArray(res.profile)
            ? res.profile.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.profile
                ? [{ _id: res.profile._id, name: res.profile.name }]
                : [];
        setProfile(profile);
                const profileEmail = Array.isArray(res.profileEmail)
            ? res.profileEmail.map((elem) => ({ _id: elem._id, email: elem.email }))
            : res.profileEmail
                ? [{ _id: res.profileEmail._id, email: res.profileEmail.email }]
                : [];
        setProfileEmail(profileEmail);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Relation", type: "error", message: error.message || "Failed get relation" });
            });
    }, [props,urlParams.singleRelationId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Relation</h3>
                </div>
                <p>relation/{urlParams.singleRelationId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">profile</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.profile?.name}</p></div>
                    <label className="text-sm text-primary">ProfileEmail</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.profileEmail?.email}</p></div>
            <label className="text-sm">profile</label>
            {profile.map((elem) => (
                    <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div className="card">
                            <p>{elem.name}</p>
                        </div>
                    </Link>
                ))}
            <label className="text-sm">ProfileEmail</label>
            {profileEmail.map((elem) => (
                    <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div className="card">
                            <p>{elem.email}</p>
                        </div>
                    </Link>
                ))}
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

export default connect(mapState, mapDispatch)(SingleRelationPage);
