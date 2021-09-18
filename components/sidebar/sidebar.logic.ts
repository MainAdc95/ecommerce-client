import { useState } from "react";

const useSidebar = () => {
    const [activeItem, setActiveItem] = useState(0);

    return { activeItem, setActiveItem };
};

export default useSidebar;
