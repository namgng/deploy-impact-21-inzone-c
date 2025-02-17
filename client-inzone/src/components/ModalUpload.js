import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Modal, Divider, Button } from "@mui/material";
import DownloadButton from "./DownloadButton";

const ModalUpload = (props) => {
  const { modalIsOpen, closeModal } = props;
  console.log(props);

  return (
    <Modal
      open={modalIsOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => closeModal(true)}
    >
      <Box sx={styleOfModal}>
        <Typography id="modal-modal-title" variant="h6">
          Upload your csv file
        </Typography>
        <label htmlFor="contained-button-file">
          <UploadInput
            accept=".csv"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <DownloadButton />

        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Button
          variant="contained"
          color="success"
          style={{ height: 40 }}
          onClick={props.setModalIsOpenToFalse}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

const UploadInput = styled("input")({
  display: "none",
});

const styleOfModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default ModalUpload;
