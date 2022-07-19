import * as React from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PropTypes } from "prop-types";
// validation
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux/es/exports";
import { deleteProduct, updateProduct } from "actions/product";
import AddIcon from "@material-ui/icons/Add";

export function TableEditButton({ data }) {
  // validation
  const { handleSubmit } = useForm();
  //console.log(data);

  //console.log(errors);

  // edit
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);
  const [product, setProduct] = React.useState({
    productName: data.productName,
    productCode: data.productCode,
    productDescribe: data.productDescribe,
    price: data.price,
    quantity: data.quantity,
    discountId: data.discountId,
    subCategoryId: data.subCategoryId,
    unitId: data.unitId,
    categoryId: data.categoryId,
  });
  const [image, setImage] = React.useState("");
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();

  const handleClickOpenEdit = () => {
    setOpenDialogEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenDialogEdit(false);
  };

  const onSubmit = async () => {
    const fd = new FormData();
    fd.append("files", image);
    fd.append("productName", product.productName);
    fd.append("productCode", product.productCode);
    fd.append("price", product.price);
    fd.append("quantity", product.quantity);
    fd.append("unitId", 1);
    fd.append("subCategoryId", 1);
    fd.append("productId", data.productId);
    dispatch(updateProduct(fd));
    handleCloseEdit();
  };

  return (
    <>
      <Tooltip title="Edit" arrow>
        <Fab
          size="small"
          color="warning"
          aria-label="edit"
          onClick={handleClickOpenEdit}
        >
          <EditIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openDialogEdit}
        onClose={handleCloseEdit}
        onSubmit={handleSubmit(onSubmit)}
      >
        <form>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="productName"
              label="Product Name"
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="productCode"
              label="Product Code"
              type="text"
              name="productCode"
              value={product.productCode}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="productDescribe"
              label="Product Describe"
              type="text"
              name="productDescribe"
              value={product.productDescribe}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="quantity"
              label="Quantity"
              type="text"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="unitId"
              label="Unit Id"
              type="text"
              name="unitId"
              value={product.unitId}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="subCategoryId"
              label="Sub Category Id"
              type="text"
              name="subCategoryId"
              value={product.subCategoryId}
              onChange={handleChange}
              variant="outlined"
            />
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={handleImage}
              />
              <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon /> Upload photo
              </Fab>
            </label>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleCloseEdit}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export function TableDeleteButton({ data }) {
  // delete
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDialogDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDialogDelete(false);
  };
  const handleYesDelete = async () => {
    dispatch(deleteProduct(data.productId));
    setOpenDialogDelete(false);
  };
  const dispatch = useDispatch();
  return (
    <>
      <Tooltip title="Delete" arrow>
        <Fab
          size="small"
          color="error"
          aria-label="delete"
          onClick={handleClickOpenDelete}
        >
          <DeleteIcon />
        </Fab>
      </Tooltip>

      <Dialog
        open={openDialogDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete {data.productName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesDelete}>Yes</Button>
          <Button onClick={handleCloseDelete}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

TableEditButton.propTypes = {
  data: PropTypes.object,
};
TableDeleteButton.propTypes = {
  data: PropTypes.object,
};
