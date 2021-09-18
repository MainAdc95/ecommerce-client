import { Box } from "@mui/material";
import CategoryItem from "../categoryItem/categoryItem";
import useCategoryList from "./categoryList.logic";

const CategoryList = () => {
    const { categories, handleSelect } = useCategoryList();

    return (
        <Box display="flex">
            <CategoryItem categories={categories} handleSelect={handleSelect} />
        </Box>
    );
};

export default CategoryList;
