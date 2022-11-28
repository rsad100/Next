import React, { Component, Fragment } from "react";
import styles from "../../styles/Confirmation.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import PinInput from "react-pin-input";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Navigate from "../../components/navigate";

import dashboard from "../../assets/dashboardgrey.png";
import arrowup from "../../assets/arrowupblue.png";
import plus from "../../assets/plus.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.png";
import profile1 from "../../assets/profile1.png";
import cross from "../../assets/cross.png";
import def from "../../assets/default.jpg";

import withAuth from "../../helpers/withAuth";

class confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      noTelp: undefined,
      image: undefined,
      balance: undefined,
      receiverId: localStorage.getItem("receiver-id"),
      amount: localStorage.getItem("amount"),
      notes: localStorage.getItem("notes"),
      confirmPin: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Dashboard";
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const id = window.location.href.split("/")[5];
    // console.log(id);
    const url = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "receiver-id"
    )}`;
    const url2 = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "id"
    )}`;
    Axios.get(url, config)
      .then((res) => {
        this.setState({
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          noTelp: res.data.data.noTelp,
          image: res.data.data.image,
        });
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
    Axios.get(url2, config)
      .then((res) => {
        this.setState({
          balance: res.data.data.balance,
        });
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("lol");
    const url = `https://fazzpay-rose.vercel.app/transaction/transfer`;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const data = {
      receiverId: this.state.receiverId,
      amount: this.state.amount,
      notes: this.state.notes,
    };
    Axios.post(url, data, config)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Transfer Success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Transfer Failed",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
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
              transfer="aside-left-div-1"
              topup="aside-left-div-2"
              profile="aside-left-div-2"
            />
            <aside className={styles["aside-right"]}>
              <h1 className={styles["aside-right-header-1"]}>Transfer To</h1>
              <div className={styles["aside-right-div-1"]}>
                {this.state.image === null ? (
                  <Image
                    className={styles["search-image"]}
                    width={70}
                    height={70}
                    src={def}
                    alt="img"
                  />
                ) : (
                  <Image
                    className={styles["search-image"]}
                    width={70}
                    height={70}
                    src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${this.state.image}`}
                    alt="img"
                  />
                )}
                <div>
                  <p className={styles["aside-right-text-1"]}>
                    {this.state.firstName} {this.state.lastName}
                  </p>
                  <p className={styles["aside-right-text-2"]}>
                    {this.state.noTelp}
                  </p>
                </div>
              </div>
              <h1 className={styles["aside-right-header-1"]}>Details</h1>
              <div className={styles["details-div"]}>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Amount</p>
                  <p className={styles["detail-div-text-2"]}>
                    <NumericFormat
                      value={this.state.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                    />
                  </p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Balance Left</p>
                  <p className={styles["detail-div-text-2"]}>
                    <NumericFormat
                      value={this.state.balance - this.state.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                    />
                  </p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Date & Time</p>
                  <p className={styles["detail-div-text-2"]}>
                    {/* May 11, 2020 - 12.20 */}
                  </p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Notes</p>
                  <p className={styles["detail-div-text-2"]}>
                    {this.state.notes}
                  </p>
                </div>
              </div>
              <form onSubmit={this.handleSubmit} className={styles["btn-div"]}>
                <button type="submit" className={styles["continue-btn"]}>
                  Continue
                </button>
              </form>
            </aside>
          </section>
          <Footer />
          <div
            style={{ display: "none" }}
            className={styles["confirm-background"]}
          >
            <div className={styles["confirm-div"]}>
              <div className={styles["confirm-div-2"]}>
                <h1 className={styles["confirm-header-1"]}>
                  Enter PIN to Transfer
                </h1>
                <Image className={styles["cross"]} src={cross} alt="img" />
              </div>
              <p className={styles["confirm-text-1"]}>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </p>
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
                  marginBottom: "70px",
                  width: "53px",
                  height: "65px",
                }}
                // inputFocusStyle={{ borderColor: "blue" }}
                onComplete={(value, index) => {
                  this.setState({ confirmPin: value });
                }}
                autoSelect={true}
              />
              <form
                onSubmit={this.handleSubmit}
                className={styles["confirm-btn-div"]}
              >
                <button type="submit" className={styles["confirm-btn"]}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default withAuth(confirmation);
