import { NavBar } from "./";
function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
}
export default Header;

function Logo() {
  return (
    <img className="logo" src="/assets/images/logo.svg" alt="Brand Logo" />
  );
}
