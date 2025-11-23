import Logo from "../assets/Logo";

const Header = () => {
  return (
    <div className="flex p-2 justify-between items-center border border-darkSecondary dark:border-secondary">
      <Logo />
    </div>
  );
};

export default Header;
