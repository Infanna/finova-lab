import React from "react";

interface ITransactionProps {
  title: string;
  transactions: ITransaction[];
}

interface ITransaction {
  name: string;
  quantity: number;
  amount: number;
}

function Transactions({ transactions, title = "My Work" }: ITransactionProps) {
  const summary = transactions.reduce(
    (acc, v) => ({
      name: acc.name,
      amount: acc.amount + v.amount,
      quantity: acc.quantity + v.quantity,
    }),
    { name: "รวม", quantity: 0, amount: 0 },
  );

  const formatter = Intl.NumberFormat(undefined, {});

  return (
    <div className="bg-white w-full h-full grid grid-cols-3">
      <div className="col-span-3 font-bold">{title}</div>
      <div className="justify-self-start font-bold">ธรุกรรม</div>
      <div className="justify-self-center font-bold">รายการ</div>
      <div className="justify-self-end font-bold">จำนวนเงิน</div>
      <div className="col-span-3 grid grid-cols-2">
        {transactions.map(({ name, quantity, amount }) => {
          return (
            <React.Fragment key={`${title}-${name}`}>
              <div className="flex place-content-between">
                <span>{name}</span>
                <span>{quantity}</span>
              </div>
              <div className="justify-self-end">{formatter.format(amount)}</div>
            </React.Fragment>
          );
        })}

        <div className="flex place-content-between font-bold">
          <span className="">{summary.name}</span>
          <span className="">{summary.quantity}</span>
        </div>
        <div className="justify-self-end font-bold">
          {formatter.format(summary.amount)}
        </div>
      </div>
    </div>
  );
}

interface IDrawerProps {
  remain: number;
  total: number;
}

function Drawer({ remain, total }: IDrawerProps) {
  const formatter = Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
  });
  return (
    <div className="bg-white w-full h-full grid grid-cols-2 auto-rows-max">
      <div className="col-span-2 font-bold">My Drawer</div>
      <div className="justify-self-start font-bold items-center flex">
        <span>ยอดคงเหลือ</span>
      </div>
      <span className="text-2xl justify-self-end font-bold">
        {formatter.format(remain)}
      </span>
      <span className="text-sm justify-self-end col-span-2">ดูจำนวนเงิน</span>
      <div className="flex flex-col items-center col-span-2 pt-2 gap-y-1">
        <div className="w-full flex place-content-between">
          <div className="flex ">0</div>
          <div className="flex ">100%</div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
          <div
            className="bg-green-600 h-2 rounded overflow-hidden"
            style={{ width: `${(remain / total) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm">ยอดเงินอยู่ในเกณฑ์ปกติ</p>
      </div>
    </div>
  );
}

export default function TransactionOverview() {
  const data: ITransaction[] = [
    {
      name: "ฝาก",
      quantity: 3,
      amount: 100000,
    },
    {
      name: "ถอน",
      quantity: 3,
      amount: 100000,
    },
    {
      name: "โอน",
      quantity: 3,
      amount: 100000,
    },
    {
      name: "จ่ายบิล",
      quantity: 3,
      amount: 100000,
    },
  ];

  return (
    <div className="h-full bg-white ring-1 ring-gray-200 rounded-sm shadow-sm px-[2rem] py-[1.2rem] grid grid-rows-[4fr_3fr_4fr] divide-y-1 divide-gray-200 ">
      <div className="pb-8">
        <Transactions title="My Work" transactions={data} />
      </div>
      <div className="py-8">
        <Drawer remain={10000} total={30000} />
      </div>
      <div className="pt-8">
        <Transactions title="My Branch" transactions={data} />
      </div>
    </div>
  );
}
