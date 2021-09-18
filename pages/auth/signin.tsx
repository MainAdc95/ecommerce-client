import { Box, Paper, Typography } from "@mui/material";
import SigninForm from "../../auth/components/signinForm/signinForm";
import IsNotAuth from "../../auth/protectors/isNotAuth";
import Image from "../../components/image/image";

const Signin = () => {
    return (
        <IsNotAuth>
            <Box width="100%" minHeight="100vh" display="flex">
                <Box margin="auto" width={450} pt={5} pb={5}>
                    <Paper sx={{ position: "relative" }} elevation={5}>
                        <Box pl={5} pr={5} pb={3} pt={3}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    src="/logo-square.svg"
                                    alt="Crown Pheonix"
                                    width={70}
                                />
                            </Box>
                            <Box
                                mt={1}
                                mb={2}
                                display="flex"
                                justifyContent="center"
                            >
                                <Typography variant="h5">Signin</Typography>
                            </Box>
                            <Box>
                                <SigninForm />
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </IsNotAuth>
    );
};

export default Signin;
