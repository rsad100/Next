import React, { Component, Fragment } from "react";
import styles from "../../styles/PinChange.module.css";
import Image from "next/image";
import PinInput from "react-pin-input";
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

class PinChange extends Component {
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
        Swal.fire({
          title: "PIN Changed Successfully!",
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
          title: "PIN Change failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  render() {
    console.log(this.state.oldpin);
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
                Enter your current 6 digits Fazzpay PIN below to continue to the
                next steps.
              </p>
              <div className={styles["pin-div"]}>
                <PinInput
                  length={6}
                  initialValue=""
                  // secret
                  onChange={(value, index) => {}}
                  type="numeric"
                  inputMode="number"
                  // style={{ padding: "12px" }}
                  inputStyle={{
                    color: "rgba(58, 61, 66, 1)",
                    border: "1px solid rgba(99, 121, 244, 1)",
                    "box-shadow": "0px 10px 75px rgba(147, 147, 147, 0.1)",
                    "border-radius": "10px",
                    "font-weight": 700,
                    "font-size": "30px",
                    "line-height": "41px",
                    marginRight: "11.5px",
                    marginLeft: "11.5px",
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
              <form onSubmit={this.handleSubmit} className={styles["btn-div"]}>
                <button type="submit" className={styles["change-btn"]}>
                  Confirm
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

export default withAuth(PinChange);
