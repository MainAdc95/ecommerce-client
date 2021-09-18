import IsAuth from "../../auth/protectors/isAuth";
import CategoryList from "../../components/category/categoryList/categoryList";
import HeadLayout from "../../components/headLayout/headLayout";

const Categories = () => {
    return (
        <IsAuth>
            <HeadLayout title="Categories" />
            <CategoryList />
        </IsAuth>
    );
};

export default Categories;

// import { Box } from "@mui/material";
// import IsAuth from "../../auth/protectors/isAuth";
// import HeadLayout from "../../components/headLayout/headLayout";
// import { useState, useEffect } from "react";

// const data = [
//     { depth: 1, id: 1, name: "phones", parent: null, children: [] },
//     { depth: 1, id: 2, name: "iphone", parent: 1, children: [] },
//     { depth: 1, id: 3, name: "samsung", parent: 1, children: [] },
//     { depth: 1, id: 4, name: "makeup", parent: null, children: [] },
//     { depth: 1, id: 5, name: "maskara", parent: 4, children: [] },
//     { depth: 1, id: 6, name: "iphone 13", parent: 2, children: [] },
//     { depth: 1, id: 7, name: "iphone 12", parent: 2, children: [] },
//     { depth: 1, id: 8, name: "iphone 13 pro max", parent: 6, children: [] },
//     { depth: 1, id: 9, name: "iphone 13 mini", parent: 6, children: [] },
// ];

// const CategoryItem = ({ category }: any) => {
//     return (
//         <div>
//             <p>{category.name}</p>
//             <Box ml={category.depth * 2}>
//                 {category.children.map((c: any) => (
//                     <CategoryItem category={c} />
//                 ))}
//             </Box>
//         </div>
//     );
// };

// function getFullCategory(depth: number, category: any) {
//     const tmpCategory = { ...category };
//     const tmpChildren = data.filter((c: any) => c.parent === category.id);
//     let children: any = [];

//     for (let i = 0; i < tmpChildren.length; i++) {
//         const categ = getFullCategory(depth + 1, tmpChildren[i]);

//         children.push(categ);
//     }

//     tmpCategory.depth = depth;
//     tmpCategory.children = children;

//     return tmpCategory;
// }

// const Categories = () => {
//     const [categories, setCategories] = useState<any>([]);

//     useEffect(() => {
//         const tmpData = [];

//         for (let i = 0; i < data.length; i++) {
//             if (!data[i].parent) {
//                 const categ = getFullCategory(1, data[i]);

//                 tmpData.push(categ);
//             }
//         }

//         setCategories(tmpData);
//     }, []);

//     return (
//         <IsAuth>
//             <HeadLayout title="Categories" />
//             <div>
//                 {categories.map((c: any) => (
//                     <CategoryItem category={c} />
//                 ))}
//             </div>
//         </IsAuth>
//     );
// };

// export default Categories;
