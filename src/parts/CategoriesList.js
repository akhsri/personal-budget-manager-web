import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Fade, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as CategoriesActions from "../actions/categoriesAction";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CategoriesList = (props) => {
  const { categoriesList, addCategory, getCategories } = props;

  useEffect(() => {
    getCategories();
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryName("")
  };

  return (
    <div>
      <h6>CATEGORIES</h6>
      <div style={{
        overflowY: "scroll",
        height: "40vh"
      }}>
        <ul>
          {categoriesList && categoriesList.length > 0 ? (
            categoriesList.map((category) => {
              return (
                <li key={category.id} className="my-3">
                  <span>{category.categoryName}</span>
                </li>
              );
            })
          ) : (
            <h6 className="text-center">You haven't added any category!</h6>
          )}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </ul>
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const categoryDetails = {
                categoryName: categoryName,
              };
              addCategory(categoryDetails, handleClose);
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h5>Add Budget Category</h5>
                <div className="mb-3">
                  <TextField
                    label="Category Name"
                    variant="outlined"
                    value={categoryName}
                    onChange={(event) => setCategoryName(event.target.value)}
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                    type="submit"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Fade>
          </form>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categories.categoriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (categoryDetails, handleClose) => {
      dispatch(CategoriesActions.createCategory(categoryDetails, handleClose));
    },
    getCategories: () => {
      dispatch(CategoriesActions.getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
