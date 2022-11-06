import React from "react";
import { useGetAnimal } from "../hooks/useGetAnimal";
import { useParams } from "react-router-dom";
import { PhotoCard } from "../Components/PhotoCard";
import { Layout } from "../Components/layout";

const DetailPetPhoto = () => {
    const { id } = useParams();

    const { data, loading, error } = useGetAnimal(id);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <Layout title="Foto">
            <PhotoCard {...data.photo} />
        </Layout>
    );
};

export default DetailPetPhoto;
