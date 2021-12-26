import React from "react";
import type { NextPage } from "next";

import Seo from "../../common/Seo";
import workStyles from "../../styles/Work.module.scss";
import Tags from "../../ components/Tags/Tags";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Our iOS, Android &amp; Web Development Work" />
      <div className={workStyles.container}>
        <div className={workStyles.text}>
          <p>Here’s 5% of</p>
          <p>our published work.</p>
          <p>See 100% of our power.</p>
        </div>

        <div>
          <Tags />
        </div>
        <div>work results</div>
      </div>
    </div>
  );
};

export default Home;
