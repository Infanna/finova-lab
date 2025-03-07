import ContentCard from "../../components/ContentCard/ContentCard";
import { DailyUpdateMenu } from "../../components/DailyUpdateMenu/DailyUpdateMenu";
import Rating from "../../components/Rating/Rating";
import TransactionMenu from "../../components/TransactionMenu/TransactionMenu";
import { progressTransaction } from "../../constants/MockProgressTransaction";
import TransactionOverview from "../TransactionOverview/TransactionOverview";

export default function MainPage() {
  const contentCardBorder = "p-2";

  return (
    <div className="mt-20 mb-20 min-h-[100vh] grid grid-cols-[2fr_3fr_2fr] bg-[#F3F7F8]">
      <div className={contentCardBorder}>
        <TransactionOverview
          transactionBranch={progressTransaction}
          transactionWork={progressTransaction}
          drawer={{ total: 40000, remain: 10000 }}
        />
      </div>
      <div className={contentCardBorder}>
        <ContentCard
          row={1}
          contentList={[
            {
              title: "เมนูธุรกรรม",
              content: <TransactionMenu></TransactionMenu>,
            },
          ]}
        ></ContentCard>
        <ContentCard
          row={1}
          contentList={[
            {
              title: "รายการที่อัพเดท",
              content: <DailyUpdateMenu />,
            },
          ]}
        ></ContentCard>
      </div>
      <div className={contentCardBorder}>
        <ContentCard
          row={1}
          contentList={[
            {
              title: "คะแนนความพึงพอใจ",
              content: <Rating></Rating>,
            },
          ]}
        ></ContentCard>
      </div>
    </div>
  );
}
