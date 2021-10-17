import s from "components/MainContainer/MainContainer.module.css";

function MainContainer({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default MainContainer;
