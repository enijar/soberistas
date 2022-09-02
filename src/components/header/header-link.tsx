import React from "react";
import {
  HeaderLinkHeader,
  HeaderLinkList,
  HeaderLinkListInner,
  HeaderLinkWrapper,
} from "@/components/header/header.styles";

type Props = {
  children: React.ReactNode;
  list?: () => React.ReactNode;
};

export default function HeaderLink({ children, list }: Props) {
  return (
    <HeaderLinkWrapper hasList={list !== undefined}>
      <HeaderLinkHeader>{children}</HeaderLinkHeader>
      {list && (
        <HeaderLinkList>
          <HeaderLinkListInner>{list()}</HeaderLinkListInner>
        </HeaderLinkList>
      )}
    </HeaderLinkWrapper>
  );
}
