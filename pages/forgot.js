import React, { Component, Fragment } from "react";
import styles from "../styles/Forgot.module.css";
import Image from "next/image";

import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import loginimage from "../assets/loginimage1.png";
import wave from "../assets/wave.png";
import eye from "../assets/eye.png";
import person from "../assets/person.png";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main"]}>
          <aside className={styles["aside-left"]}>
            <Image className={styles["wave"]} src={wave} alt="img" />
            <h1 className={styles["aside-left-header-1"]}>FazzPay</h1>
            <Image src={loginimage} alt="img" />
            <h1 className={styles["aside-left-header-2"]}>
              App that Covering Banking Needs.
            </h1>
            <p className={styles["aside-left-text-1"]}>
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </p>
          </aside>
          <aside className={styles["aside-right"]}>
            <h1 className={styles["aside-right-header-1"]}>
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </h1>
            <p className={styles["aside-right-text-1"]}>
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </p>
            <div className={styles["input-3-div"]}>
              <div className={styles["input-2-subdiv"]}>
                <Image src={mail} alt="img" />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Enter your e-mail"
                />
              </div>
            </div>
            <button className={styles["login-btn"]}>Confirm</button>
          </aside>
        </main>
      </Fragment>
    );
  }
}

export default Login;
