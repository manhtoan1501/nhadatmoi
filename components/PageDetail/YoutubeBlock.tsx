import React, {FunctionComponent} from 'react';
import UrlParse from 'url-parse';

interface VideoIntroProps {
  videoLink: string
}
const YoutubeBlock: FunctionComponent<VideoIntroProps> = (props: VideoIntroProps) => {
  let videoLink = props.videoLink;
  let videoPath = '';
  if (videoLink.indexOf('youtube.com') !== -1) {
    let videoObject = UrlParse(videoLink, true);
    if (videoObject && videoObject.query && videoObject.query.q) {
      videoPath = '/' + videoObject.query.q;
    }
    if (videoObject && videoObject.query && videoObject.query.v) {
      videoPath = '/' + videoObject.query.v;
    }
  }
  if (videoLink.indexOf('youtu.be') !== -1) {
    let videoObject = UrlParse(videoLink, true);
    if (videoObject && videoObject.pathname) {
      videoPath = videoObject.pathname;
    }
  }
  return (
    <div className="project-info u-margin-top-medium">
      <h3 className="project-info-title text-active u-margin-bottom-small">Video</h3>
      <div className="project-info__video">
        <iframe
          style={{ width: "100%" }}
          height="720"
          src={"https://www.youtube.com/embed" + videoPath}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
      </div>
    </div>
  );
};

export default YoutubeBlock;
