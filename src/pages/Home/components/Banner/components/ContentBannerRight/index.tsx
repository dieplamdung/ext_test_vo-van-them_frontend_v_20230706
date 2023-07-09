import React from "react";
import "./style.scss";

import { DATA_CHART } from "utils/constant";
import Chart from "components/Chart";

export default function ContentBannerRight() {

  return (
    <div className="wrapper-content-banner-right">
      <Chart data={DATA_CHART} />
    </div>
  );
}
