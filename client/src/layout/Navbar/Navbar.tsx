import { AiOutlineBell, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const tellerData = {
    name: "John Doe",
    branch: "Main Branch",
    image:
      "https://media.istockphoto.com/id/2192093755/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B9%83%E0%B8%99%E0%B8%9F%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8D%E0%B8%B2%E0%B8%9E%E0%B8%B9%E0%B8%94.jpg?s=1024x1024&w=is&k=20&c=KEk78P7aflXtBtu2RyFGG3PHDoTwvxDdSjzE3K0_2nw=",
    position: "Teller",
    id: "12345",
  };

  return (
    <div className="flex justify-between items-center shadow p-4 w-full">
      <div className="flex items-center gap-2">
        <AiOutlineMenu />
        <p className="text-lg">📉</p>
        <p className="font-semibold">Finova</p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="ค้นหาข้อมูลโปรโมชั่น ข่าวสารและแคมเปญ"
          className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white"
        />
      </div>
      <div className="flex items-center h-1/2 gap-2">
        <AiOutlineBell />
        <button className="flex items-center gap-2 px-4 py-2"> 🇹🇭 ไทย <AiOutlineDown /> </button>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src={tellerData.image}
          alt="Profile"
        />
        <div className="text-sm">
          <p className="font-semibold text-black">{tellerData.name}</p>
          <div className="flex gap-2">
          <p>{tellerData.id}</p>
          <p>{tellerData.position}</p>
          <p>{tellerData.branch}</p>
          </div>
          
        </div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Navbar;
