import type { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Header from "@/components/header/header";

type Props = {
  title: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: "Me",
    },
  };
};

const Me: NextPage<Props> = (props) => {
  const { data } = useSession();

  return (
    <main>
      <Header />
      <h1>{props.title}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default Me;
