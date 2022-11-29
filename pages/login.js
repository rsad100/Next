import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

import Axios from "axios";
import Swal from "sweetalert2";

import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import loginimage from "../assets/loginimage1.png";
import wave from "../assets/wave.png";
import eye from "../assets/eye.png";
import authAction from "../redux/actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "password",
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
    // const url = `https://fazzpay-rose.vercel.app/auth/login`;
    const data = { email: this.state.email, password: this.state.password };
    this.props.dispatch(authAction.loginThunk(data));

    // Axios.post(url, data)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.data.token);
    //     localStorage.setItem("id", res.data.data.id);
    //     localStorage.setItem("pin", res.data.data.pin);
    //     Swal.fire({
    //       title: "Login Success",
    //       timer: 2000,
    //       showConfirmButton: false,
    //       timerProgressBar: true,
    //     }).then((result) => {
    //       if (result.dismiss === Swal.DismissReason.timer) {
    //         res.data.data.pin === null
    //           ? (window.location.href = "/pin")
    //           : (window.location.href = "/home");
    //       }
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       title: "Wrong password or email",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //   });
  }

  componentDidUpdate() {
    if (this.props.auth.isFulfilled) {
      if (this.props.auth.userData.token) {
        localStorage.setItem("token", this.props.auth.userData.token);
        localStorage.setItem("id", this.props.auth.userData.id);
        localStorage.setItem("pin", this.props.auth.userData.pin);
        Swal.fire({
          title: "Login Success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            if (this.props.auth.userData.pin === null) {
              window.location.href = "/pin";
            } else {
              window.location.href = "/home";
            }
          }
        });
      }
    }
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
              <Image src={mail} alt="img" />
              <input
                className={styles["input-1"]}
                type="text"
                placeholder="Enter your e-mail"
                value={this.state.email}
                onChange={(event) => this.handleChange(event, "email")}
              />
            </div>
            <div className={styles["input-2-div"]}>
              <div className={styles["input-2-subdiv"]}>
                <Image src={lock} alt="img" />
                <input
                  className={styles["input-1"]}
                  type={this.state.hidden}
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
              </div>
              <Image
                onClick={() => {
                  this.state.hidden === "password"
                    ? this.setState({
                        hidden: "text",
                      })
                    : this.setState({
                        hidden: "password",
                      });
                }}
                src={eye}
                alt="img"
              />
            </div>
            <Link href="/forgot">
              <p className={styles["forgot"]}>Forgot password?</p>
            </Link>
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className={styles["login-btn"]}>
                Login
              </button>
            </form>
            <Link href="/signup" className={styles["aside-right-text-div-1"]}>
              <p>
                <span className={styles["aside-right-text-2"]}>
                  Don’t have an account? Let’s{" "}
                </span>
                <span className={styles["aside-right-text-3"]}> Sign Up</span>
              </p>
            </Link>
          </aside>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);
