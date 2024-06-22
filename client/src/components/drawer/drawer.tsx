"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/store/store";
import { toggleDrawer } from "@/store/drawerSlice";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from "./drawer.module.scss";
import Image from "next/image";
import logo from "@assets/images/logo.svg";

interface DrawerComponentProps {
  items: { slug: string, text: string }[];
}

export default function DrawerComponent({ items }: DrawerComponentProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer);

  const toggle = () => {
    dispatch(toggleDrawer(false));
  }

  return (
    <Drawer
      anchor={'left'}
      open={isOpen.isOpen}
      onClose={() => toggle()}
    >
      <Box sx={{ 
        width: 250, 
        backgroundColor: "#070d07", 
        height: "100%", 
        color: "#ffffff" 
      }}>
        <div className={styles.brand}>
          <Image
            src={logo}
            alt="Ray Enterprises Logo"
            className={styles.logo}
            width={180}
            height={90}
            priority
          />
        </div>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.slug}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
