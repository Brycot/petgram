import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Loader, Error } from "./styles";

export const UserForm = ({ onSubmit, title, loading, error }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value,
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input placeholder="Email" {...email} />
                <Input placeholder="Password" type="password" {...password} />
                <Button>{loading ? <Loader /> : title}</Button>
                {error && <Error>{error.message}</Error>}
            </Form>
        </>
    );
};
