import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const ResumeQuery = gql`
  query Identitas {
    bio {
      name
      email
      tagline
      website
      github
      linkedin
      objective
    }
    positions {
      id
      title
      company
      location
      startDate
      endDate
      years
      months
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
    return <span>Error </span>;
  }

  if (loading) {
    return (
      <header>
        <h1>ibra</h1>
        <h1>loading...</h1>
      </header>
    );
  }
  const { bio, position } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{bio.name}</h1>
        <h1>{bio.tagline}</h1>
      </header>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
