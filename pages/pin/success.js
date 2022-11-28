import React, { Component, Fragment } from "react";
import styles from "../../styles/Success.module.css";
import Image from "next/image";
import PinInput from "react-pin-input";
import Axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

import loginimage from "../../assets/loginimage1.png";
import wave from "../../assets/wave.png";
import success from "../../assets/success.png";

class Success extends Component {
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
            <Image className={styles["success-img"]} src={success} alt="img" />
            <h1 className={styles["aside-right-header-1"]}>
              Your PIN Was Successfully Created
            </h1>
            <p className={styles["aside-right-text-1"]}>
              Your PIN was successfully created and you can now access all the
              features in FazzPay.
            </p>
            <div className={styles["pin-div"]}></div>
            <Link href="/home">
              <button className={styles["login-btn"]}>Go To Dashboard</button>
            </Link>
          </aside>
        </main>
      </Fragment>
    );
  }
}

export default Success;
