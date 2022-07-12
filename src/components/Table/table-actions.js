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

// validation
import { useForm } from "react-hook-form";

export function TableEditButton() {
  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // edit
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenDialogEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenDialogEdit(false);
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
              id="name"
              label="Name"
              type="text"
              fullWidth
              name="name"
              {...register("name", {
                required: "Name is required.",
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              variant="outlined"
              defaultValue="Nguyen Tuan Bang"
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              name="email"
              {...register("email", {
                required: "email is required.",
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              variant="outlined"
              defaultValue="bangntce130421@fpt.edu.vn"
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="text"
              fullWidth
              name="phone"
              {...register("phone", {
                required: "Phone is required.",
              })}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
              variant="outlined"
              defaultValue="0366928662"
            />
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

export function TableDeleteButton() {
  // delete
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDialogDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDialogDelete(false);
  };
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
            Do you want to delete Tsubasa Ozora?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Yes</Button>
          <Button onClick={handleCloseDelete}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
