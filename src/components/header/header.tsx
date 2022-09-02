import Link from "next/link";
import {
  HeaderAction,
  HeaderActionDivider,
  HeaderActions,
  HeaderActionsWrapper,
  HeaderContainer,
  HeaderLinksInner,
  HeaderLinksList,
  HeaderLinksWrapper,
  HeaderLogo,
  HeaderWrapper,
} from "@/components/header/header.styles";
import UserIcon from "@/components/icons/user-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import YoutubeIcon from "@/components/icons/youtube-icon";
import SearchIcon from "@/components/icons/search-icon";
import IconChevronDown from "@/components/icons/icon-chevron-down";
import HeaderLink from "@/components/header/header-link";

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
      <HeaderLinksWrapper>
        <HeaderContainer>
          <HeaderLinksInner>
            <HeaderLogo>
              <img src="/assets/logo.png" alt="Soberistas" />
              <img
                src="/assets/anniversary-badge.jpg"
                alt="Soberistas 10th year anniversary"
              />
            </HeaderLogo>
            <HeaderLinksList>
              <HeaderLink>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </HeaderLink>
              <HeaderLink
                list={() => {
                  return (
                    <>
                      <HeaderLink>
                        <Link href="/getting-started">
                          <a>Getting Started</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/media">
                          <a>Media</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/testimonials">
                          <a>Testimonials</a>
                        </Link>
                      </HeaderLink>
                    </>
                  );
                }}
              >
                <Link href="/about">
                  <a>
                    <span>About Us</span>
                    <IconChevronDown />
                  </a>
                </Link>
              </HeaderLink>
              <HeaderLink
                list={() => {
                  return (
                    <>
                      <HeaderLink>
                        <Link href="/news/mind">
                          <a>Mind & Body</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/news/diet">
                          <a>Diet & Nutrition</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/book-club">
                          <a>Book Club</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/ask-the-doctor">
                          <a>Ask the Doctor</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/booze-news">
                          <a>Booze News</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/discounts">
                          <a>Discount Club</a>
                        </Link>
                      </HeaderLink>
                    </>
                  );
                }}
              >
                <Link href="/news/lifestyle">
                  <a>
                    <span>Lifestyle</span>
                    <IconChevronDown />
                  </a>
                </Link>
              </HeaderLink>
              <HeaderLink>
                <Link href="/personal-stories">Personal Stories</Link>
              </HeaderLink>
              <HeaderLink
                list={() => {
                  return (
                    <>
                      <HeaderLink>
                        <Link href="/chat">
                          <a>Chat Room</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/forum">
                          <a>Forum Discussions</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/members">
                          <a>Members</a>
                        </Link>
                      </HeaderLink>
                      <HeaderLink>
                        <Link href="/member-of-the-month">
                          <a>Member of the Month</a>
                        </Link>
                      </HeaderLink>
                    </>
                  );
                }}
              >
                <Link href="/blogs">
                  <a>
                    <span>Blogs</span>
                    <IconChevronDown />
                  </a>
                </Link>
              </HeaderLink>
              <HeaderLink>
                <span>Resources</span>
                <IconChevronDown />
              </HeaderLink>
              <HeaderLink>
                <Link href="/contact">Contact Us</Link>
              </HeaderLink>
            </HeaderLinksList>
          </HeaderLinksInner>
        </HeaderContainer>
      </HeaderLinksWrapper>
    </HeaderWrapper>
  );
}
