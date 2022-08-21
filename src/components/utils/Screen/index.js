import PropTypes from "prop-types";
import * as S from "./styles";

const Screen = ({ children }) => {
  return <S.Containter>{children}</S.Containter>;
};
Screen.propTypes = {
  children: PropTypes.node,
};

export default Screen;
