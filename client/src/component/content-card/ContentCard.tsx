import { CardRow } from "./interfaces/content-card.interface";

export default function ContentCard({ row }: CardRow) {
  const cardStyle = `grid grid-rows-${row} gap-${row} bg-gray-100 pt-5 mt-1 `;
  const rowItems = new Array(row)
    .fill(Object.keys(Array(row)), 0, row)
    .map((_row, index) => (
      <div className={cardStyle} key={index}>
        {index}
      </div>
    ));
  return <>{rowItems}</>;
}