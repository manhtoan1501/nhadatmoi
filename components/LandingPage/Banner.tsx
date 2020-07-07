import React from "react";

import Grid from "@material-ui/core/Grid";

const Banner = () =>{
    return (
        <div className={"wraper-banner"}>
            <div className={"wraper-banner__content"}>
                <p className={"wraper-banner__content__title"}>
                    Sàn thương mại điện tử Bất động sản đầu tiên tại Việt Nam
                </p>

                <p className={"wraper-banner__content__slogan"}>
                  Xây dựng niềm tin giữa người mua và người bán bằng giao dịch mới <br/>(Tiên phong dẫn đầu công nghệ Bất động sản)
                </p>
            </div>
        </div>
    )
};

export default Banner;
