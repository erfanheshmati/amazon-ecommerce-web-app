import { getTranslations } from "next-intl/server";

export default async function LoadingPage() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center gap-1">
        {t("Loading.Loading")}
        <div className="flex items-center mb-4">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    </div>
  );
}
