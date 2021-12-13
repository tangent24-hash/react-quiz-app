import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <div class="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter password" icon="lock" />
          <Button>Submit Now</Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Create account</a>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
