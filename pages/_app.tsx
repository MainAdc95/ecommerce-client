import "../styles/globals.css";
import makeStore from "../store";
import { Provider, useDispatch } from "react-redux";
import NProgress from "nprogress";
import { Router } from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../services/emotion";
import Layout from "../components/layout/layout";
import ThemeProvider from "../components/theme/theme";
import client from "../services/apollo";
import Cookies from "js-cookie";
import Head from "next/head";

// style sheets
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { ApolloProvider, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { authRemoveLoading, authSetUser } from "../store/actions/auth";
import { AUTH_ON_LOAD } from "../graphql/mutations/auth";

// nprogress
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const store = makeStore();

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const StoreAdmin = (props: any) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <CacheProvider value={emotionCache}>
                        <ThemeProvider>
                            <CssBaseline />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                            <InitApp />
                        </ThemeProvider>
                    </CacheProvider>
                </Provider>
            </ApolloProvider>
        </>
    );
};

const InitApp = () => {
    const [AuthOnLoad] = useMutation(AUTH_ON_LOAD);
    const dispatch = useDispatch();

    useEffect(() => {
        const authToken = Cookies.get("auth_token");

        if (!authToken) {
            dispatch(authRemoveLoading());
        } else {
            AuthOnLoad({ variables: { token: authToken } }).then(({ data }) => {
                dispatch(authSetUser(data.authOnLoad));
            });
        }
    }, []);

    return null;
};

export default StoreAdmin;
