import { Link } from "react-router-dom";
import "./Footer.scss";
import copyrightIcon from "../../assets/images/copyrightIcon.svg";
import sendIcon from "../../assets/images/sendIcon.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import {LuPhone} from "react-icons/lu"
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container bg-slate-500">
     <LuPhone size="20 "/>
     <p className="text-cyan-600 text-[50px]">test </p>
      </div>
    
    </footer>
  );
};
