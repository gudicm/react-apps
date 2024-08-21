import { PropTypes } from "prop-types";

function Footer({ title = "Footer" }) {
  return (
    <footer>
      <p>{title}</p>
    </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
};
export default Footer;
