import {
  AiFillRedEnvelope,
  AiOutlineCalendar,
  AiOutlineContainer,
  AiOutlineDollarCircle,
  AiOutlineFileDone,
  AiOutlineFileSearch,
} from "react-icons/ai";
import Button from "../Button/Button";

export const DailyUpdateMenu = () => {
  const fn = () => {
    console.log("click");
  };

  return (
    <div className="flex w-full container mx-auto">
      <div className="flex flex-col gap-4 p-2 w-full h-80">
        <Button
          label="รายงานและธุรกรรมประจำวัน"
          onClick={fn}
          iconReact={<AiOutlineFileDone />}
        ></Button>
        <Button
          label="วันเวลาทำการของแต่ละสาขา"
          iconReact={<AiOutlineCalendar />}
          onClick={fn}
        ></Button>
        <Button
          label="อัพเดทรายชื่อสาขาที่ปิดไปแล้ว"
          iconReact={<AiOutlineContainer />}
          onClick={fn}
        ></Button>
      </div>
      <div className="flex flex-col gap-4 p-2 w-full h-80">
        <Button
          label="ตารางค่าธรรมเนียมต่างๆ"
          iconReact={<AiOutlineDollarCircle />}
          onClick={fn}
        ></Button>
        <Button
          label="อัตราแลกเปลี่ยนประจำวัน"
          iconReact={<AiFillRedEnvelope />}
          onClick={fn}
        ></Button>
        <Button
          label="รายงานเบาะแสการทุจริต"
          iconReact={<AiOutlineFileSearch />}
          onClick={fn}
        ></Button>
      </div>
    </div>
  );
};
