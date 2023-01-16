import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  // extracting dynaimc params values
  router.query.newsId;

  return <div>DetailPage</div>;
};

export default DetailPage;
