import IsAuth from "../auth/protectors/isAuth";
import HeadLayout from "../components/headLayout/headLayout";

const Home = () => {
    return (
        <IsAuth>
            <HeadLayout title="Dashboard" />
            <div>
                <p>home page</p>
            </div>
        </IsAuth>
    );
};

export default Home;
