import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  // extracting dynaimc params values
  const newsId = router.query.newsId;

  console.log(router.query.newsId);

  return <div>DetailPage</div>;
};

export default DetailPage;
