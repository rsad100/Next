import React, { Component, Fragment } from "react";
import styles from "../styles/Search.module.css";
import Image from "next/image";
import Link from "next/link";

import def from "../assets/default.jpg";

class UserCard extends Component {
  render() {
    return (
      <Fragment>
        <Link
          href={{ pathname: `/transfer/input/${this.props.id}` }}
          className={styles["aside-right-div-1"]}
          passHref
          shallow
          replace
        >
          {this.props.image === null ? (
            <Image
              width={70}
              height={70}
              style={{ borderRadius: "10px" }}
              className={styles["profile-image"]}
              src={def}
              alt="img"
            />
          ) : (
            <Image
              className={styles["search-image"]}
              width={70}
              height={70}
              src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${this.props.image}`}
              alt="img"
            />
          )}
          <div>
            <p className={styles["aside-right-text-1"]}>
              {this.props.firstName} {this.props.lastName}
            </p>
            <p className={styles["aside-right-text-2"]}>{this.props.noTelp}</p>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default UserCard;
