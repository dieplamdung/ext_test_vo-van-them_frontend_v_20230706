import React, { useEffect, useState } from "react";
import "./style.scss";
import Banner from "./components/Banner";
import ListChallenge, { ItemChallenge } from "./components/ListChallenge";
import { DATA_LIST_CHALLENGE } from "utils/constant";

export default function Challenge() {
  const [bannerSelect, setBannerSelect] = useState<string>("");

  const [dataListChallenge, setDataListChallenge] = useState<ItemChallenge[]>(
    []
  );

  const handleSelectBanner = (id: string) => {
    if (id === bannerSelect) {
      setBannerSelect("");
      return;
    }
    setBannerSelect(id);
  };


  useEffect(() => {
    const handleReturnListChallenge = (isFullData = false) => {
      const newDataListChallenge: ItemChallenge[] = [];
      if (isFullData) {
        DATA_LIST_CHALLENGE.map((item) => {
          newDataListChallenge.push(...item.data);
          return null;
        });
        setDataListChallenge(newDataListChallenge);
        return;
      }
      newDataListChallenge.push(
        ...(DATA_LIST_CHALLENGE.find((item) => item.id === bannerSelect)
          ?.data || [])
      );
      setDataListChallenge(newDataListChallenge);
    };

    if (!bannerSelect) {
      handleReturnListChallenge(true);
      return;
    }
    handleReturnListChallenge();
  }, [bannerSelect]);

  return (
    <div className="container">
      <div className="container-content wrapper-content-challenge-page">
        <Banner
          bannerSelect={bannerSelect}
          onSelectBanner={handleSelectBanner}
        />
        <ListChallenge data={dataListChallenge} bannerSelect={bannerSelect} />
      </div>
    </div>
  );
}
