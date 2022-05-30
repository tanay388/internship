import React, { useEffect, useState } from "react";
import callTagList from "../../Api/taglist";
import {  Row, Col, Container } from 'react-bootstrap'

import {
    FormControlLabel,
    Button,
    Dialog,
    DialogActions, 
    DialogContent,
    DialogTitle,
    DialogContentText,
    useMediaQuery,
    Checkbox
  } from '@mui/material'

const DialogBox = ({fullScreen, open, tags, handleClose, handleTagsList}) => {
  const [tags_list, setTags_list] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  

  const getData = async () => {
    await callTagList().then((res) => {  setTags_list(res)});
  };
  return(
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="tags-list"
  >
    <DialogTitle id="responsive-dialog-title">
      {"Choose the tags for filtering?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Choose The Tags to filter.
      </DialogContentText>
      <Container fluid="md">
        <Row>
          {tags_list.map((elem) => {
            return(
            <Col><FormControlLabel
            control={
              <Checkbox
              checked= {tags.includes(elem)}
                onChange={handleTagsList}
                name={elem}
              />
            }
            label={elem}
          /></Col>);
          })}
        </Row>
      </Container>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Done
      </Button>
    </DialogActions>
  </Dialog>
  );
};

export default DialogBox;
