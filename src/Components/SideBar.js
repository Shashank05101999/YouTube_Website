import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-60 py-9 px-16 h-[100vh] ">
      <ul className="text-center py-1 cursor-pointer ">
        <li className="hover:font-bold">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:font-bold">Videos </li>
        <li className="hover:font-bold">Live </li>
      </ul>
      <h1 className="font-bold text-xl text-center  mt-3 mb-3">
        Subscriptions
      </h1>

      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold">Music </li>
        <li className="hover:font-bold">Sports </li>
        <li className="hover:font-bold">Gaming </li>
        <li className="hover:font-bold">Movie </li>
      </ul>
      <h1 className="font-bold text-xl text-center  mt-3 mb-3">About you</h1>
      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold"> History </li>
        <li className="hover:font-bold">Playlists </li>
        <li className="hover:font-bold"> Music </li>
        <li className="hover:font-bold"> Kids Area </li>
      </ul>
      <h1 className="font-bold text-xl text-center mt-3 mb-3">Settings</h1>
      <ul className="text-center cursor-pointer">
        <li className="hover:font-bold">Account </li>
        <li className="hover:font-bold">Privacy policy </li>
        <li className="hover:font-bold">Help </li>
        <li className="hover:font-bold">FeedBack</li>
        <li className="hover:font-bold">Report history</li>
        <li className="hover:font-bold"> FeedBack</li>
      </ul>
    </div>
  );
};
export default SideBar;
