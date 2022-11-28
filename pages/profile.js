import React, { Component, Fragment } from "react";
import styles from "../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";
import Navigate from "../components/navigate";
import Axios from "axios";
import Swal from "sweetalert2";

import plus from "../assets/plus.svg";
import user from "../assets/userblue.png";
import dashboard from "../assets/dashboardgrey.png";
import arrowup from "../assets/arrowup.svg";
import profileimg1 from "../assets/profileimg1.png";
import edit2 from "../assets/edit2.png";
import arrowright from "../assets/arrowright.png";
import arrowup3 from "../assets/arrowup3.png";
import table from "../assets/table.png";
import profile1 from "../assets/profile1.png";
import netflix from "../assets/netflix.png";
import profile2 from "../assets/profile2.png";
import adobe from "../assets/adobe.png";
import def from "../assets/default.jpg";

import withAuth from "../helpers/withAuth";

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: undefined,
      last: undefined,
      phone: undefined,
      image: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Profile";
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
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://fazzpay-rose.vercel.app/auth/logout`;
    Axios.post(url)
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("pin");
        console.log(res);
        Swal.fire({
          title: "Logout Success",
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
          title: "Logout failed",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  handleFile(event) {
    let file = event.target.files[0];
    // this.setState({ file: file });
    let formdata = new FormData();
    formdata.append("image", file);
    const data = formdata;
    // console.log(file.name);
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `https://fazzpay-rose.vercel.app/user/image/${localStorage.getItem(
      "id"
    )}`;
    Axios.patch(url, data, config)
      .then((res) => {
        Swal.fire({
          title: "Profile Picture Changed Successfully!",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Profile Picture Change failed!",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
      });
  }

  render() {
    // console.log(this.state.image);
    return (
      <Fragment>
        <main className={styles["main"]}>
          <Header />
          <section className={styles["section-main"]}>
            <Navigate
              image1={dashboard}
              image2={arrowup}
              image3={plus}
              image4={user}
              dashboard="aside-left-div-2"
              transfer="aside-left-div-2"
              topup="aside-left-div-2"
              profile="aside-left-div-1"
            />
            <aside className={styles["aside-right"]}>
              {this.state.image === null ? (
                <Image className={styles["profile-img"]} src={def} alt="img" />
              ) : (
                <Image
                  width={50}
                  height={50}
                  className={styles["profile-img"]}
                  src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${this.state.image}`}
                  alt="img"
                />
              )}
              <label for="upload" className={styles["edit-div"]}>
                <Image className={styles[""]} src={edit2} alt="img" />
                <p className={styles["edit-text"]}>Edit</p>
                <input
                  type="file"
                  name="file"
                  id="upload"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    this.handleFile(event);
                    // console.log(event);
                  }}
                />
              </label>
              <h1 className={styles["aside-right-header-1"]}>
                {this.state.first} {this.state.last}
              </h1>
              <p className={styles["aside-right-text-1"]}>{this.state.phone}</p>
              <div className={styles["btn-div"]}>
                <Link href="/profile/information">
                  <button className={styles["btn-1"]}>
                    Personal Information
                    <Image className={styles[""]} src={arrowright} alt="img" />
                  </button>
                </Link>
                <Link href="/profile/password">
                  <button className={styles["btn-1"]}>
                    Change Password
                    <Image className={styles[""]} src={arrowright} alt="img" />
                  </button>
                </Link>
                <Link href="/profile/pin">
                  <button className={styles["btn-1"]}>
                    Change PIN
                    <Image className={styles[""]} src={arrowright} alt="img" />
                  </button>
                </Link>
                <form onSubmit={this.handleSubmit}>
                  <button type="submit" className={styles["btn-1"]}>
                    Logout
                  </button>
                </form>
              </div>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(profile);
