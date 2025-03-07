import { AiOutlineBell, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { tellerData } from "../../constants/MockTellerData";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center shadow p-3 w-full gap-10 bg-white">
      <div className="flex items-center gap-2">
        <AiOutlineMenu />
        <p className="text-lg">📉</p>
        <p className="font-semibold">Finova</p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="ค้นหาข้อมูลโปรโมชั่น ข่าวสารและแคมเปญ"
          className="px-4 py-2 border border-gray-300 rounded-full bg-white w-lg"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center h-1/2 gap-2">
          <AiOutlineBell />
          <button className="flex items-center gap-2 px-4 py-2">
            {" "}
            🇹🇭 ไทย <AiOutlineDown />{" "}
          </button>
        </div>
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
