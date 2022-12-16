import Logo from "./Logo";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
