"use client";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleDrawer } from "@/states/drawerSlice";
import { RootState } from "@states/store";

export default function MenuComponent() {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleDrawer(!isOpen));
  };

  return (
    <IconButton
      onClick={handleMenu}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
}
