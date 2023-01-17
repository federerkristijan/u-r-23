import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <div>The News Page</div>
      <ul>
        <li>
          <Link>News 1</Link>
        </li>
        <li>
          <Link>News 2</Link>
        </li>
        <li>
          <Link>News 3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
