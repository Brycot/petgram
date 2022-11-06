import React, { useContext } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppContext } from "./context/context";
import { Logo } from "./Components/Logo";
import { Home } from "./views/Home";
import DetailPetPhoto from "./views/DetailPetPhoto";

import { GlobalStyle } from "./styles/GlobalStyles";
import { NavBar } from "./Components/NavBar/NavBar";
import { Favs } from "./views/Favs";
import { NotRegisteredUser } from "./views/NotRegisteredUser";
import { User } from "./views/User";
import NotFound from "./views/NotFound";

function App() {
    const { isAuth } = useContext(AppContext);

    return (
        <>
            <GlobalStyle />
            <HashRouter basename="/">
                <Logo />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/pets/:id" element={<Home />} />
                    <Route
                        exact
                        path="/detail=:id"
                        element={<DetailPetPhoto />}
                    />

                    <Route
                        exact
                        path="/favs"
                        element={isAuth ? <Favs /> : <NotRegisteredUser />}
                    />
                    <Route
                        exact
                        path="/user"
                        element={isAuth ? <User /> : <NotRegisteredUser />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<NotRegisteredUser />}
                    />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
                <NavBar />
            </HashRouter>
        </>
    );
}

export default App;
