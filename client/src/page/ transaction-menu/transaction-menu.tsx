import Button from "../../component/Button";
import "./transaction-menu.css";
import icon1 from "../../assets/icon1.png";

const TransactionMenu = () => {
  const fn = () => {
    console.log("click");
  };

  return (
    <div className="container mx-auto h-screen bg-yellow-200">
      <div className="grid h-80 grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="layout-button row-span-2">
          <Button label="ฝาก" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button row-span-2">
          <Button label="ถอน" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button">
          <Button label="โอน" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button">
          <Button label="จ่ายบิล" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button">
          <Button label="เช็คธนาคาร(MC/GC/Draft)" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button">
          <Button label="ปิดบัญชี" onClick={fn} icon={icon1}></Button>
        </div>
        <div className="layout-button">
          <Button label="บริหารเงินสด" onClick={fn} icon={icon1}></Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionMenu;
