import React from "react";
import {
    SkeletonImg,
    SkeletonInfo,
    SkeletonItem,
    SkeletonName,
} from "./styles";

export const Skeleton = () => {
    return (
        <SkeletonItem>
            <div>
                <SkeletonImg></SkeletonImg>
            </div>
            <SkeletonInfo>
                <SkeletonName />
                <SkeletonName />
            </SkeletonInfo>
        </SkeletonItem>
    );
};
