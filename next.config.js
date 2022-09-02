/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  redirects() {
    // @todo make permanent once testing is done
    const permanent = false;
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent,
      },
      {
        source: "/getting_started",
        destination: "/getting-started",
        permanent,
      },
      {
        source: "/news/mind",
        destination: "/news/mind-and-body",
        permanent,
      },
      {
        source: "/news/diet",
        destination: "/news/diet-and-nutrition",
        permanent,
      },
      {
        source: "/book_club",
        destination: "/book-club",
        permanent,
      },
      {
        source: "/ask_the_doctor",
        destination: "/ask-the-doctor",
        permanent,
      },
      {
        source: "/booze_news",
        destination: "/booze-news",
        permanent,
      },
      {
        source: "/discounts",
        destination: "/discount-club",
        permanent,
      },
      {
        source: "/personal_stories",
        destination: "/personal-stories",
        permanent,
      },
      {
        source: "/chat",
        destination: "/chat-room",
        permanent,
      },
      {
        source: "/forum",
        destination: "/forum-discussions",
        permanent,
      },
      {
        source: "/member_of_the_month",
        destination: "/member-of-the-month",
        permanent,
      },
      {
        source: "/useful_contacts",
        destination: "/useful-contacts",
        permanent,
      },
      {
        source: "/cht_guidelines",
        destination: "/chat-guidelines",
        permanent,
      },
      {
        source: "/write_for_us",
        destination: "/write-for-us",
        permanent,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent,
      },
    ];
  },
};

module.exports = nextConfig;
