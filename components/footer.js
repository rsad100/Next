import React, { Component, Fragment } from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles["main"]}>
          <p className={styles["div-left"]}>
            2020 FazzPay. All right reserved.
          </p>
          <div className={styles["div-right"]}>
            <p>+62 5637 8882 9901</p>
            <p>contact@fazzpay.com</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
