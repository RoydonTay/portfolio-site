import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export default function ResumeDownloadButton() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        component="a"
        href="/portfolio-site/resume.pdf"
        download
        rel="noopener noreferrer"
        sx={{
          borderRadius: 4, // Slightly curved edges
          px: 3,
          minWidth: 180,
          textTransform: "none"
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
}
