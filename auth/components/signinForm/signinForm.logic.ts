import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { AUTH_SIGNIN } from "../../../graphql/mutations/auth";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authSetUser } from "../../../store/actions/auth";

const validationSchema = yup.object({
    identifier: yup
        .string()
        .required("email or username is a required field")
        .min(3, "email or username must be at least 3 characters"),
    password: yup.string().required().min(5),
});

const useSigninForm = () => {
    const dispatch = useDispatch();
    const [AuthSignin, { data, error }] = useMutation(AUTH_SIGNIN, {
        errorPolicy: "all",
    });

    useEffect(() => {
        if (data) {
            const {
                signin: { user, token },
            } = data;

            dispatch(authSetUser(user, token));
        }
    }, [data]);

    return { AuthSignin, error: error?.message, validationSchema };
};

export default useSigninForm;
