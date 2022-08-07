import { Grid, Typography, Rating, Stack } from "@mui/material";

export function AppointmentDetails() {
    return(
  <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ padding: "10px", height: "100%" }}
    spacing={2}
  >
    {/* Picture */}
    <Grid item>
      <img src={require("./images/me.PNG")} height="150px" />
    </Grid>
    {/* //1st Column */}
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold" }}>Saikat Ghatak</Typography>
          </Grid>
          <Grid item>
            <Typography></Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold" }}>Main Problem</Typography>
          </Grid>
          <Grid item>
            <Typography>Injury and Violence</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/*  //2nd Column */}
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "10px", height: "100%" }}
        spacing={2}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold" }}>Physical Info</Typography>
          </Grid>
          <Grid item>
            <Typography></Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "10px", height: "100%" }}
          spacing={2}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>Age</Typography>
              </Grid>
              <Grid item>
                <Typography>25 years</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={2}
            >
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>Weight</Typography>
              </Grid>
              <Grid item>
              <Grid item>
                <Typography>70 kg</Typography>
              </Grid>
              <Stack spacing={1}>
      
        {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
      </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    {/*    //3rd column */}
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "10px", height: "100%" }}
        spacing={2}
      >
        {/* <Grid item>
          <Typography>Fee:</Typography>
        </Grid>
        <Grid item>
          <Typography>500</Typography>
        </Grid> */}
      </Grid>
    </Grid>
  </Grid>
    );
}