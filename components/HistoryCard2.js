import React, { Component, Fragment } from "react";
import styles from "../styles/History.module.css";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

import def from "../assets/default.jpg";

class HistoryCard2 extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles["transfer-div"]}>
          <div className={styles["transfer-div-1"]}>
            {this.props.image === null ? (
              <Image
                width={56}
                height={56}
                className={styles["profile-img"]}
                src={def}
                alt="img"
              />
            ) : (
              <Image
                width={56}
                height={56}
                className={styles["profile-img"]}
                src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${this.props.image}`}
                alt="img"
              />
            )}

            <div>
              <p className={styles["section-2-aside-right-text-1"]}>
                {this.props.firstName} {this.props.lastName}
              </p>
              <p className={styles["section-2-aside-right-text-2"]}>
                {this.props.type}
              </p>
            </div>
          </div>
          {this.props.type === "accept" || this.props.type === "topup" ? (
            <p className={styles["section-2-aside-right-text-3"]}>
              +
              <NumericFormat
                value={this.props.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp"}
              />
            </p>
          ) : (
            <p className={styles["section-2-aside-right-text-4"]}>
              -
              <NumericFormat
                value={this.props.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp"}
              />
            </p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default HistoryCard2;
