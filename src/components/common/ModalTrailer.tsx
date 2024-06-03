import { Box } from "@mui/material";
import ReactPlayer from "react-player";
import { Modal, ModalClose, Card } from "@mui/joy";
import { ModalTrailerType } from "@/types";

export function ModalTrailer({
  open,
  handleClose,
  trailerUrl,
}: ModalTrailerType) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "50%",
          position: "relative",
        }}
      >
        <ModalClose
          onClick={handleClose}
          variant="soft"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <Card component="li" sx={{ width: "100%", height: "100%" }}>
          <ReactPlayer
            className="react-player"
            url={trailerUrl}
            width="100%"
            height="100%"
            controls
          />
        </Card>
      </Box>
    </Modal>
  );
}
