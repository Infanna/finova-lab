import ContentCard from "../../component/content-card/ContentCard";
import TransactionMenu from "../../components/TransactionMenu/TransactionMenu";
import TransactionOverview from "../TransactionOverview/TransactionOverview";
export default function MainPage() {
  const contentCardBorder =
    "p-2 bg-[#F3F7F8] rounded-sm border-2 border-red-500";
  return (
    <div>
      <div className={`h-[2em] ${contentCardBorder}`}>nav-bar</div>
      <div className={`h-[2.5em] ${contentCardBorder}`}>
        สวัสดีครับคุณธนชาติ
      </div>
      <div className="grid grid-cols-[2fr_3fr_2fr] bg-[#F3F7F8] h-[100vh]">
        <div className={contentCardBorder}>
          <TransactionOverview />
        </div>
        <ContentCard
          row={1}
          contentList={[
            {
              title: "เมนูธุรกรรม",
              content: <TransactionMenu></TransactionMenu>,
            },
          ]}
        ></ContentCard>
        <div className={contentCardBorder}>รายการอื่นๆ</div>
      </div>
      <div className={contentCardBorder}>Footer</div>
    </div>
  );
}
