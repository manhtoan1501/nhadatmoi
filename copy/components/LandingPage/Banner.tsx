import React from "react";

import Grid from "@material-ui/core/Grid";

const Banner = () =>{
    return (
        <div className={"wraper-banner"}>
            <div className={"wraper-banner__content"}>
                <p className={"wraper-banner__content__title"}>
                    Nội thất Dodo sự lựa chọn tin cậy của bạn
                </p>

                <p className={"wraper-banner__content__slogan"}>
                  Xây dựng niềm tin giữa người mua và người bán bằng giao dịch mới <br/>(Tiên phong dẫn đầu công nghệ Bất động sản)
                </p>
            </div>
        </div>
    )
};

export default Banner;