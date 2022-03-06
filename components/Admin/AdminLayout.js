import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0"
import { useTranslation } from "next-i18next";
import Layout from "../Layout";
import Hero from "../Hero";
import Spinner from "../Spinner";

const AdminLayout = ({ title, children }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading && !user)
      router.replace("/");
  }, [user, isLoading]);

  return (
    <Layout
      hero={
        <Hero
          title={title}
          subcomponent={
            <div className="w-full text-center mt-5">
              <Link href="/admin">
                <a className="link">
                  {t("Return to admin panel")}
                </a>
              </Link>
            </div>
          }
        />
      }
    >
      <div className="flex flex-col mb-10">
        {error && <p>{error}</p>}
        {
          isLoading
            ? <Spinner />
            : user && children
        }
      </div>
    </Layout>
  );
}

export default AdminLayout;
