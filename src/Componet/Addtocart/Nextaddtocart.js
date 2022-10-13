import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, getProduct, upadateProduct } from '../../Redux/Action/Product.action';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCategory } from '../../Redux/Action/Categary.action';
import { getNextform } from '../../Redux/Action/Nextpage.action';

function Nextaddtocart(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [did, setDid] = useState();
    const [update, setUpdate] = useState(false);
    const [uid, setUid] = useState();
    const Nextpage = useSelector(state => state.Nextpage)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
    };

    const handledClickOpen = (params) => {
        setDOpen(true);
    };
    const handleEdit = (params) => {
        setUid(params.id);
        setOpen(true);
        formik.setValues({
            id: params.id,
            name: params.name,
            surname: params.surname,
            phoneno: params.phoneno,
            ...params
        });
        setUpdate(true);
    }
    const handleUpdate = (values) => {
        dispatch(upadateProduct(values));
        setOpen(false);
        setUpdate(false);
        setUid();
    }
    const handleDelete = () => {
        dispatch(deleteProduct(did))
        setDid('');
        handleClose('');

    }
    useEffect(
        () => {
            dispatch(getProduct())
            dispatch(getCategory())
            dispatch(getNextform())
        },
        [])

    let handleSubmit = (values) => {
        dispatch(addProduct(values))
        handleClose();
        setName('');
    }

    let schema = yup.object().shape({
        name: yup.string().required('Please Enter Your Name'),
        surname: yup.string().required('Please Enter Surname'),
        phoneno: yup.string().required('Please Enter PhoneNo')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            phoneno: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdate(values);
            }
            else {
                handleSubmit(values);
            }
            handleClose();
        },
    });
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'surname', headerName: 'Surname', width: 130 },
        { field: 'phoneno', headerName: 'PhoneNo', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => { setDid(params.row); handledClickOpen(params) }}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Data
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Nextpage.Nextpage}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Data</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="name"
                                value={formik.values.name}
                                label="Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}

                            <TextField
                                autoFocus
                                margin="dense"
                                name="surname"
                                value={formik.values.surname}
                                label="Surnem"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.surname ? <p>{formik.errors.surname}</p> : null}

                            <TextField
                                autoFocus
                                margin="dense"
                                name="phoneno"
                                value={formik.values.phoneno}
                                label="PhoneNo"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.phoneno ? <p>{formik.errors.phoneno}</p> : null}

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Form>
                </Formik>
            </Dialog>

            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>NO</Button>
                    <Button onClick={handleDelete} autoFocus>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Nextaddtocart;