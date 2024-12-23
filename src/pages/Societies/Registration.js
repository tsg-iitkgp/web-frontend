import Styles from "../../styles/pages/Society/Registration.module.css"

export default function Resgiteration() {
  return (
  <div className={Styles.parentDiv}> 
  <h1 className={Styles.heading}>Registration</h1> 
   <div className={Styles.form}>
      <div className={Styles.group}>
        <input
          type="text"
          name="name"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="name" className={Styles.label}>
          First Name
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="name"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="name" className={Styles.label}>
          Last Name
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="roll"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="roll" className={Styles.label}>
          Roll Number
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="department"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="department" className={Styles.label}>
          Department
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="email"
          name="email"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="email" className={Styles.label}>
          Email
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="email"
          name="instiEmail"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="email" className={Styles.label}>
          Institute Email
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="tel"
          name="mobile"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="email" className={Styles.label}>
          Mobile
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="Hall"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="Hall" className={Styles.label}>
          Hall of Residence
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="quiz1"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="quiz1" className={Styles.label}>
        Why do you want to join this society?
        </label>
      </div>
      <div className={Styles.group}>
        <input
          type="text"
          name="quiz2"
          className={Styles.input}
          placeholder=" "
          required
        />
        <label for="quiz2" className={Styles.label}>
        Skills/Experience you have in this field
        </label>
      </div>
    </div>
    <div className={Styles.btnDiv}>
      <button className={Styles.btn}>Register</button>
      </div>  
    </div>
  );
}
