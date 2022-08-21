import React, { useEffect } from "react";

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

// dialog
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// validation
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllBrand } from "actions/brand";
import { addBrand } from "actions/brand";

import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const currencies = [
  {
    value: "Thịt heo",
    label: "Thịt heo",
  },
  {
    value: "Thịt bò",
    label: "Thịt bò",
  },
  {
    value: "Thịt gà",
    label: "Thịt gà",
  },
];

export default function DishManagementPage() {
  // validation
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(addBrand(data));
    handleClose();
    dispatch(getAllBrand());
    window.location.reload();
    //fetchBrand();
  };
  const dispatch = useDispatch();
  const listBrands = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(getAllBrand());
    //listBrands = useSelector((state) => state.brand);
  }, []);

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

  const handleDelete = (chipToDelete) => () => {
    setChipDataSelect((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const [chipData] = React.useState([
    { key: 0, label: "Thịt Thăn Bò Hàn Quốc" },
    { key: 1, label: "Thịt Thăn Bò Mỹ" },
    { key: 2, label: "Thịt Thăn Bò Úc" },
    { key: 3, label: "Thịt Thăn Thái Lan" },
  ]);

  const [chipDataSelect, setChipDataSelect] = React.useState([
    { key: 0, label: "Thịt Thăn Bò Úc" },
    { key: 1, label: "Thịt Thăn Thái Lan" },
  ]);

  const handleClick = () => {
    console.info("You clicked the Chip.");
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
            <span>Thêm mới</span>
          </Button>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit(onSubmit)}
          disableEscapeKeyDown={false}
          onBackdropClick="false"
        >
          <form>
            <DialogTitle>Thêm mới</DialogTitle>
            <DialogContent>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="dishName"
                    label="Tên món ăn"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    margin="dense"
                    id="description"
                    label="Mô tả"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    margin="dense"
                    id="cook"
                    label="Cách nấu ăn"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
              </Box>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <h4>
                  <b>Nguyên liệu nấu ăn</b>
                </h4>
                <div>
                  {/* chon category */}
                  <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Nguyên liệu"
                    // onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <Box sx={{ m: 2 }}>
                    <div>
                      <Paper
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          listStyle: "none",
                          p: 0.5,
                          m: 1,
                        }}
                        component="ul"
                        elevation={0}
                      >
                        {chipData.map((data) => {
                          return (
                            <ListItem key={data.key}>
                              <Chip label={data.label} onClick={handleClick} />
                            </ListItem>
                          );
                        })}
                      </Paper>
                    </div>
                    <div>
                      <Paper
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          listStyle: "none",
                          p: 0.5,
                          m: 1,
                        }}
                        component="ul"
                        variant="outlined"
                      >
                        {chipDataSelect.map((data) => {
                          let icon;

                          return (
                            <ListItem key={data.key}>
                              <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={
                                  data.label === "React"
                                    ? undefined
                                    : handleDelete(data)
                                }
                              />
                            </ListItem>
                          );
                        })}
                      </Paper>
                    </div>
                  </Box>
                </div>
              </Box>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="productName"
                    label="Tên sản phẩm"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="quantity"
                    label="Số lượng"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="unitName"
                    label="Tên đơn vị"
                    type="text"
                    name="description"
                    variant="outlined"
                  />
                </div>
                <div>
                  <Button startIcon={<AddCircleIcon />}>
                    Thêm nguyên liệu
                  </Button>
                </div>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Hủy</Button>
              <Button type="submit">Lưu</Button>
            </DialogActions>
          </form>
        </Dialog>

        <Card>
          <CardHeader color="warning"></CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Tên món ăn", ""]}
              tableData={listBrands.map((brand) => {
                // console.log(brand);
                return [brand.brandId, brand.brandname];
              })}
              editData={listBrands}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
