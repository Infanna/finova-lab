import deposit from "../../assets/deposit.png";
import withdraw from "../../assets/withdraw.png";
import transfer from "../../assets/transfer.png";
import payBill from "../../assets/pay-bill.png";
import checkBank from "../../assets/check-bank.png";
import closeAccount from "../../assets/close-account.png";
import cashManagement from "../../assets/cash-management.png";
import Button from "../Button/Button";
import { NavigateToPage } from "./TransactionMenu.service";

const TransactionMenu: React.FC = () => {
  const navigateToPage = NavigateToPage();

  const buttonInfos = [
    { type: 1, label: "ฝาก", path: "", icon: deposit },
    { type: 1, label: "ถอน", path: "/withdraw", icon: withdraw },
    { type: 2, label: "โอน", path: "", icon: transfer },
    { type: 2, label: "จ่ายบิล", path: "", icon: payBill },
    { type: 2, label: "เช็คธนาคาร\n(MC/GC/Draft)", path: "", icon: checkBank },
    { type: 2, label: "ปิดบัญชี", path: "", icon: closeAccount },
    { type: 2, label: "บริหารเงินสด", path: "", icon: cashManagement },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid h-80 grid-flow-row-dense grid-cols-3 grid-rows-3">
        {buttonInfos.map((buttonInfo, index) => {
          return (
            <div
              className={`p-3 ${buttonInfo.type === 1 ? "row-span-2" : ""}`}
              key={index}
            >
              <Button
                label={buttonInfo.label}
                onClick={() => navigateToPage(buttonInfo.path)}
                icon={buttonInfo.icon}
              ></Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionMenu;
