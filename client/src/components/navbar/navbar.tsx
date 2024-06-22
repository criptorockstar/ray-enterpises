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
import logo from "@assets/images/logo.svg";
import { useTranslations } from "next-intl";
import LocalSwitcher from "@components/switcher/switcher";
import MenuComponent from "@components/drawer/menu";
import DrawerComponent from "../drawer/drawer";

export default function NavbarComponent() {
  const t = useTranslations("Navigation");

  const items = [
    { slug: `#${t("slug.about")}`, text: t("links.about") },
    { slug: `#${t("slug.services")}`, text: t("links.services") },
    { slug: `${t("slug.work_with_us")}`, text: t("links.work_with_us") },
    { slug: `#${t("slug.contact")}`, text: t("links.contact") },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar>
            <MenuComponent />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className={styles.brand}>
                <Image
                  src={logo}
                  alt="Ray Enterprises Logo"
                  className={styles.logo}
                  width={80}
                  height={40}
                  priority
                />
              </div>
            </Typography>

            <Stack direction="row" spacing={2}>
              {items.map((item) => (
                <Button
                  key={item.slug}
                  className={styles.navitem}
                  href={item.slug}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {item.text}
                </Button>
              ))}
              <LocalSwitcher />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerComponent items={items} />
    </>
  );
}

