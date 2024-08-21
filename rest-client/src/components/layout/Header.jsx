import { PropTypes } from "prop-types";

function Header({ title = "Header" }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
