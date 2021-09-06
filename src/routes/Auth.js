import { authService } from "fbase";
import { useState } from "react";

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const  [error,setError]=useState("");  

  const onChange = (event) => {
    console.log(event.target.name);
    const {
      target: { name, value }
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      //console.log(error);
      setError(error.message);
    }
  };

  const toogleAccount=()=>setNewAccount((prev)=>!prev);

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
          <hr />
          {error}
        </form>
        <hr />
        <span onClick={toogleAccount}>
          {newAccount?"Sign In":"Create Account"}
        </span> <hr />
        <button> Continue with Google</button>
        <button> Continue with Github</button>
      </div>
    );  
};
  export default Auth;

