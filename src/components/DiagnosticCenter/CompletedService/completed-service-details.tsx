import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Grid, Typography, Rating, Stack, Button, IconButton } from "@mui/material";
import { API } from "API Handler/api";
import { DC_Test, Taker } from "Classes/entity-class";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CompletedServiceDetails({ dc_test_info }: { dc_test_info: DC_Test }) {
  const navigate = useNavigate();
  useEffect(() => {
    const id = (JSON.parse(localStorage.getItem("Taker") || "") as Taker).id;
    console.log("idd: ", id);
  }, []);


function get_Date(strDate:string) {
    var date = new Date(strDate);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var str = day + "-" + month + "-" + year;
    return str;
  }

  return (

    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "80px", height: "100%" }}
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
          spacing={5}
        >
          
          <Grid item>

            <Typography sx={{ color: "", fontWeight: "bold" }} >Test Request ID : {dc_test_info.id}</Typography>

          </Grid>
          
          <Grid item >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: "10px", height: "100%" }}
              spacing={7}
            >
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                  Patient Name
                </Typography>
                <Typography>
                  {dc_test_info.patient?.person?.firstName + " " + dc_test_info.patient?.person?.lastName}
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                  Patient's Location
                </Typography>
                <Typography>
                  {dc_test_info.location}
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>
                  Date
                </Typography>
                <Typography>
                  {/* {String(dc_test_info.date)} */}
                  {get_Date(dc_test_info.date?.toString() as string)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "10px", height: "100%" }}
                spacing={5}
              >
                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                  Test Name
                  </Typography>
                  <Typography>
                  {dc_test_info.dcTestList?.test?.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                  DC Name
                  </Typography>
                  <Typography>
                  {dc_test_info.dcTestList?.dc?.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}>
                  DC Location
                  </Typography>
                  <Typography>
                  {dc_test_info.dcTestList?.dc?.location}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography></Typography>
                </Grid>
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
                  <Typography sx={{ fontWeight: "bold" }}></Typography>
                </Grid>
                <Grid item>
                  <Typography></Typography>
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
                {/* <Grid item>
                  <Typography sx={{ fontWeight: "bold" }}></Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button onClick={handleComplete} variant="contained" component="label">
                      Collection Complete
                    </Button>
                  </Stack>

                </Grid> */}
                <Grid item>
                  <Grid item>
                    <Typography></Typography>

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
