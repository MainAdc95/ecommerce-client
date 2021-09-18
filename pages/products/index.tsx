import IsAuth from "../../auth/protectors/isAuth";
import HeadLayout from "../../components/headLayout/headLayout";

const Products = () => {
    return (
        <IsAuth>
            <HeadLayout title="Products" />
            <div>
                <p>products page</p>
            </div>
        </IsAuth>
    );
};

export default Products;
