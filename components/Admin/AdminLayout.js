import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0"
import Layout from "../Layout";
import Hero from "../Hero";
import Spinner from "../Spinner";

const Wrapper = ({ title, error, children }) => (
  <Layout hero={
    <Hero title={title} />}
  >
    <div className="flex flex-col mb-10">
      {error && <p>{error}</p>}
      {children}
    </div>
  </Layout>
);

const AdminLayout = ({ title, children }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user)
      router.replace("/");
  }, [user, isLoading]);

  if (isLoading)
    return (
      <Wrapper {...{ title, error }}>
        <Spinner />
      </Wrapper>
    );

  return (
    <Wrapper {...{ title, error }}>
      {user && children}
    </Wrapper>
  );
}

export default AdminLayout;
