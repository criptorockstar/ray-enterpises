import styles from "./footer.module.scss";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterComponent() {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <p>&copy; 2024 Ray Enterprises</p>

          <ul>
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}
