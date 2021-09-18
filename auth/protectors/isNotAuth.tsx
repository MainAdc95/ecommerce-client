import LoadingScreen from "../../components/loadingScreen/loadingScreen";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store/reducers";

interface IProps {
    children?: React.ReactNode;
}

const IsNotAuth = ({ children }: IProps) => {
    const router = useRouter();
    const { user, loading: authLoading } = useSelector(
        (state: RootReducer) => state.auth
    );
    const [loading, setLoading] = useState(authLoading && !user);

    useEffect(() => {
        if (!authLoading && !user) setLoading(false);
        else if (!authLoading && user) {
            setLoading(true);
            router.replace("/");
        }
    }, [user, authLoading]);

    if (loading) return <LoadingScreen />;
    return <>{children}</>;
};

export default IsNotAuth;
