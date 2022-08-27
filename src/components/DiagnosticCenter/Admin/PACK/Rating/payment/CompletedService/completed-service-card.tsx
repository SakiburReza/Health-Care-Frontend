import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import { DC_Test } from "Classes/entity-class";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CompletedServiceDetails } from "./completed-service-details";

export default function CompletedServiceCard({dc_test_info}:{dc_test_info:DC_Test}) {
  const navigate = useNavigate();
  return (
    <Card  
    // onClick={()=>navigate("/selection-confirmed-test")} sx={{ width: "100%"}}
    >

      <CardActionArea>
        <CardContent>
         <CompletedServiceDetails
          dc_test_info = {dc_test_info}
         />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
