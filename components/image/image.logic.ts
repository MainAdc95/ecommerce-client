import { ShapeType } from "./image";

const useImage = () => {
    const getShapeUnit = (shape: ShapeType) => {
        switch (shape) {
            case "square":
                return "100%";
            case "horizontal":
                return "56.25%";
            case "vertical":
                return "150%";
        }
    };

    return { getShapeUnit };
};

export default useImage;
