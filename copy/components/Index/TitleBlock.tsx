import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import Link from 'next/link';

interface TitleBlockProps {
  title: string;
  type: "h1" | "h2" | "h3";
  description?: string;
  path: string;
  href?: string
}

const TitleBlock: FunctionComponent<TitleBlockProps> = (props: TitleBlockProps) => {
  let domTitle = (<></>);
  if (props.type === "h1") {
    domTitle = (<h1 className="title_block__big_title">{props.title}</h1>);
  }
  if (props.type === "h2") {
    domTitle = (<h2 className="title_block__big_title">{props.title}</h2>);
  }
  if (props.type === "h3") {
    domTitle = (<h2 className="title_block__big_title">{props.title}</h2>);
  }
  let domBlockTitle = (<></>);
  if (props.path.indexOf('https://') !== -1) {
    domBlockTitle = (
      <a href={props.path}>
        {domTitle}
      </a>
    );
  } else if (props.path === '') {
    domBlockTitle = domTitle;
  } else {
    domBlockTitle = (
      <Link href={props.href?props.href:props.path} as={String(props.path)}>
        <a>
          {domTitle}
        </a>
      </Link>
    );
  }
  return (
    <Grid container spacing={0} item xs={12} direction="row"
          alignItems="center" className="title_block">
      {domBlockTitle}
      <div className="title_block__big_description">{props.description}</div>
    </Grid>
  );
};

export default TitleBlock;
