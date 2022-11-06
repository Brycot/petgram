import React from "react";
import { useGetFavorite } from "../hooks/useGetFavorites";
import { ListOfFavs } from "../Components/ListOfFavs";
import { Layout } from "../Components/layout";
export const Favs = () => {
    const { data, loading, error } = useGetFavorite();

    if (loading) return "loading...";
    if (error) return "error";

    return (
        <Layout title="Favoritos" subtitle="Tus fotos favoritas">
            <ListOfFavs favs={data.favs} />
        </Layout>
    );
};
