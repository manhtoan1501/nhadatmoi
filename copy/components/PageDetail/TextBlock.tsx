import React, {FunctionComponent} from "react";
import StringProcess from '../../modules/stringProcess';

interface TextBlockProps {
  content: string,
  title: string,
  type: string
}

const TextBlock: FunctionComponent<TextBlockProps> = (props: TextBlockProps) =>
{
  let domTitle = (<></>);
  if (props.type === "h1") {
    domTitle = (<h1 className="project-info-title text-active u-margin-bottom-small">{props.title}</h1>);
  }
  if (props.type === "h2") {
    domTitle = (<h2 className="project-info-title text-active u-margin-bottom-small">{props.title}</h2>);
  }
  if (props.type === "h3") {
    domTitle = (<h2 className="project-info-title text-active u-margin-bottom-small">{props.title}</h2>);
  }

  const freshText = (input: string) => {
    input = StringProcess.stripProperties(input, ['href', 'src', 'rel']);
    input = StringProcess.stripTags(input, '<a><br/><br><img><p><h1><h2><h3><h4><h5><u><img><video><audio><li><ul><table><tr><td><sup><sub>');
    input = input.replace(/https:\/\/nhadatmoi.net\/data/g, 'https://static.nhadatmoi.net/data');
    input = input.replace(/&nbsp;/g, ' ');
    return input;
  };

  let content = freshText(String(props.content));
  return (
      <div>
          {domTitle}
          <div className="project-info__description u-margin-bottom-medium" dangerouslySetInnerHTML={{__html: content}} />
      </div>
  );
};
export default TextBlock;
