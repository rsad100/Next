import React, { Component, Fragment } from "react";
import styles from "../styles/Pin.module.css";
import Image from "next/image";
import PinInput from "react-pin-input";
import Axios from "axios";
import Swal from "sweetalert2";

import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import loginimage from "../assets/loginimage1.png";
import wave from "../assets/wave.png";
import eye from "../assets/eye.png";
import person from "../assets/person.png";

class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = { pin: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://fazzpay-rose.vercel.app/user/pin/${localStorage.getItem(
      "id"
    )}`;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const data = { pin: this.state.pin };
    Axios.patch(url, data, config)
      .then((res) => {
        console.log(res.data.data);
        window.location.href = "/pin/success";
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "PIN creation failed!",
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
            <Image
              className={styles["aside-left-img"]}
              src={loginimage}
              alt="img"
            />
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
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h1>
            <p className={styles["aside-right-text-1"]}>
              Create 6 digits pin to secure all your money and your data in
              FazzPay app. Keep it secret and don’t tell anyone about your
              FazzPay account password and the PIN.
            </p>
            <div className={styles["pin-div"]}>
              <PinInput
                length={6}
                initialValue=""
                // secret
                onChange={(value, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ display: "flex", justifyContent: "space-between" }}
                inputStyle={{
                  color: "rgba(58, 61, 66, 1)",
                  border: "1px solid rgba(99, 121, 244, 1)",
                  "box-shadow": "0px 10px 75px rgba(147, 147, 147, 0.1)",
                  "border-radius": "10px",
                  "font-weight": 700,
                  "font-size": "30px",
                  "line-height": "41px",
                  marginRight: "0px",
                  marginLeft: "0px",
                  width: "53px",
                  height: "65px",
                }}
                // inputFocusStyle={{ borderColor: "blue" }}
                onComplete={(value, index) => {
                  this.setState({ pin: value });
                }}
                autoSelect={true}
              />
            </div>
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className={styles["login-btn"]}>
                Confirm
              </button>
            </form>
          </aside>
        </main>
      </Fragment>
    );
  }
}

export default Pin;
