import icon1 from "../assets/icon1.png";
import Button from "./Button";

const TransactionMenu = () => {
  const fn = () => {
    console.log("click");
  };

  return (
    <div className="container mx-auto">
      <div className="grid h-80 grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="p-3 row-span-2">
          <Button label="ฝาก" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="p-3 row-span-2">
          <Button label="ถอน" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="p-3">
          <Button label="โอน" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="p-3">
          <Button label="จ่ายบิล" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="p-3">
          <Button
            label={"เช็คธนาคาร\n(MC/GC/Draft)"}
            onClick={fn}
            icon={icon1}
          ></Button>
        </div>
        <div className="p-3">
          <Button label="ปิดบัญชี" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="p-3">
          <Button label="บริหารเงินสด" onClick={fn} icon={icon1}></Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionMenu;
