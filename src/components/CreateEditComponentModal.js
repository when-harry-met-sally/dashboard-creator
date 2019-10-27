import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ColorPicker from "material-ui-color-picker";
import { Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function CreateEditComponentModal({
  handleSubmit,
  open,
  setOpen,
  focus,
  setFocus,
  handleDelete
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitButton = () => {
    handleSubmit(focus)
    handleClose();
  };

  const handleDeleteButton = () => {
    handleDelete(focus);
    handleClose();
  }
  const colors = [
    {
      name: "Red",
      code: "#f54340"
    },
    {
      name: "Orange",
      code: "#faad41"
    },
    {
      name: "Yellow",
      code: "#faf741"
    },
    {
      name: "Green",
      code: "#6cfa41"
    },
    {
      name: "Teal",
      code: "#41faf7"
    },
    {
      name: "Blue",
      code: "#44adfc"
    },
    {
      name: "Purple",
      code: "#a043f7"
    },
    {
      name: "Pink",
      code: "#fa39e7"
    },
    {
      name: "Magenta",
      code: "#f72a98"
    },
    {
      name: "Black",
      code: "Black"
    },
    {
      name: "Grey",
      code: "Grey"
    },
    {
      name: "White",
      code: "White"
    }
  ];
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={"md"}
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">Create Component</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-name"
                label="Name"
                margin="normal"
                value={focus.name}
                onChange={e => {
                  setFocus({ ...focus, name: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-name"
                label="Description"
                margin="normal"
                value={focus.description}
                onChange={e => {
                  setFocus({ ...focus, description: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-name"
                label="Text"
                margin="normal"
                value={focus.text}
                onChange={e => {
                  setFocus({ ...focus, text: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-name"
                label="Image"
                margin="normal"
                value={focus.image}
                onChange={e => {
                  setFocus({ ...focus, image: e.target.value });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            {colors.map(color => (
              <Grid item xs={2} md={1}>
                <span
                  className="color-box"
                  style={{
                    backgroundColor: color.code,
                    border: focus.color === color.code && "3px solid black"
                  }}
                  onClick={() => setFocus({ ...focus, color: color.code })}
                ></span>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
     
          {focus.id !== undefined && <Button onClick={() => handleDeleteButton()} color="secondary">
            Delete
          </Button>}
          <Button onClick={() => handleSubmitButton()} color="primary">
            {focus.id === undefined ? 'Create' : 'Edit'}
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
