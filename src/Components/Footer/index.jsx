import {
  Box,
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import logo
import brandLogo from "./logo/footer logo.svg"
import linkedin from "./logo/linkedin.svg";
import medium from "./logo/medium.svg";
import twitter from "./logo/twitter.svg";
import dribbble from "./logo/dribbble.svg";
import facebook from "./logo/facebook.svg";
import instagram from "./logo/instagram.svg";

const secondFooterEl = ["HOME", "ABOUT US", "PORTFOLIO", "BLOG"];
const thirdFooterEl = ["PAGES", "CONTACT"];
const pagesItems = [
  "LOGIN/REGISTER",
  "MY PROFILE",
  "PRICING",
  "FAQ",
  "404 PAGE",
];
const socialMedia = [linkedin, medium, twitter, dribbble, facebook, instagram];

export default function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "black", color: "white", marginTop: "20px" }}
      component={"footer"}
    >
      <Container>
        <Grid
          container
          rowSpacing={3}
          sx={{
            justifyContent: { xs: "center", md: "start" },
            paddingY: "20px",
          }}
        >
          <Grid
            item
            xs={10}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Box
              component={"img"}
              src={brandLogo}
              alt="Makarya"
              sx={{ width: "80px", height: "80px", paddingY: "8px" }}
            />
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                color: "white !important",
                paddingRight: { xs: "0px", md: "28%" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum and something else.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "50px",
                color: "white",
                fontWeight: "300",
                lineHeight: "16px",
              }}
            >
              Special Region of Yogyakarta
              <br /> Indonesia
              <br /> (027) 333333
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sm={4}
            md={2}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <List sx={{ paddingY: "0" }}>
              {secondFooterEl.map((item, index) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().split(" ").join("-")}`}
                >
                  <ListItemText
                    primary={item}
                    sx={{ marginBottom: "15px" }}
                    primaryTypographyProps={{
                      variant: "body2",
                      sx: { color: "white" },
                    }}
                  />
                </Link>
              ))}
            </List>
          </Grid>
          <Grid
            item
            xs={7}
            sm={4}
            md={2}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <List sx={{ paddingY: "0" }}>
              {thirdFooterEl.map((item, index) =>
                item === "PAGES" ? (
                  <Box key={index}>
                    <Link>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: "body2",
                          sx: { color: "white", fontWeight: "500" },
                        }}
                      />
                    </Link>
                    {pagesItems.map((e, i) => (
                      <Link
                        key={i}
                        to={`/${
                          i === 0 ? "register" : e.toLowerCase().split(" ").join("-")
                        }`}
                      >
                        <ListItemText
                          sx={{ marginLeft: "15px", marginBottom: "10px" }}
                          primary={`${e}`}
                          primaryTypographyProps={{
                            variant: "body1",
                            sx: { color: "white" },
                          }}
                        />
                      </Link>
                    ))}
                  </Box>
                ) : (
                  <Link key={item} to={`/${item.toLowerCase()}`}>
                    <ListItemText
                      primary={item}
                      sx={{ marginBottom: "15px", fontWeight: "500" }}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { color: "white" },
                      }}
                    />
                  </Link>
                )
              )}
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={{ paddingX: "5%" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: "25px",
                textAlign: { xs: "center", sm: "inherit" },
              }}
            >
              Follow us on:
            </Typography>
            <Grid container spacing={3}>
              {socialMedia.map((icon, index) => (
                <Grid key={index} item xs={4}>
                  <Box
                    component={"img"}
                    src={icon}
                    alt={icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
