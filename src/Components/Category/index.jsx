import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, id }) => {
    return (
        <Link to={`/pets/${id}`}>
            <Image src={cover} alt="" />
        </Link>
    );
};
