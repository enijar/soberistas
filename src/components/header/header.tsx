import Link from "next/link";
import {
  HeaderAction,
  HeaderActionDivider,
  HeaderActions,
  HeaderActionsWrapper,
  HeaderContainer,
  HeaderWrapper,
} from "@/components/header/header.styles";
import UserIcon from "@/components/icons/user-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import YoutubeIcon from "@/components/icons/youtube-icon";
import SearchIcon from "@/components/icons/search-icon";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderActionsWrapper>
        <HeaderContainer>
          <HeaderActions>
            <HeaderAction>
              <UserIcon />
              <span>&nbsp;&nbsp;</span>
              <span>James</span>
            </HeaderAction>
            <HeaderAction />
            <HeaderAction>
              <Link href="/">Profile</Link>
            </HeaderAction>
            <HeaderActionDivider />
            <HeaderAction>
              <Link href="/">Log out</Link>
            </HeaderAction>
            <HeaderAction color="orange">
              <a
                href="https://twitter.com/soberistas"
                target="_blank"
                rel="nofollow"
              >
                <TwitterIcon />
              </a>
            </HeaderAction>
            <HeaderAction color="orange">
              <a
                href="https://facebook.com/Soberistas"
                target="_blank"
                rel="nofollow"
              >
                <FacebookIcon />
              </a>
            </HeaderAction>
            <HeaderAction color="orange">
              <a
                href="https://instagram.com/soberistas"
                target="_blank"
                rel="nofollow"
              >
                <InstagramIcon />
              </a>
            </HeaderAction>
            <HeaderAction color="orange">
              <a
                href="https://youtube.com/soberistas"
                target="_blank"
                rel="nofollow"
              >
                <YoutubeIcon />
              </a>
            </HeaderAction>
            <HeaderAction>
              <SearchIcon />
            </HeaderAction>
          </HeaderActions>
        </HeaderContainer>
      </HeaderActionsWrapper>
    </HeaderWrapper>
  );
}
