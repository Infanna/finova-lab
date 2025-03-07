import { CardRow } from "./interfaces/content-card.interface";

export default function ContentCard({ row, contentList }: CardRow) {
  const cardStyle = `flex flex-col pt-1 m-2 mt-1 max-w-[190%]`;
  const rowItems = new Array(row)
    .fill(Object.keys(Array(row)), 0, row)
    .map((_row, index) => (
      <div key={index + "-wrapper"}>
        <span key={index + "-title"}>{contentList[index].title}</span>
        <div key={index}>{contentList[index].content}</div>
      </div>
    ));
  return (
    <>
      <div className={cardStyle}>{rowItems}</div>
    </>
  );
}
