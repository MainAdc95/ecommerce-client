import { useState, useEffect } from "react";
import { ICategory } from "../../../interfaces/category";
import Categories from "../../../pages/categories";

const data: ICategory[] = [
    {
        id: 1,
        name: "phones",
        parent: null,
        children: [],
        isSelected: false,
    },
    {
        id: 2,
        name: "iphone",
        parent: 1,
        children: [],
        isSelected: false,
    },
    {
        id: 3,
        name: "samsung",
        parent: 1,
        children: [],
        isSelected: false,
    },
    {
        id: 4,
        name: "makeup",
        parent: null,
        children: [],
        isSelected: false,
    },
    {
        id: 5,
        name: "maskara",
        parent: 4,
        children: [],
        isSelected: false,
    },
    {
        id: 6,
        name: "iphone 13",
        parent: 2,
        children: [],
        isSelected: false,
    },
    {
        id: 7,
        name: "iphone 12",
        parent: 2,
        children: [],
        isSelected: false,
    },
    {
        id: 8,
        name: "iphone 13 pro max",
        parent: 6,
        children: [],
        isSelected: false,
    },
    {
        id: 9,
        name: "iphone 13 mini",
        parent: 6,
        children: [],
        isSelected: false,
    },
];

function populateChildren(category: any) {
    const tmpCategory = { ...category };
    const tmpChildren = data.filter((c: any) => c.parent === category.id);
    let children: any = [];

    for (let i = 0; i < tmpChildren.length; i++) {
        const categ = populateChildren(tmpChildren[i]);

        children.push(categ);
    }

    tmpCategory.children = children;

    return tmpCategory;
}

function selectAndPopulate(
    category: ICategory,
    id: number,
    currentLevelIds: number[],
    currentDepthSelectedId?: number
) {
    const tmpCategory = { ...category };
    const tmpChildren = [];

    if (
        currentLevelIds.includes(id) &&
        currentDepthSelectedId === tmpCategory.id
    )
        tmpCategory.isSelected = false;
    else if (currentDepthSelectedId === tmpCategory.id && tmpCategory.id === id)
        tmpCategory.isSelected = false;
    else if (tmpCategory.id === id) tmpCategory.isSelected = true;

    const selectedCategoryId = tmpCategory.children.find((c) => c.isSelected);

    for (let i = 0; i < tmpCategory.children.length; i++) {
        const tmpChild = selectAndPopulate(
            tmpCategory.children[i],
            id,
            tmpCategory.children.map((c) => c.id),
            selectedCategoryId?.id
        );

        tmpChildren.push(tmpChild);
    }

    tmpCategory.children = tmpChildren;

    return tmpCategory;
}

const useCategoryList = () => {
    const [rawCategories, setRawCategories] = useState<ICategory[]>(data);
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        readCategories(rawCategories);
    }, []);

    const readCategories = (data: ICategory[]) => {
        const tmpData: ICategory[] = [];

        for (let i = 0; i < data.length; i++) {
            if (!data[i].parent) {
                const categ = populateChildren(data[i]);

                tmpData.push(categ);
            }
        }

        setCategories(tmpData);
    };

    const handleSelect = (id: number) => {
        const tmpData: ICategory[] = [];

        const selectedCategId = categories.find((c) => c.isSelected);

        for (let i = 0; i < categories.length; i++) {
            const categ = selectAndPopulate(
                categories[i],
                id,
                categories.map((c) => c.id),
                selectedCategId?.id
            );

            tmpData.push(categ);
        }

        setCategories(tmpData);
    };

    return { categories, handleSelect };
};

export default useCategoryList;
