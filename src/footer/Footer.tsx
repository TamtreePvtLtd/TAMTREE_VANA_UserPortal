import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import theme from "../theme/theme";
import { Link as RouterLink } from "react-router-dom";






function Footer() {
  const mobilescreen = useMediaQuery("(max-width:700px)");

  return (
    <Box sx={{ backgroundColor: "#f5f0ec", marginTop: 0 }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
          <Typography variant="h4" fontWeight={600} fontFamily="'Crimson Text', serif" fontStyle="italic" fontSize="35px">
            Contact Us
          </Typography>

        </Box>

        <Grid container sx={{ gap: 3 }}>
          <Grid
            container
            item
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item lg={3} md={4} xs={12} sm={5}>
              <Box
                sx={{
                  my: 1,
                  textAlign: "center",
                }}
              >
                <LocationOnIcon
                  fontSize="large"
                  sx={{ color: theme.palette.secondary.main }}
                />
                <Typography variant="h5"> Store Address</Typography>
                <Typography>
                  2700 E Eldorado Pkwy, #203,
                  <br /> Little Elm - 75068
                </Typography>
              </Box>
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ background: "white", borderWidth: "1px" }}
            />

            <Grid item lg={3} md={4} xs={12} sm={5}>
              <Box sx={{ my: 1, textAlign: "center" }}>
                <ChatBubbleIcon
                  fontSize="large"
                  sx={{ color: theme.palette.secondary.main }}
                />
                <Typography variant="h5">General Enquiries</Typography>
                <Typography my={1}>vana@gmail.com</Typography>
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: mobilescreen ? "column" : "row",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="mailto:Jewellerybyvana@gmail.com "
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      startIcon={<EmailIcon sx={{ color: "#0489c9" }} />}
                      variant="contained"
                    >
                      E-mail
                    </Button>
                  </a>

                  <Button
                    startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
                    variant="contained"
                  >
                    Whatsapp
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                background: "white",
                display: { xs: "none", md: "block" },
                borderWidth: "1px",
              }}
            />

            <Grid item lg={2.9} md={2.9} xs={12}>
              <Box sx={{ my: 1, textAlign: "center" }}>
                <PhoneIcon
                  fontSize="large"
                  sx={{ color: theme.palette.secondary.main }}
                />
                <Typography variant="h5">Call us</Typography>
                <Typography>12067308971</Typography>
                <Box mt={1}>
                  <IconButton>
                    <FacebookRoundedIcon
                      sx={{ fontSize: "2rem", color: "#1877f2" }}
                    />
                  </IconButton>
                  <IconButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      viewBox="0 0 102 102"
                      id="instagram"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="6.601"
                          cy="99.766"
                          r="129.502"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stopColor="#fa8f21"></stop>
                          <stop offset=".78" stopColor="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="70.652"
                          cy="96.49"
                          r="113.963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".64"
                            stopColor="#8c3aaa"
                            stopOpacity="0"
                          ></stop>
                          <stop offset="1" stopColor="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                        data-name="Path 16"
                      ></path>
                      <path
                        fill="url(#b)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                        data-name="Path 17"
                      ></path>
                      <path
                        fill="#fff"
                        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                        data-name="Path 18"
                        transform="translate(-422.637 -426.196)"
                      ></path>
                    </svg>
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Typography variant="body2" mx={2}>
              About
            </Typography>
            <Typography variant="body2" mx={2}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" mx={2}>
              Shipping & Returns
            </Typography>
            <Typography variant="body2" mx={2}>
              Terms and condition
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
