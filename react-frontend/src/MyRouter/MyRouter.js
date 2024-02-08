import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import StringPage from "../components/StringPage/StringPage";
import SingleStringPage from "../components/StringPage/SingleStringPage";
import BooleanPage from "../components/BooleanPage/BooleanPage";
import SingleBooleanPage from "../components/BooleanPage/SingleBooleanPage";
import NumberPage from "../components/NumberPage/NumberPage";
import SingleNumberPage from "../components/NumberPage/SingleNumberPage";
import DatePage from "../components/DatePage/DatePage";
import SingleDatePage from "../components/DatePage/SingleDatePage";
import ArrayPage from "../components/ArrayPage/ArrayPage";
import SingleArrayPage from "../components/ArrayPage/SingleArrayPage";
import ObjectPage from "../components/ObjectPage/ObjectPage";
import SingleObjectPage from "../components/ObjectPage/SingleObjectPage";
import RelationPage from "../components/RelationPage/RelationPage";
import SingleRelationPage from "../components/RelationPage/SingleRelationPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/string" exact element={<StringPage />} />
                    <Route path="/string/:singleStringId" exact element={<SingleStringPage />} />
                    <Route path="/boolean" exact element={<BooleanPage />} />
                    <Route path="/boolean/:singleBooleanId" exact element={<SingleBooleanPage />} />
                    <Route path="/number" exact element={<NumberPage />} />
                    <Route path="/number/:singleNumberId" exact element={<SingleNumberPage />} />
                    <Route path="/date" exact element={<DatePage />} />
                    <Route path="/date/:singleDateId" exact element={<SingleDatePage />} />
                    <Route path="/array" exact element={<ArrayPage />} />
                    <Route path="/array/:singleArrayId" exact element={<SingleArrayPage />} />
                    <Route path="/object" exact element={<ObjectPage />} />
                    <Route path="/object/:singleObjectId" exact element={<SingleObjectPage />} />
                    <Route path="/relation" exact element={<RelationPage />} />
                    <Route path="/relation/:singleRelationId" exact element={<SingleRelationPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
