import ErrorIcon from "@mui/icons-material/Error";
import { Typography, Box } from "@mui/material";

interface IProps {
    msg: string;
}

const Error = ({ msg }: IProps) => {
    return (
        <Box display="flex">
            <ErrorIcon color="error" sx={{ width: "16px", height: "16px" }} />
            <Typography ml={0.5} variant="caption" color="error">
                {msg}
            </Typography>
        </Box>
    );
};

export default Error;
