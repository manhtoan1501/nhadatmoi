import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { indexPageStyle } from '../style/IndexPage'
import "../assets/scss/style.scss";

const IndexPage = (props) => {
  const classes = indexPageStyle;

  const renderIcon = () => {
    return (
      <div style={{ position: 'fixed', bottom: 30, right: 30 }}>
        <div>
          <a title="Trò chuyện Facebook" target="_blank" rel="noopener" href="http://m.me/925790224164852?ref=zozovn">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg" alt="btn-facebook" />
          </a>
        </div>
        <div>
          <a title="Chat với chúng tôi qua Zalo" target="_blank" rel="noopener" href="https://zalo.me/0377535717">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/zalo.svg" alt="btn-zalo" />
          </a>
        </div>
        <div>
          <a title="Gọi ngay" href="tel:0936062166">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/call.svg" alt="btn-callnow" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderIcon()}
    </div>
  )
};

export default IndexPage;
