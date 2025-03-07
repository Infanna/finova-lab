import ContentCard from "../../component/content-card/ContentCard";
import TransactionMenu from "../../components/TransactionMenu/TransactionMenu";
import TransactionOverview from "../TransactionOverview/TransactionOverview";
export default function MainPage() {
  const contentCardBorder =
    "p-2";
  return (
    <div className="mt-20 mb-20 min-h-[100vh] grid grid-cols-[2fr_3fr_2fr] bg-[#F3F7F8]">
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
  );
}
