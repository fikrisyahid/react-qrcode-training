import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import QRCode from "qrcode";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { QrReader } from "react-qr-reader";
import MainGrid from "../../components/MainGrid";

const Qrcode = () => {
  const [QRvalue, setQRvalue] = useState("");
  const [QRimage, setQRimage] = useState("");
  const [QRresult, setQRresult] = useState("");

  const handleGenerate = async () => {
    const response = await QRCode.toDataURL(QRvalue);
    setQRimage(response);
  };

  return (
    <Grid container direction="column" alignItems="center" sx={{ padding: 2 }}>
      <MainGrid
        sx={{
          backgroundColor: "transparent",
          alignItems: "center",
        }}
        sb
      >
        <Typography
          variant="h2"
          fontFamily="Helvetica"
          fontWeight={600}
          color="white"
        >
          QR Scanner Test
        </Typography>
      </MainGrid>
      <Grid container item spacing={2}>
        <Grid container item xs={6}>
          <MainGrid
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item pb={2}>
              <TextField
                variant="outlined"
                color="primary"
                label="Enter QR code here"
                value={QRvalue}
                multiline
                onChange={(e) => setQRvalue(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerate}
              >
                Generate QR Code
              </Button>
            </Grid>
            {QRimage !== "" && (
              <Grid item>
                <img alt="qrcode" src={QRimage} width="200px" height="200px" />
              </Grid>
            )}
          </MainGrid>
        </Grid>
        <Grid container item xs={6}>
          <MainGrid
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item mt={5}>
              <TextField
                label="QR code result"
                value={QRresult}
                multiline
                disabled
              />
            </Grid>
            <Grid item>
              <QrReader
                constraints={{
                  facingMode: "user",
                }}
                onResult={(result, error) => {
                  if (!!result) {
                    // @ts-ignore
                    setQRresult(result?.text);
                  }
                  if (!!error) {
                    console.info(error);
                  }
                }}
                videoContainerStyle={{ width: "350px" }}
              />
            </Grid>
          </MainGrid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Qrcode;
