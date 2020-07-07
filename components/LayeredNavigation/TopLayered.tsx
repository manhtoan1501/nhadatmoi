import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import FilterList from "@material-ui/icons/FilterList";
import {DataLayeredNavigationProps} from '../../interfaces/interface';

interface TopLayeredProps {
  className?: string;
  onOpen: () => void;
  updateLayeredNavigation: (data: DataLayeredNavigationProps) => void;
  dataLayeredNavigation: DataLayeredNavigationProps;
}

interface SortByProps {
  time?: "newest" | "oldest",
  price?: "low_to_high" | "high_to_low",
  view?: "low_to_high" | "high_to_low",
  rate?: "high_to_low"
}

const TopLayered: FunctionComponent<TopLayeredProps> = (props: TopLayeredProps) => {
  const updateLayeredNavigation = (dataObject: SortByProps) => {
    props.dataLayeredNavigation.sort_by = dataObject;
    props.updateLayeredNavigation(props.dataLayeredNavigation);
  };
  const handleFieldChange = (type: string) => {
    // @ts-ignore
    try {
      let newData = JSON.parse(type);
      updateLayeredNavigation(newData);
    } catch (e) {
      updateLayeredNavigation({time: "newest"});
    }
  };

  let dataValue = JSON.stringify(props.dataLayeredNavigation.sort_by);
  return (
    <Grid container className={props.className} direction="row"
          justify="center"
          alignItems="center">
      <Grid item xs={6}>
        <label className="top_layered__select__label">
          Sắp xếp
        </label>
        <div className="top_layered__select__dropdown">
          <svg viewBox="0 0 8 6">
            <g fill="currentColor">
              <polygon className="icon-chevron-down-left"
                       points="4 5.371 7.668 1.606 6.665 .629 4 3.365"/>
              <polygon className="icon-chevron-down-right"
                       points="4 3.365 1.335 .629 1.335 .629 .332 1.606 4 5.371"/>
            </g>
          </svg>
          <select className="" onChange={event => handleFieldChange(event.target.value)} value={dataValue}>
            <option value='{"time":"newest"}'>
              Mới nhất
            </option>
            <option value='{"time":"oldest"}'>
              Cũ nhất
            </option>
            <option value='{"price":"low_to_high"}'>
              Giá tăng dần
            </option>
            <option value='{"price":"high_to_low"}'>
              Giá giảm dần
            </option>
            <option value='{"view":"low_to_high"}'>
              Lượt xem tăng dần
            </option>
            <option value='{"view":"high_to_low"}'>
              Lượt xem giảm dần
            </option>
            <option value='{"rate":"high_to_low"}'>
              Đánh giá cao nhất
            </option>
          </select>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item xs={6}>
        <div className="top_layered__right">
          <div className="top_layered__right__order">
                        <span>
                          Dạng xem
                        </span>
            <button>
              <svg viewBox="0 0 20 20">
                <path fill="currentColor"
                      d="M2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h16V2H2zm3 3h4v4H5V5zm6 0h4v4h-4V5zm-6 6h4v4H5v-4zm6 0h4v4h-4v-4z"/>
              </svg>

            </button>

            <button>
              <svg viewBox="0 0 20 20">
                <path fill="currentColor"
                      d="M2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h16V2H2zm3 3h10v2H5V5zm0 4h10v2H5V9zm0 4h10v2H5v-2z"/>
              </svg>

            </button>
          </div>
        </div>
      </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={6}>
          <div className="top_layered__right">
            <div className="top_layered__right__order" onClick={props.onOpen}>
              <span>
                Bộ lọc
              </span>
              <button>
                <FilterList />
              </button>
            </div>
          </div>
        </Grid>
      </Hidden>

    </Grid>
  );
};
export default TopLayered;
