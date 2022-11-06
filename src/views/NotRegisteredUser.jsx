import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../Components/UserForm";
import { AppContext } from "../context/context";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

export const NotRegisteredUser = () => {
    const { activateAuth, isAuth } = useContext(AppContext);

    const { registerMutation, isloadingRegister, isErrorRegister } =
        useRegisterMutation();
    const {
        login,
        loading: loadingLogin,
        error: errorLogin,
    } = useLoginMutation();

    const onSubmit = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
        });
    };

    const onSubmitLogin = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        login({ variables }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
        });
    };
    return (
        <>
            <UserForm
                onSubmit={onSubmitLogin}
                title="Iniciar Sesion"
                loading={loadingLogin}
                error={errorLogin}
            />
            <UserForm
                onSubmit={onSubmit}
                title="Registrar"
                loading={isloadingRegister}
                error={isErrorRegister}
            />
        </>
    );
};
