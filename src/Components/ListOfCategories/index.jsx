import React, { useEffect, useState } from "react";

import { Category } from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch(
                "https://petgram-brycot.vercel.app/categories"
            );
            const data = await response.json();
            setCategories(data);
            setLoading(false);
        };
        getCategories();
    }, []);

    return {
        categories,
        loading,
    };
}
export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {categories.map((category) => (
                <Item key={category.id}>
                    <Category {...category} />
                </Item>
            ))}
        </List>
    );
    return (
        <>
            {loading && <h1>Cargando...</h1>}
            {renderList()}
            {showFixed && renderList(true)}
        </>
    );
};
