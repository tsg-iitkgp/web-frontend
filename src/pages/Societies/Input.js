import Styles from "../../styles/pages/Society/Registration.module.css";
export default function Input(props) {
  if (props.type === "radio"||props.type === "checkbox") {
    return (
      <div className={Styles.radio}>
        <p>{props.name}</p>
        {props.array.map((option, index) => (
          <div className={Styles.group}  key={index}>
            <label for={option} className={Styles.radioOpt}><span style={{fontSize:"12px",padding:"0 4px"}}>{index+1}</span>{option}</label>
            <input type={props.type} id={option} name={props.name} value={option}  className={Styles.radioInput} /> 
          </div>
        ))}
      </div>
    );
  } else {
    return (
          <div className={Styles.group}>
            <input
              type={props.type}
              name={props.name}
              className={Styles.input}
              placeholder=" "
              required
            />
            <label for="name" className={Styles.label}>
              {props.label}
            </label>
          </div>   
    );
  }
}
