import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

interface TitleBlockProps {
  className?: string;
  grid: {
    lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  numberLimit: number;
}

const LoadingPage: FunctionComponent<TitleBlockProps> = (props: TitleBlockProps) => {
  let domLoading = (
    <Grid item xl={props.grid.xl}
          lg={props.grid.lg}
          md={props.grid.md}
          sm={props.grid.sm}
          xs={props.grid.xs} className="grid__list__item u-margin-bottom-small">
      <Skeleton variant="rect" className="grid__list__item__img"/>
      <Box pt={2}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Grid>
  );
  let newDomReact = (<></>);
  for (let i = 0; i < props.numberLimit; i++) {
    newDomReact = (
      <>{newDomReact}
      {domLoading}</>
    );
  }
  return (
    <Grid container direction="row"
          justify="center"
          alignItems="baseline" className="grid__list">
      {newDomReact}
    </Grid>
  );
};

export default LoadingPage;
