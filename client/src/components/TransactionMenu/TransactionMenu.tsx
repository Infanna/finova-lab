import deposit from "../../assets/deposit.png";
import withdraw from "../../assets/withdraw.png";
import transfer from "../../assets/transfer.png";
import payBill from "../../assets/pay-bill.png";
import checkBank from "../../assets/check-bank.png";
import closeAccount from "../../assets/close-account.png";
import cashManagement from "../../assets/cash-management.png";
import Button from "../Button/Button";
import { NavigateToPage } from "./TransactionMenu.service";

const TransactionMenu = () => {
  const fn = () => {
    console.log("click");
  };

  return (
    <div className="container mx-auto">
      <div className="grid h-80 grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="p-3 row-span-2">
          <Button label="ฝาก" onClick={fn} icon={deposit}></Button>
        </div>
        <div className="p-3 row-span-2">
          <Button
            label="ถอน"
            onClick={() => NavigateToPage("/withdraw")}
            icon={withdraw}
          ></Button>
        </div>
        <div className="p-3">
          <Button label="โอน" onClick={fn} icon={transfer}></Button>
        </div>
        <div className="p-3">
          <Button label="จ่ายบิล" onClick={fn} icon={payBill}></Button>
        </div>
        <div className="p-3">
          <Button
            label={"เช็คธนาคาร\n(MC/GC/Draft)"}
            onClick={fn}
            icon={checkBank}
          ></Button>
        </div>
        <div className="p-3">
          <Button label="ปิดบัญชี" onClick={fn} icon={closeAccount}></Button>
        </div>
        <div className="p-3">
          <Button
            label="บริหารเงินสด"
            onClick={fn}
            icon={cashManagement}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionMenu;
