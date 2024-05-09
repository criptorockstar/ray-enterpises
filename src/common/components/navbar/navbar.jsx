import {
  AppBar,
  Toolbar,
  Stack,
  Container,
  Button,
  Typography,
} from "@mui/material";
import styles from "./navbar.module.scss";
import Image from "next/image";
import logo from "../../../common/assets/logo.jpg";

export default function NavbarComponent() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              <Image
                src={logo}
                alt="Ray Enterprises Logo"
                className={styles.logo}
                width={80}
                height={40}
                priority
              />
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button className={styles.navitem} href="#nosotros">
                Nosotros
              </Button>
              <Button className={styles.navitem}>Visión</Button>
              <Button className={styles.navitem}>Servicios</Button>
              <Button className={styles.navitem}>Portfolio</Button>
              <Button className={styles.navitem}>Contacto</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
