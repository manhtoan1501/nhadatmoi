import React, {FunctionComponent} from "react";

interface CategoryContentProp {
  description?: string|null;
}
const CategoryContent: FunctionComponent<CategoryContentProp> = (props: CategoryContentProp) => {
  return (
    <div className="search_body__description">
      <div className="search_body__description__content u-margin-bottom-medium" dangerouslySetInnerHTML={{__html: (props.description)?props.description:''}} />
    </div>
  );
};

export default CategoryContent
