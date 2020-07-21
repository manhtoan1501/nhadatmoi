import React, {FunctionComponent} from 'react';
// Material- UI
import Grid from "@material-ui/core/Grid";
import stringProcess from "../../modules/stringProcess";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Moment from 'react-moment';
interface dataGridProps {
  slug: string,
  link: string,
  title: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  featured_image_url: string,
  date: string
}

interface GridItemProps {
  grid: {
    lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  dataGird: dataGridProps;
  className: string;
}

const convertTitle = (input: string) => {
  return input.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};
const GridItemNews: FunctionComponent<GridItemProps> = (props: GridItemProps) => {
  let description = stringProcess.stripTags(props.dataGird.excerpt.rendered, '');
  return (
    <Grid
      item
      xl={props.grid.xl}
      lg={props.grid.lg}
      md={props.grid.md}
      sm={props.grid.sm}
      xs={props.grid.xs}
      className={props.className}
    >
      <a href={props.dataGird.link}>
        <Grid container direction={props.grid ? "column" : "row"} spacing={0}
              className="grid__list__item u-margin-bottom-small">
          <Grid item xs={12}>
            <div className="grid__list__item__img background block_float">
              {
                props.dataGird.featured_image_url && props.dataGird.featured_image_url !== 'null' && props.dataGird.featured_image_url !== '' &&
                <img src={props.dataGird.featured_image_url} alt={String(props.dataGird.title)}/>
              }
              {
                (!props.dataGird.featured_image_url || props.dataGird.featured_image_url === 'null' || props.dataGird.featured_image_url === '') &&
                <img src="https://static.nhadatmoi.net/default/nhadatmoi_default.svg" alt="Image Default"/>
              }
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid className="grid__list__item__content">
              <div className="grid__list__item__content__title u-flexSpaceBetween">
                <div className="grid__list__item__content__title__text full_width">
                  <p>{convertTitle(props.dataGird.title.rendered)}</p>
                </div>
              </div>
              {
                props.dataGird.date && props.dataGird.date != "0" &&
                <b><div className="grid__list__item__content__description">
                  <CalendarIcon/>
                  <Moment format="HH:mm - DD/MM/YYYY">
                  {props.dataGird.date}
                </Moment>
                </div></b>
              }
              {
                description && description !== '' && description !== null &&
                <div className="grid__list__item__content__description full_width">
                  {stringProcess.truncateString(description, 80, '...')}
                </div>
              }

            </Grid>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
};

export default GridItemNews;
