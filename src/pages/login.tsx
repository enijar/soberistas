import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import Header from "@/components/header/header";

type Props = {
  title: string;
  csrfToken?: string;
  callbackUrl?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      title: "Login",
      csrfToken: await getCsrfToken(),
      callbackUrl: (context.query?.callbackUrl ?? "/") as string,
    },
  };
};

const Login: NextPage<Props> = (props) => {
  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = form.querySelector(
          'input[name="email"]'
        ) as HTMLInputElement;
        const password = form.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement;
        const res = await signIn("credentials", {
          email: email.value,
          password: password.value,
          redirect: true,
          csrfToken: props.csrfToken,
          callbackUrl: "",
        });
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    },
    [props.csrfToken]
  );

  return (
    <main>
      <Header />
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
        <label>
          Username
          <input name="email" type="text" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
