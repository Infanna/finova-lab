/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CardRow {
  row: number;
  contentList: {
    title: string;
    content: React.ReactNode;
  }[];
}
