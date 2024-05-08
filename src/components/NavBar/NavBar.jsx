import {
  AppBar,
  Toolbar,
  Stack,
  Container,
  Button,
  Typography,
} from "@mui/material";
import styles from "./navbar.module.scss";

export default function NavbarComponent() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Ray Enterprises
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button className={styles.navitem}>Nosotros</Button>
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
