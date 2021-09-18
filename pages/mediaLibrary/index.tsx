import IsAuth from "../../auth/protectors/isAuth";
import HeadLayout from "../../components/headLayout/headLayout";

const MediaLibrary = () => {
    return (
        <IsAuth>
            <HeadLayout title="Media Library" />
            <div>
                <p>home page</p>
            </div>
        </IsAuth>
    );
};

export default MediaLibrary;
