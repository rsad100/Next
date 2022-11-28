import React, { Component, Fragment } from "react";
import styles from "../../styles/Password.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Navigate from "../../components/navigate";

import dashboard from "../../assets/dashboardgrey.png";
import arrowup from "../../assets/arrowup.svg";
import plus from "../../assets/plus.svg";
import user from "../../assets/userblue.png";
import logout from "../../assets/logout.png";
import lock from "../../assets/lock.png";
import eye from "../../assets/eye.png";

import withAuth from "../../helpers/withAuth";

class password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpass: undefined,
      newpass: undefined,
      confirmpass: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://fazzpay-rose.vercel.app/user/password/${localStorage.getItem(
      "id"
    )}`;
    const data = {
      oldPassword: this.state.oldpass,
      newPassword: this.state.newpass,
      confirmPassword: this.state.confirmpass,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    Axios.patch(url, data, config)
      .then((res) => {
        Swal.fire({
          title: "Password changed successfully!",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Password change failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  render() {
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
              <h1 className={styles["aside-right-header-1"]}>
                Change Password
              </h1>
              <p className={styles["aside-right-text-1"]}>
                You must enter your current password and then type your new
                password twice.
              </p>
              <div className={styles["informations-div"]}>
                <div className={styles["input-div"]}>
                  <div className={styles["lock-div"]}>
                    <Image src={lock} alt="img" />
                    <input
                      className={styles["input"]}
                      type="password"
                      placeholder="Current password"
                      value={this.state.oldpass}
                      onChange={(event) => this.handleChange(event, "oldpass")}
                    />
                  </div>
                  <Image src={eye} alt="img" />
                </div>
                <div className={styles["input-div"]}>
                  <div className={styles["lock-div"]}>
                    <Image src={lock} alt="img" />
                    <input
                      className={styles["input"]}
                      type="password"
                      placeholder="New password"
                      value={this.state.newpass}
                      onChange={(event) => this.handleChange(event, "newpass")}
                    />
                  </div>
                  <Image src={eye} alt="img" />
                </div>
                <div className={styles["input-div"]}>
                  <div className={styles["lock-div"]}>
                    <Image src={lock} alt="img" />
                    <input
                      className={styles["input"]}
                      type="password"
                      placeholder="Repeat new password"
                      value={this.state.confirmpass}
                      onChange={(event) =>
                        this.handleChange(event, "confirmpass")
                      }
                    />
                  </div>
                  <Image src={eye} alt="img" />
                </div>
              </div>
              <form onSubmit={this.handleSubmit} className={styles["btn-div"]}>
                <button className={styles["change-btn"]}>
                  Change Password
                </button>
              </form>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(password);
