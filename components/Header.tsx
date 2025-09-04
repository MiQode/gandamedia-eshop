import Container from './Container';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-b-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        {/* LeftBar */}
        <HeaderMenu />

        {/* Logo */}
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>GMA</Logo>
        </div>

        {/* RightBar */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <div className="">
            <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
