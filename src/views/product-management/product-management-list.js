import React, { useEffect, useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "./Table";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// angular UI
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@material-ui/icons/Add";
// paging
import TablePagination from "@mui/material/TablePagination";

// dialog
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Fab } from "@material-ui/core";
// validation
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "actions/product";
import { addProduct } from "actions/product";

export default function ProductManagementPage() {
  // validation
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const fd = new FormData();
    fd.append("files", image);
    fd.append("productName", product.productName);
    fd.append("productCode", product.productCode);
    fd.append("productDescribe", product.productDescribe);
    fd.append("price", product.price);
    fd.append("quantity", product.quantity);
    fd.append("unitId", 1);
    fd.append("subCategoryId", 1);
    fd.append("productId", product.productId);
    dispatch(addProduct(fd));
    handleClose();
  };

  // page
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // dialog
  const [open, setOpen] = React.useState(false);

  // open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close dialog
  const handleClose = () => {
    setOpen(false);
  };

  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const [product, setProduct] = useState({
    productId: 1,
    productName: "",
    productCode: "",
    productDescribe: "",
    price: "",
    quantity: "",
    discountId: "",
    subCategoryId: "",
    unitId: "",
    categoryId: "",
  });
  const [image, setImage] = useState("");
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
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Stack direction="row" marginLeft="15px">
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleClickOpen}
          >
            <span>Add New</span>
          </Button>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
        >
          <form>
            <DialogTitle>Add Product</DialogTitle>
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
                autoFocus
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
                autoFocus
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
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </Dialog>

        <Card>
          <CardHeader color="primary"></CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Product name",
                "Product code",
                "Image",
                "Price",
                "Quantity",
                "Actions",
              ]}
              tableData={products.map((product) => {
                return [
                  product.productId,
                  product.productName,
                  product.productCode,
                  product.productImageURl,
                  product.price,
                  product.quantity,
                ];
              })}
              editData={products}
            />
          </CardBody>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </GridItem>
    </GridContainer>
  );
}
