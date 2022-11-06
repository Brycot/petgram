import React, { Fragment, useContext } from "react";
import { AppContext } from "../context/context";
import { Layout } from "../Components/layout";

import { SubmitButton } from "../Components/SubmitButton";

export const User = () => {
    const { removeAuth } = useContext(AppContext);
    return (
        <Layout title="Usuario">
            <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        </Layout>
    );
};
