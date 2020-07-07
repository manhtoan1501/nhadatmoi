import React, {FunctionComponent, useState} from "react";
// @ts-ignore
import FsLightbox from "fslightbox-react";

// Material
import Grid from "@material-ui/core/Grid";
import UrlProcess from "../../modules/urlProcess";

interface ProjectMainProps {
  images: ImageProp[],
  imageType: string
}

interface ImageProp {
  alt_text: string
  description: string
  title: string
  src: string
}

const AlbumImageBlock: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) => {
  const [lightboxController, setLightboxController] = useState({
    slide: 1
  });

  const [toggler, setToggler] = useState(false);

  function openLightboxOnSlide(number: number) {
    setToggler(!toggler);
    setLightboxController({
      slide: number
    });
  }
  let imagePrepareSource = props.images.map((imageObject: ImageProp, index) => {
    return (
      <img
        src={UrlProcess.processImageUrl(imageObject.src, props.imageType)}
      />
    )
  });
  // @ts-ignore
  return (
    <div className="project-info u-margin-top-medium">
      <h3 className="project-info-title text-active u-margin-bottom-small">Thư viện ảnh</h3>

      <Grid container spacing={1}>
        {
          props.images.map((imageObject: ImageProp, index) => {
            return (
              <Grid item md={3} sm={6} key={"album_image_key_" + index}>
                <img
                  src={UrlProcess.processImageUrl(imageObject.src, props.imageType)}
                  className="img-lightbox"
                  onClick={() => openLightboxOnSlide(index + 1)}
                />
              </Grid>
            );
          })
        }
      </Grid>

      <FsLightbox
        toggler={toggler}
        customSources={imagePrepareSource}
        slide={lightboxController.slide}
      />
    </div>
  );
};

export default AlbumImageBlock;
