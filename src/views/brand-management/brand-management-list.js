import React, { useEffect, useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// angular UI
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// paging
import TablePagination from "@mui/material/TablePagination";

// dialog
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// validation
import { useForm } from "react-hook-form";
import axios from "axios";

export default function BrandManagementPage() {
  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.post("/Product/AddBrand", data);
    handleClose();
    fetchBrand();
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
  const fetchBrand = async () => {
    let res = await axios.get("/Product/GetAllBrands");
    console.log(res.data);
    setListBrands(res.data);
  };
  const [listBrands, setListBrands] = useState([]);
  useEffect(() => {
    fetchBrand();
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Stack direction="row" marginLeft="15px">
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleClickOpen}
          >
            <span>Add New Brand</span>
          </Button>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
        >
          <form>
            <DialogTitle>Add new brand</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="brandname"
                label="brandname"
                type="text"
                fullWidth
                name="brandname"
                {...register("brandname", {
                  required: "Brand name is required.",
                })}
                error={Boolean(errors.brandname)}
                helperText={errors.brandname?.message}
                variant="outlined"
              />
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
              tableHead={["ID", "Brand name", "Disable", "Product", "Actions"]}
              tableData={listBrands.map((brand) => {
                return [
                  brand.brandId,
                  brand.brandname,
                  brand.disabled ? "True" : "False",
                  brand.products,
                ];
              })}
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
