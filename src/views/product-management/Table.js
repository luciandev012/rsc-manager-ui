import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import Tooltip from "@material-ui/core/Tooltip";
// import IconButton from "@material-ui/core/IconButton";

// import Edit from "@material-ui/icons/Edit";
// import Close from "@material-ui/icons/Close";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import {
  TableAddBarCodeButton,
  TableAddQrCodeButton,
  TableDeleteButton,
  TableEditButton,
} from "./table-action";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles(styles);

// show information
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, editData } = props;

  // show information
  const [openShowInformation, setOpenShowInformation] = React.useState(false);

  const handleClickOpenShowInformation = () => {
    setOpenShowInformation(true);
  };

  const handleCloseShowInformation = () => {
    setOpenShowInformation(false);
  };
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <>
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  </>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        {tableData !== undefined ? (
          <TableBody>
            {tableData.map((prop, key) => {
              return (
                // Attribute
                <TableRow hover key={key} className={classes.tableBodyRow}>
                  {prop.map((prop, key) => {
                    if (key != 3) {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={key}
                          onClick={handleClickOpenShowInformation}
                        >
                          {prop}
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={key}
                          onClick={handleClickOpenShowInformation}
                        >
                          <Avatar src={prop} />
                        </TableCell>
                      );
                    }
                  })}

                  {/* Actions */}
                  <TableCell className={classes.tableCell} key={key}>
                    <Stack direction="row" spacing={0.5}>
                      <TableEditButton data={editData[key]} />
                      <TableDeleteButton data={editData[key]} />
                      <TableAddQrCodeButton data={editData[key]} />
                      <TableAddBarCodeButton data={editData[key]} />
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody>
            {tableData.map((prop, key) => {
              return (
                // Attribute
                <TableRow key={key} className={classes.tableBodyRow}>
                  {prop.map((prop, key) => {
                    return (
                      <TableCell
                        className={classes.tableCell}
                        key={key}
                        onClick={handleClickOpenShowInformation}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>

      <Dialog
        fullScreen
        open={openShowInformation}
        onClose={handleCloseShowInformation}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseShowInformation}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Information
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="ID" secondary="1" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Product Name" secondary="Mướm Hương" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Product Code" secondary="SKU: 10053905" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Product Describe"
              secondary="Mướp hương là một trong những loại rau củ rất quen thuộc đối với người Việt Nam. Với mướp hương, chúng ta có thể chế biến được rất nhiều món ăn hấp dẫn và giàu dinh dưỡng. Mỗi quả mướp hương được nuôi trồng và chăm chút rất cẩn thận. Những sản phẩm được bày bán trên gian hàng đều đã trải qua quá trình tuyển chọn kỹ càng. Sản phẩm được phân phối bởi Vinmart và được bảo quản cẩn thận và chặt chẽ để mang tới cho khách hàng những sản phẩm có chất lượng tốt nhất."
            />
          </ListItem>

          <ListItem>
            <ListItemText primary="Image" secondary="1" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Price" secondary="19" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Quantity" secondary="2" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  editData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
