import { useState, useEffect } from "react";
import { ICategory } from "../../../interfaces/category";

interface IProps {
    categories: ICategory[];
}

const useCategoryItem = ({ categories }: IProps) => {
    const [selectedCategory, setSelectedCategory] =
        useState<ICategory | null>(null);

    useEffect(() => {
        const foundCategory = categories.find((c) => c.isSelected);

        setSelectedCategory(foundCategory || null);
    }, [categories]);

    return { selectedCategory };
};

export default useCategoryItem;
