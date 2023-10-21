import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { IRoutes } from "../interfaces/IRoutes";

interface NullParaAppBarParams {
  routes: IRoutes[];
}

export function NullParaAppBar({ routes }: NullParaAppBarParams) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            null_para
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {routes.map((route) => (
          <MenuItem
            key={route.name}
            onClick={handleMenuClose}
            component={Link}
            to={route.url}
          >
            {route.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
