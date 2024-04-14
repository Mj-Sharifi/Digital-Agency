import React from 'react'
import { Box, Typography } from "@mui/material";
import Bread from "../../Components/Bread";

export default function Hero({img,title,subtitle}) {
  return (
    <Box
        sx={{
          marginTop: "80px",
          width: "100%",
          height: { xs: "250px", md: "380px" },
          backgroundImage: `url(${process.env.REACT_APP_API_Images}${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          marginBottom:"60px"
        }}
        component={"header"}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"#00000060"
          }}
        >
          <Typography
            textAlign={"center"}
            variant="l"
            color={"text.white"}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography textAlign={"center"} variant="s" color={"text.white"} sx={{paddingX:"10px"}}>
            {subtitle}
          </Typography>
        </Box>
        <Bread />
      </Box>
  )
}
