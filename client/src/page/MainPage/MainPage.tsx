import TransactionMenu from "../../components/TransactionMenu/TransactionMenu";
import TransactionOverview from "../TransactionOverview/TransactionOverview";
export default function MainPage() {
  return (
    <div>
      <div className="h-[2em]  p-2 bg-[#F3F7F8] rounded-sm border-2 border-red-500">
        nav-bar
      </div>
      <div className="h-[2.5em] p-2 bg-[#F3F7F8] rounded-sm border-2 border-red-500">
        สวัสดีครับคุณธนชาติ
      </div>
      <div className="grid grid-cols-[2fr_3fr_2fr] bg-[#F3F7F8] h-[100vh]">
        <div className="rounded-sm border-2 border-red-500">
          <TransactionOverview />
        </div>
        <div className="rounded-sm border-2 border-red-500">
          เมนูทำธุรกรรม <TransactionMenu></TransactionMenu>
        </div>
        <div className="p-2 bg-[#F3F7F8] rounded-sm border-2 border-red-500">
          รายการอื่นๆ
        </div>
      </div>
      <div className="p-2 bg-[#F3F7F8] rounded-sm border-2 border-red-500">
        Footer
      </div>
    </div>
  );
}
