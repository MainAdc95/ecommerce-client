import { Form, Formik } from "formik";

interface IProps {
    parent: string;
}

const CategoryForm = ({ parent }: IProps) => {
    return <Formik initialValues={{ name: "" }}>{() => <Form></Form>}</Formik>;
};

export default CategoryForm;
