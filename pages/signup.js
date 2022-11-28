import React, { Component, Fragment } from "react";
import styles from "../styles/SignUp.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";

import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import loginimage from "../assets/loginimage1.png";
import wave from "../assets/wave.png";
import eye from "../assets/eye.png";
import person from "../assets/person.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: undefined,
      last: undefined,
      email: undefined,
      password: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://fazzpay-rose.vercel.app/auth/register`;
    const data = {
      firstName: this.state.first,
      lastName: this.state.last,
      email: this.state.email,
      password: this.state.password,
    };
    Axios.post(url, data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Register Success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "/login";
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Wrong password or email",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

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
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h1>
            <p className={styles["aside-right-text-1"]}>
              Transfering money is eassier than ever, you can access FazzPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <div className={styles["input-1-div"]}>
              <Image src={person} alt="img" />
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Enter your firstname"
                value={this.state.first}
                onChange={(event) => this.handleChange(event, "first")}
              />
            </div>
            <div className={styles["input-2-div"]}>
              <div className={styles["input-2-subdiv"]}>
                <Image src={person} alt="img" />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Enter your lastname"
                  value={this.state.last}
                  onChange={(event) => this.handleChange(event, "last")}
                />
              </div>
            </div>
            <div className={styles["input-3-div"]}>
              <div className={styles["input-2-subdiv"]}>
                <Image src={mail} alt="img" />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Enter your e-mail"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                />
              </div>
            </div>
            <div className={styles["input-4-div"]}>
              <div className={styles["input-2-subdiv"]}>
                <Image src={mail} alt="img" />
                <input
                  className={styles["input-1"]}
                  type="text"
                  placeholder="Create your password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </div>
              <Image src={eye} alt="img" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className={styles["login-btn"]}>
                Sign Up
              </button>
            </form>
            <div className={styles["aside-right-text-div-1"]}>
              <p className={styles["aside-right-text-2"]}>
                Already have an account? Let’s
              </p>
              <p className={styles["aside-right-text-3"]}>Login</p>
            </div>
          </aside>
        </main>
      </Fragment>
    );
  }
}

export default Signup;
