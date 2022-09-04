import type { GetServerSideProps, NextPage } from "next";
import { User } from "prisma/prisma-client";
import Header from "@/components/header/header";
import database from "@/services/database";

type Props = {
  title: string;
  users: Partial<User>[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = await database.user.findMany({
    select: {
      email: true,
      password: true,
    },
  });
  return {
    props: {
      title: "Home",
      users,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  return (
    <main>
      <Header />
      <h1>{props.title}</h1>
      <pre>{JSON.stringify(props.users, null, 2)}</pre>
    </main>
  );
};

export default Home;
