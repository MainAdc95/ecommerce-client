import useImage from "./image.logic";
import { StyledImage, Container, Wrapper } from "./image.styles";

export type ShapeType = "square" | "horizontal" | "vertical";
export type ImageObjectFit = "cover" | "contain";

interface IProps {
    src: string;
    alt: string;
    loading?: "lazy" | "eager";
    width?: number;
    height?: number;
    shape?: ShapeType;
    objectFit?: ImageObjectFit;
}

const Image = ({
    src,
    alt,
    width,
    height,
    loading = "lazy",
    shape = "square",
    objectFit = "contain",
}: IProps) => {
    const { getShapeUnit } = useImage();

    const imgJsx = (
        <StyledImage src={src} alt={alt} loading={loading} sx={{ objectFit }} />
    );

    return (
        <Container
            sx={{
                width: width || "initial",
                height: height || "initial",
                ":after": {
                    paddingBottom: getShapeUnit(shape),
                },
            }}
        >
            <Wrapper>{imgJsx}</Wrapper>
        </Container>
    );
};

export default Image;
