import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import { Avatar } from "@material-ui/core";
// import CardFooter from "components/Card/CardFooter.js";
// Dialog
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "components/CustomButtons/Button.js";
import * as api from "../../apis/auth";

// validation
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getManager } from "actions/auth";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function ManagerProfilePage() {
  const userId = JSON.parse(window.localStorage.getItem("user")).id;
  // validation
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    const changeModel = {
      phonenumber: user.phonenumber,
      oldPassword: model.oldPassword,
      newPassword: model.newPassword,
    };
    const { data } = await api.changePassword(changeModel);
    console.log(data);
    handleClose();
  };
  //console.log(errors);
  const classes = useStyles();
  // dialog
  const [open, setOpen] = React.useState(false);
  const [model, setModel] = React.useState({
    oldPassword: "",
    newPassword: "",
    cfPassword: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getManager(userId));
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setModel((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close dialog
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Account Details</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.fullname}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.email}
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.phonenumber}
                    id="phone"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.address}
                    id="address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.dateofbirth}
                    id="date"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={user.personalId}
                    id="personalId"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <Avatar src={user.avatar} />
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Manager</h6>
              <h4 className={classes.cardTitle}>{user.fullname}</h4>
              <p className={classes.description}>Email: {user.email}</p>
              {/* <Button color="primary" round>
                Follow
              </Button> */}
              <Button color="primary" round onClick={handleClickOpen}>
                Change Password
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                onSubmit={handleSubmit(onSubmit)}
              >
                <form>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="oldPassword"
                      label="Old Password"
                      type="password"
                      fullWidth
                      name="oldPassword"
                      value={model.oldPassword}
                      onChange={handleChange}
                    />

                    <TextField
                      margin="dense"
                      id="newPassword"
                      label="New Password"
                      type="password"
                      fullWidth
                      name="newPassword"
                      value={model.newPassword}
                      onChange={handleChange}
                    />

                    <TextField
                      margin="dense"
                      id="cfPassword"
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      name="cfPassword"
                      value={model.cfPassword}
                      onChange={handleChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button color="primary" type="submit">
                      Save
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                  </DialogActions>
                </form>
              </Dialog>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
