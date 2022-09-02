import React from "react";
import {
  HeaderLinkHeader,
  HeaderLinkListInner,
  HeaderLinkList,
  HeaderLinkWrapper,
} from "@/components/header/header.styles";

type Props = {
  children: React.ReactNode;
  list?: () => React.ReactNode;
};

export default function HeaderLink({ children, list }: Props) {
  const [listOpen, setListOpen] = React.useState(false);

  return (
    <HeaderLinkWrapper
      onPointerOver={listOpen ? undefined : () => setListOpen(true)}
      onPointerOut={!listOpen ? undefined : () => setListOpen(false)}
    >
      <HeaderLinkHeader>{children}</HeaderLinkHeader>
      {list && (
        <HeaderLinkList
          style={{ display: !listOpen ? "none" : undefined }}
          onPointerOver={() => setListOpen(true)}
          onPointerOut={() => setListOpen(false)}
        >
          <HeaderLinkListInner>
            {list()}
          </HeaderLinkListInner>
        </HeaderLinkList>
      )}
    </HeaderLinkWrapper>
  );
}
