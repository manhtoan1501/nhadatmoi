import React, {FunctionComponent} from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

type PaginationProps = {
  currentPage: number;
  isNextPage: boolean;
  isPrevPage: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const PaginationPage: FunctionComponent<PaginationProps> = (props: PaginationProps) => {
  return (
    <Grid container className="pagination" spacing={0}
      direction="row"
      justify="center">
      <Grid item xs={12} className="pagination__block">
        {
          props.isPrevPage &&
          <Button className="pagination__block__prev" onClick={props.onPrevPage}>
            <svg viewBox="0 0 448 512">
              <path d="M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"/>
            </svg> Trang trước
          </Button>
        }
        {
          props.isNextPage &&
          <Button className="pagination__block__next" onClick={props.onNextPage}>Trang sau <svg viewBox="0 0 448 512">
            <path d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"/>
          </svg></Button>
        }

      </Grid>
    </Grid>
  );
};
export default PaginationPage;

