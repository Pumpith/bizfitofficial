import Navbar from "@components/navbar";
import PropTypes from "prop-types";

export default function Layouts(props: any): JSX.Element {
  const { children } = props;

  return (
    <>
      <div className="theme_default">
        <div className="layout">
          <Navbar />
          <div className="layout_main_container">
            {children}

          </div>
        </div>
      </div>
    </>
  );
}

Layouts.propTypes = {
  children: PropTypes.node,
};
