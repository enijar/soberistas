import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (token) {
        console.log(token);
        return true;
      }
      return false;
    },
  },
});

// @todo add full list of routes that should be authenticated
export const config = {
  matcher: [
    "/about-us",
    "/media",
    "/news/lifestyle",
    "/news/mind-and-body",
    "/news/diet-and-nutrition",
    "/book-club",
    "/ask-the-doctor",
    "/booze-news",
    "/discount-club",
    "/personal-stories",
    "/blogs",
    "/chat-room",
    "/forum-discussions",
    "/forum-discussions/:path*",
    "/members",
    "/member-of-the-month",
    "/gallery",
    "/video",
    "/webinars",
  ],
};
