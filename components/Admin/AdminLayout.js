import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Layout from "../Layout";
import Hero from "../Hero";
import Spinner from "../Spinner";

const AdminLayout = ({ title, children }) => {
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user && status !== "loading")
      router.replace("/");
  }, [session?.user, router, status]);

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
      <div className="flex flex-col mb-10 w-full px-5">
        {status === "loading"
          ? <Spinner />
          : session?.user && children}
      </div>
    </Layout>
  );
}

export default AdminLayout;
