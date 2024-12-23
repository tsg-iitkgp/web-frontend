import Styles from "../../styles/pages/Society/NavTabs.module.css"

export default function NavTabs(props) {
  return (
    <div className={Styles.Tabs}
      style={{
        color: props.activeSection === props.text ? "#f1c40f" : "white",
        borderBottom: props.activeSection === props.text ? "1px solid #f1c40f" : "",
      }}
      onClick={() => props.setActiveSection(props.text)} 
    >
      {props.text}
    </div>
  );
}
