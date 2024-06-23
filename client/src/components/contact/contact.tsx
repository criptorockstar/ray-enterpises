import React from "react";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from "@mui/material/Grid";
import styles from "./contact.module.scss";
import { TextareaAutosize as Textarea } from '@mui/material';
import { Button } from "@mui/material";


export default function Contact() {
  return (
    <div className={styles.contactForm}>
      <h3>Contacto</h3>
      <Grid container spacing={1}>
        <Grid md={6}>
          <FormControl 
            sx={{ m: 1}}
            className={styles.formControl} 
            variant="outlined">
            <OutlinedInput
              placeholder="Nombre"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid md={6}>
          <FormControl 
            sx={{ m: 1}} 
            className={styles.formControl} 
            variant="outlined">
            <OutlinedInput
              placeholder="Apellido"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid md={12}>
          <FormControl 
            sx={{ m: 1}} 
            className={styles.formControlFull} 
            variant="outlined">
            <OutlinedInput
              placeholder="Correo electronico"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'black',
                },
              }}
            />
          </FormControl>
        </Grid>

        <FormControl 
            sx={{ m: 1}} 
            className={styles.formControlArea} 
            variant="outlined">
          <Textarea 
            aria-label="minimum height" 
            minRows={8} 
            placeholder="" />
        </FormControl>

        <div className={styles.buttonContainer}>
          <Button variant="contained" className={styles.submit}>Enviar</Button>  
        </div>
      </Grid>
    </div>
  );
}
