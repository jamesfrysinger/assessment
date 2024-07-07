import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="pb-10">
      <img src={logo} alt="URBN User Lookup" className="w-40" />
    </header>
  );
};

export default Header;
