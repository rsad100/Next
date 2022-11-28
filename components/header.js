import React, { Component, Fragment } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";
import jwt from "jwt-decode";
import Link from "next/link";

import bell from "../assets/bell.png";
import def from "../assets/default.jpg";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: undefined,
      last: undefined,
      phone: undefined,
      image: undefined,
    };
  }

  componentDidMount() {
    document.title = "Profile";
    const token = localStorage.getItem("token");
    const info = jwt(token);
    if (!token) {
      return {
        redirect: { destination: "/login", permanent: false },
      };
    }
    this.id = info.user_id;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "id"
    )}`;
    Axios.get(url, config)
      .then((res) => {
        this.setState({
          first: res.data.data.firstName,
          last: res.data.data.lastName,
          phone: res.data.data.noTelp,
          image: res.data.data.image,
        });
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className={styles["main"]}>
        <Link href="/home" className={styles["content-left"]}>
          FazzPay
        </Link>
        <Link href="/profile" className={styles["profile-div"]}>
          {this.state.image === null ? (
            <Image
              width={52}
              height={52}
              style={{ borderRadius: "10px" }}
              className={styles["profile-image"]}
              src={def}
              alt="img"
            />
          ) : (
            <Image
              className={styles["profile-image"]}
              width={52}
              height={52}
              style={{ borderRadius: "10px" }}
              src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${this.state.image}`}
              alt="img"
            />
          )}
          <div className={styles["profile-text-div"]}>
            <p className={styles["profile-text-1"]}>
              {this.state.first} {this.state.last}
            </p>
            <p className={styles["profile-text-2"]}>{this.state.phone}</p>
          </div>
          <Image src={bell} alt="bell" />
        </Link>
      </section>
    );
  }
}

export default header;
