import React, {FunctionComponent, useEffect} from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import StarIcon from "@material-ui/icons/Star";
import Validator from "../../modules/validator";
import Button from "@material-ui/core/Button";
import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';
import {apolloClient} from "../../utils";
import {ADD_AD_SELL_LEASE_COMMENT} from "../../graphql/ad_sell_leases/mutation";
import {GET_COMMENT_BY_AD_SELL_LEASE_ID} from "../../graphql/comment/queries";
import CommentItem from "./CommentItem";

interface CommentProps {
  dataObject: AdSellLeaseItem,
  type: string
}

interface CommentDataProps {
  node: {
    id: string
    content: string
    media: string
    created_at: string
    user: {
      first_name: string
      last_name: string
      avatar: string
    }
  }
}

const CommentCompontent: FunctionComponent<CommentProps> = (props: CommentProps) => {

  const [dataComment, setDataComment] = React.useState<CommentDataProps[]>([]);

  useEffect(() => {
    let dataFilter = {
      ad_sell_lease_id: props.dataObject.id
    };
    let valueString = JSON.stringify(dataFilter);
    valueString = valueString.split('"').join("'");
    apolloClient.query({query: GET_COMMENT_BY_AD_SELL_LEASE_ID, variables: {
        "page": 1,
        "limit": 10,
        "filter": valueString
      }}).then(response => {
      if (response.data && response.data.adSellLeaseComments && response.data.adSellLeaseComments.edges) {
        setDataComment(response.data.adSellLeaseComments.edges);
      }
    });
  }, []);

  const handleAddComment = () => {
    if (commentValue && !Validator.isBlank(commentValue)) {
      apolloClient.mutate({mutation: ADD_AD_SELL_LEASE_COMMENT, variables: {
          "input": {
            "ad_sell_lease_id": props.dataObject.id,
            "content": commentValue
          }
        }}).then((response: any) => {
        setCommentValue("");
        window.location.reload(false);
      });
    }
  };
  const onChangeTextarea = (event: any) => {
    setCommentValue(event.target.value);
  };

  let [commentValue, setCommentValue] = React.useState<string>('');
  return (
    <div className="project-info u-margin-content-medium u-margin-top-medium">
      <h3 className="project-info-title text-active u-margin-bottom-medium u-margin-top-medium">Ý kiến của bạn</h3>
      <form className="comment">
        <TextareaAutosize
          aria-label="minimum height"
          placeholder="Nhập ý kiến tại đây"
          className="comment__textarea"
          onChange={e => onChangeTextarea(e)}
          value={commentValue}
        />
        <div className={'comment__button__block'}>
          <Button className="comment__button" variant="outlined" onClick={() => handleAddComment()}>GỬI BÌNH LUẬN
          </Button>
        </div>
      </form>
      {
        dataComment && dataComment.length > 0 &&
        <CommentItem dataComment={dataComment}/>
      }
    </div>
  );
};

export default CommentCompontent;
