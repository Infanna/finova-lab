function Transactions() {
  const data = {
    a: [3, "xxx,xxx"],
    b: [3, "xxx,xxx"],
    c: [3, "xxx,xxx"],
    d: [3, "xxx,xxx"],
  };
  return (
    <div className="bg-white w-full h-full grid grid-cols-3">
      <div className="col-span-3 font-bold">HEADER</div>
      <div className="justify-self-start font-bold">HEADER</div>
      <div className="justify-self-center font-bold">HEADER</div>
      <div className="justify-self-end font-bold">HEADER</div>
      {Object.entries(data).map(([name, [num, value]]) => {
        return (
          <>
            <div className="justify-self-start">{name}</div>
            <div className="justify-self-center">{num}</div>
            <div className="justify-self-end">{value}</div>
          </>
        );
      })}
      <>
        <div className="justify-self-start font-bold">all</div>
        <div className="justify-self-center font-bold">num</div>
        <div className="justify-self-end font-bold">value</div>
      </>
    </div>
  );
}

function Drawer() {
  return (
    <div className="bg-white w-full h-full grid grid-cols-1 auto-rows-max">
      <div className="col-span-2 font-bold">HEADER</div>
      <div className="justify-self-start font-bold">remain</div>
      <div className="justify-self-center font-bold flex flex-col flex-end items-end">
        <div>xxx,xxx</div>
        <div>peek</div>
      </div>
      <div className="flex flex-col items-center col-span-2">
        <div className="w-full flex place-content-between">
          <div className="flex ">0</div>
          <div className="flex ">100</div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
          <div className="w-2/3 bg-green-600 h-2 rounded overflow-hidden"></div>
        </div>
        <div>indicator</div>
      </div>
    </div>
  );
}

export default function TransactionOverview() {
  return (
    <div className="max-w-[360px] bg-white ring-1 ring-gray-200 rounded-sm shadow-sm px-[2rem] py-[1.2rem] grid grid-rows-[4fr_3fr_4fr] divide-y-1 divide-gray-200 ">
      <div className="pb-8">
        <Transactions />
      </div>
      <div className="py-8">
        <Drawer />
      </div>
      <div className="pt-8">
        <Transactions />
      </div>
    </div>
  );
}
