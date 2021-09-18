import { Box, Paper, LinearProgress } from "@mui/material";
import Image from "../image/image";

const LoadingScreen = () => {
    return (
        <Box
            sx={{
                zIndex: 2000,
                height: "100vh",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
            }}
        >
            <Paper sx={{ borderRadius: 0, width: "100%", height: "100%" }}>
                <LinearProgress />
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{ backgroundColor: "white" }} borderRadius="50%">
                        <Image
                            src="/cpmc.gif"
                            alt="Crown pheonix"
                            width={130}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoadingScreen;
