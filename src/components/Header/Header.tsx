import "./Header.css"
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <header className="page-header">
           <h1>HMS</h1>
           <img src={logo} alt="" />
        </header>
    )
}