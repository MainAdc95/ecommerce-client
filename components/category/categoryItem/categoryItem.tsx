import {
    Paper,
    Typography,
    Box,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { ICategory } from "../../../interfaces/category";
import useCategoryItem from "./categoryItem.logic";

interface IProps {
    categories: ICategory[];
    handleSelect: any;
}

const CategoryItem = ({ categories, handleSelect }: IProps) => {
    const { selectedCategory } = useCategoryItem({ categories });

    return (
        <>
            <Box display="flex" mr={2}>
                <Paper>
                    <List dense={true}>
                        {categories?.map((c) => (
                            <Box key={c.id}>
                                <ListItemButton
                                    onClick={() => handleSelect(c.id)}
                                    selected={c.isSelected}
                                    sx={{
                                        "& .Mui-selected": {
                                            backgroundColor: "black",
                                            color: "pink",
                                        },
                                    }}
                                >
                                    <ListItemText primary={c.name} />
                                </ListItemButton>
                            </Box>
                        ))}
                    </List>
                </Paper>
            </Box>
            {selectedCategory && (
                <CategoryItem
                    categories={selectedCategory.children}
                    handleSelect={handleSelect}
                />
            )}
        </>
    );
};

export default CategoryItem;
