import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RIghtSide";
import SectionLine from "../../components/common/SectionLine";
import {
  storeContent,
  storeImage,
  posContent,
  posImage,
  inventoryContent,
  inventoryImage,
  dMarketingContent,
  dMarketingImage,
} from "../../util/data";

export default function index() {
  return (
    <div id="feature">
      <SectionLine>ບໍລິການຂອງພວກເຮົາ ແລະ ຄຸນລັກສະນະ</SectionLine>
      <LeftSide image={posImage} content={posContent} />
      <RightSide image={storeImage} content={storeContent} /> 
      <LeftSide image={inventoryImage} content={inventoryContent} />
      <RightSide image={dMarketingImage} content={dMarketingContent} />
    </div>
  );
}
