import React, { useEffect, useState } from "react";
import { RiBankFill } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiTransfer } from "react-icons/bi";
import classNames from "classnames";

interface ITransactionProps {
  title: string;
  transactions: ITransaction[];
  icon?: React.ReactNode;
}

export interface ITransaction {
  name: string;
  quantity: number;
  amount: number;
}

function Transactions({
  transactions,
  title = "My Work",
  icon,
}: ITransactionProps) {
  const formatter = Intl.NumberFormat(undefined, {});

  return (
    <div className="bg-white w-full h-full grid grid-cols-3">
      <div className="flex col-span-3 font-bold gap-x-2 items-center">
        <span className="text-ttb-blue">{icon}</span>
        <span>{title}</span>
      </div>
      <div className="justify-self-start font-bold">ธุรกรรม</div>
      <div className="justify-self-center font-bold">รายการ</div>
      <div className="justify-self-end font-bold">จำนวนเงิน</div>
      <div className="col-span-3 grid grid-cols-2">
        {transactions.map(({ name, quantity, amount }, index) => {
          const compactTitle = title.replace(/\s/g, "");
          return (
            <React.Fragment key={`${compactTitle}-${name}`}>
              <div
                className={classNames("flex place-content-between", {
                  "font-bold": index == transactions.length - 1,
                })}
              >
                <span data-testid={`${compactTitle}-name-${index}`}>
                  {name}
                </span>
                <span data-testid={`${compactTitle}-quantity-${index}`}>
                  {quantity}
                </span>
              </div>
              <div
                data-testid={`${compactTitle}-amount-${index}`}
                className={classNames("justify-self-end", {
                  "font-bold": index == transactions.length - 1,
                })}
              >
                {formatter.format(amount)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

interface IDrawerProps {
  remain: number;
  total: number;
  icon?: React.ReactNode;
}

function Drawer({ remain, total, icon }: IDrawerProps) {
  const formatter = Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
  });
  return (
    <div className="bg-white w-full h-full grid grid-cols-2 auto-rows-max">
      <div className="col-span-2 font-bold flex items-center gap-x-2">
        <span className="text-ttb-blue">{icon}</span>
        <span>My Drawer</span>
      </div>
      <div className="justify-self-start font-bold items-center flex">
        <span>ยอดคงเหลือ</span>
      </div>
      <span className="text-2xl justify-self-end font-bold text-ttb-blue">
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

interface ITransactionOverviewProps {
  transactionWork: ITransaction[];
  transactionBranch: ITransaction[];
  drawer: { total: number; remain: number };
}

export default function TransactionOverview(props: ITransactionOverviewProps) {
  const [myWork, setMyWork] = useState<ITransaction[]>([]);
  const [branch, setBranch] = useState<ITransaction[]>([]);

  useEffect(() => {
    const summary = calculateAll(props.transactionWork);
    const data = props.transactionWork.map((tx) => tx);
    data.push(summary);
    setMyWork(data);
  }, [props.transactionWork]);

  useEffect(() => {
    const summary = calculateAll(props.transactionBranch);
    const data = props.transactionBranch.map((tx) => tx);
    data.push(summary);
    setBranch(data);
  }, [props.transactionBranch]);

  function calculateAll(transactions: ITransaction[]) {
    return transactions.reduce(
      (acc, v) => ({
        name: acc.name,
        amount: acc.amount + v.amount,
        quantity: acc.quantity + v.quantity,
      }),
      { name: "รวม", quantity: 0, amount: 0 },
    );
  }

  return (
    <div className="h-full bg-white ring-1 ring-gray-200 rounded-sm shadow-sm px-[2rem] py-[1.2rem] grid grid-rows-[4fr_3fr_4fr] divide-y-1 divide-gray-200 ">
      <div className="pb-8">
        <Transactions
          title="My Work"
          transactions={myWork}
          icon={<TiDocumentText />}
        />
      </div>
      <div className="py-8">
        <Drawer {...props.drawer} icon={<BiTransfer />} />
      </div>
      <div className="pt-8">
        <Transactions
          title="My Branch"
          transactions={branch}
          icon={<RiBankFill />}
        />
      </div>
    </div>
  );
}
