import Styles from "../../styles/pages/Society/Registration.module.css"
import Input from "./Input";

export default function Resgiteration() {
  const formQuestions= [
      {
        questionText: "What is your name?",
        type: "text",
        required: true
      },
      {
        questionText: "Why do you want to join this society?",
        type: "text",
        required: true
      },

      {
        questionText: "Email",
        type: "email",
        required: true
      },
      {
        questionText: "Mobile",
        type: "tel",
        required: true
      },
      {
        questionText: "Which role would you prefer in the society?",
        type: "radio",
        options: ["President", "Vice President", "Member"],
        required: true
      },
      {
        questionText: "Which role would you prefer in the society?",
        type: "checkbox",
        options: ["President", "Vice President", "Member"],
        required: true
      },

    ]
  
  return (
  <div className={Styles.parentDiv}> 
  <h1 className={Styles.heading}>Registration</h1> 
   <div className={Styles.form}>
    {
      formQuestions.map((question, index) => (
        <Input type={question.type} name={question.questionText} label={question.questionText} key={index} required={question.required} array={question.options}/>
      ))
    }
    {/* <Input type="text" name="name" label="First Name"/>
    <Input type="text" name="name" label="Last Name"/>
    <Input type="text" name="roll" label="Roll Number"/>
    <Input type="text" name="department" label="Department"/>
    <Input type="email" name="email" label="Email"/>
    <Input type="email" name="instiEmail" label="Institute Email"/>
    <Input type="tel" name="mobile" label="Mobile"/>
    <Input type="text" name="Hall" label="Hall of Residence"/>
    <Input type="text" name="year" label="Year of Study"/>
    <Input type="text" name="why" label="Why do you want to join?"/> */}
    </div>
    <div className={Styles.btnDiv}>
      <button className={Styles.btn}>Register</button>
      </div>  
    </div>
  );
}
