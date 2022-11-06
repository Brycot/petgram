import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../Components/ListOfCategories";
import { ListOfPhotoCards } from "../Components/ListOfPhotoCards";
export function Home() {
    const { id } = useParams();
    return (
        <>
            <Helmet>
                <title>Petgram - tu app de fotos de mascotas</title>
                <meta
                    name="description"
                    content="Con petgram encontraras fotos de animales domesticos muy bonitos"
                />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </>
    );
}
