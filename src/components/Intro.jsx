import { Form } from "react-router-dom";
import { fetchData } from "../helpers";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg"

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>Control Your</h1>
        <h2>
          <span className="accent"> Streaming Expenses</span>{" "}
        </h2>
   
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />

    </div>
  );
};

export default Intro;
