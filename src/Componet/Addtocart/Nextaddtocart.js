import { useSelect } from '@mui/base';
import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { addOrder, getOrder } from '../../Redux/Action/Addtocart.action';

function Nextaddtocart(props) {
    const [useType, setUseType] = useState("Submit");
    const history = useHistory()
    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');

    const addtocart = useSelector(state => state.Cart)

    console.log(props.location.state.data);

    useEffect(
        () => {
            dispatch(getOrder())
        },
        [])

        const handleClose = () => {
            setOpen(false);
            setDOpen(false);
        };
    let Submit = {
        name: yup.string().required("Please Enter Your Name"),
        email: yup.string().email("Please Enter Valid Email").required("Please Enter Your Email"),
        phone: yup.string().required("Please Enter Your Phone"),
        address: yup.string().required("Please Enter Your Address")
    }

    let schema, initiValue;

    if (useType === "Submit") {
        schema = yup.object().shape(Submit);
        initiValue = {
            name: "",
            email: "",
            phone: "",
            address: ""
        }
    }

    const handleSubmit = (values) => {
        dispatch(addOrder({ ...values, data: props.location.state.data }))
        handleClose();
        setName('');
    }

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            if (values) {
                handleSubmit(values);
                history.push("/cartformdisplay")
            }
        },
    });

    return (
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className='submit' style={{ width: "50%", margin: "auto" }}>
                        {

                            <h3 className='text-center mb-5 mt-5'>Form</h3>
                        }
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                {
                                    <>
                                        <FormGroup>
                                            <Label for="exampleName">
                                                Name
                                            </Label>
                                            <Input
                                                name="name"
                                                placeholder="Enter Name"
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.name ?
                                                    <p>{formik.errors.name}</p> : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Enter Email"
                                                type="email"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.email ?
                                                    <p>{formik.errors.email}</p> : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePhone">
                                                Phone
                                            </Label>
                                            <Input
                                                id="examplePhone"
                                                name="phone"
                                                placeholder="Phone"
                                                type="phone"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.phone ?
                                                    <p>{formik.errors.phone}</p> : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAddress">
                                                Address
                                            </Label>
                                            <Input
                                                id="exampleAddress"
                                                name="address"
                                                placeholder="Address"
                                                type="address"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.address ?
                                                    <p>{formik.errors.address}</p> : null
                                            }
                                        </FormGroup>
                                    </>
                                }
                                {
                                    <div className="text-center">
                                        <Button className="appointment-btn scrollto m-0 mb-2" type="submit" >Submit</Button>
                                    </div>
                                }
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Nextaddtocart;