"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import styles from "./switcher.module.scss";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LocalSwitcher() {
  const [_, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const onSelectChange = (e: SelectChangeEvent) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
    startTransition(() => {});
  };

  return (
    <>
      <div className={styles.lang}>
        <TranslateIcon className={styles.icon} />
      </div>
      <FormControl sx={{ m: 1, maxWidth: 60 }}>
        <Select
          variant="outlined"
          value={locale}
          onChange={onSelectChange}
          inputProps={{ "aria-label": "Language" }}
          MenuProps={{
            PaperProps: {
              style: {
                backgroundColor: "#2f2f2f",
                color: "white",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
          }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="es">ES</MenuItem>
          <MenuItem value="fr">FR</MenuItem>
          <MenuItem value="pt">PT</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
          <MenuItem value="zh">ZH</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
