import React, { useEffect } from "react";
import * as S from "./style.js";
import { getBannerRequest } from "../../api/request.js";

export default function Home() {
  useEffect(() => {
    console.log("1111");
    getBannerRequest()
      .then(res => {console.log("-res-",res)})
      .catch(err => {
        console.error(err);
      });
  }, []);
  return <S.HomeContainer>我是首页1</S.HomeContainer>;
}
