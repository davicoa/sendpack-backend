import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing.unit * 2,
        
    },
    padding: {
        padding: theme.spacing.unit,
        marginLeft: "30em",
        marginTop: "3em",
        marginBottom: "3em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5em",
            marginLeft: "14em"
          },
    },
}));

export default function LoginTab(props) {
    
        const classes = useStyles();
        
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
        
      
        return (
            <Paper className={classes.padding} justify="center" alignItems="center" style={{ width: matchesSM ? "100%" : '30%' }}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Usuario" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Contraseña" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between" style={{ marginTop: '2em' }}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Recordarme" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Olvidaste la contraseña? ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '3em' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Ingresar</Button>
                    </Grid>
                    <Grid item container  style={{ marginTop: '2em' }}>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Registrarme</Button>
                        </Grid>
                </div>
            </Paper>
        );
    }


