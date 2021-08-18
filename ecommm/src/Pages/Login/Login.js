import React from "react";
import "./Login.css";
import { useAuth } from "../../Context/AuthContext.js";
export default function Login() {
  const { isLogin, loginHandler } = useAuth();
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <h2 class="active"> Sign In </h2>
        <h2 class="inactive underlineHover">Sign Up </h2>

        <div class="fadeIn first"></div>

        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="login"
            let
            loginValue={(e) => e.target.value}
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
            let
            passwordValue={(e) => e.target.value}
          />
          <button type="submit" class="fadeIn fourth" value="Log In">
            {" "}
            Login
          </button>
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
