import React from "react";
import Grid from "./Grid";

import Box from '../Box';

export default {
  title: "Data Display/Grid",
  component: Grid,
};

export const DefaultGrid = () => {
  return (
    <>
      <Grid gridTemplateColumn="200px repeat(auto-fill, 100px) 300px">
        <Grid.Item gridColumnStart={2} gridColumnEnd={-1}>
          <Box>
            Hello
          </Box>
        </Grid.Item>
      </Grid>
    </>
  );
};
