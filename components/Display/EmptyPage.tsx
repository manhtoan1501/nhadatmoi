import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";

interface EmptyPageProp {
  title: string;
  description: string;
}

const EmptyPage: FunctionComponent<EmptyPageProp> = (props: EmptyPageProp) => {
  return (
    <Grid container direction="row"
          justify="center"
          alignItems="baseline" className="empty-page">
      <h3 className="empty-page__title">{props.title}</h3>
      <div className="empty-page__description">{props.description}</div>
    </Grid>
  );
};

export default EmptyPage;
