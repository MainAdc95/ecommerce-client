import { Box, TextField, Button, LinearProgress } from "@mui/material";
import { Formik, Form, useField, FieldAttributes } from "formik";
import Error from "../../../components/form/error/error";
import useSigninForm from "./signinForm.logic";

const FormikTextField: React.FC<
    {
        label: string;
        color: "primary" | "secondary";
        size?: "small" | "medium";
    } & FieldAttributes<{}>
> = ({ size = "small", type, label, color, ...props }) => {
    const [field, meta] = useField<{}>(props);

    const errorTxt = meta.error && meta.touched ? meta.error : "";

    return (
        <>
            <TextField
                {...field}
                type={type}
                error={!!errorTxt}
                size={size}
                label={label}
                color={color}
                fullWidth
            />

            {errorTxt && (
                <Box mt={1}>
                    <Error msg={errorTxt} />
                </Box>
            )}
        </>
    );
};

interface IProps {}

const SigninForm = ({}: IProps) => {
    const { AuthSignin, error, validationSchema } = useSigninForm();

    return (
        <Box>
            <Formik
                initialValues={{ identifier: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={async (data, { setSubmitting }) => {
                    setSubmitting(true);

                    await AuthSignin({
                        variables: {
                            identifier: data.identifier,
                            password: data.password,
                        },
                    });

                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form>
                            <Box display="flex" flexDirection="column">
                                <Box mb={2} width="100%">
                                    <FormikTextField
                                        name="identifier"
                                        type="text"
                                        label="Email or Username"
                                        color="secondary"
                                    />
                                </Box>
                                <Box width="100%">
                                    <FormikTextField
                                        name="password"
                                        type="password"
                                        label="Password"
                                        color="secondary"
                                    />
                                </Box>
                            </Box>
                            <Box mt={2}>{error && <Error msg={error} />}</Box>
                            <Box
                                mt={4}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Button variant="text" color="inherit">
                                    create account
                                </Button>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    type="submit"
                                >
                                    submit
                                </Button>
                            </Box>
                        </Form>
                        {isSubmitting && (
                            <Box
                                sx={{ position: "absolute", top: 0, left: 0 }}
                                width="100%"
                            >
                                <LinearProgress />
                            </Box>
                        )}
                    </>
                )}
            </Formik>
        </Box>
    );
};

export default SigninForm;
