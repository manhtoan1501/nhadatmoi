import React, {FunctionComponent} from 'react';
import Link from "next/link";

interface BreadcrumbsProps {
  dataBreadcrumbs: BreadcrumbsItem[]
}
interface BreadcrumbsItem {
  href: string
  href_as: string
  name: string
}
const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  return (
    <div className={"breadcrumbs"}>
      <div className={"breadcrumbs__item"}>
        <Link href={'/'} as={'/'}>{'Trang chủ'}</Link>
      </div>
      {
        props.dataBreadcrumbs.map((itemBreadcrumbs: BreadcrumbsItem, index: number) => {
          return (
            <div className={"breadcrumbs__item"} key={"breadcrumbs_" + index}>
              {" / "}
              <Link href={itemBreadcrumbs.href} as={itemBreadcrumbs.href_as}><a>{itemBreadcrumbs.name}</a></Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Breadcrumbs;
