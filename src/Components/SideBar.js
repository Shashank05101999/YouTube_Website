import { HomeIcon, HomeModernIcon } from "@heroicons/react/16/solid";
import { VideoCameraIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-52 py-6 ">
      <ul className="text-center py-1 cursor-pointer ">
        <li className="hover:font-bold">
          <Link to={"/"}>home</Link>
        </li>
        <li className="hover:font-bold">Videos </li>
        <li className="hover:font-bold">Live </li>
      </ul>
      <h1 className="font-bold text-xl text-center py-2">Subscriptions</h1>

      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold">Music </li>
        <li className="hover:font-bold">Sports </li>
        <li className="hover:font-bold">Gaming </li>
        <li className="hover:font-bold">Movie </li>
      </ul>
      <h1 className="font-bold text-xl text-center py-2 ">Watch Later</h1>
      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold">Music </li>
        <li className="hover:font-bold">Sports </li>
        <li className="hover:font-bold">Gaming </li>
        <li className="hover:font-bold">Movie </li>
      </ul>
      <h1 className="font-bold text-xl text-center py-2">Accounts</h1>
      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold">Setting </li>
        <li className="hover:font-bold">privacy policy </li>
        <li className="hover:font-bold">private </li>
        <li></li>
      </ul>
    </div>
  );
};
export default SideBar;
