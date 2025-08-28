import AppleAlert from "./Alert/AppleAlert";
import IpadPro from "./IpadPro/IpadPro";
import MackBok from "./Mac/MackBok";
import IphonePro from "./IphonePro/IphonePro";
import Iphone11 from "./Iphone11/Iphone11";
import Tv_Watch from "./Tv_Watch/Tv_Watch";
import AppleSpider from "./AppleSpider/AppleSpider";
import YouTubVedio from "./YouTubVedio/YouTubVedio"

const Main = () => {
  return (
    <>
      <AppleAlert />
      <IpadPro />
      <MackBok />
      <IphonePro />
      <Iphone11 />
      <Tv_Watch />
      <AppleSpider />
      {/* <YouTubVedio/> */}
    </>
  );
};

export default Main;
