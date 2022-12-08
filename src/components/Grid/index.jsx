import { Button, Grid, Typography } from '@mui/material';
import './style.css'

export default function GridContent() {
    return (
        <>
            <Button variant="contained">Hola</Button>
            <h1>LOl</h1>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Grid</h1>
                    <Typography variant='h1' color={"primary"}>Typog</Typography>
                </Grid>
            </Grid>
        </>
    );
}