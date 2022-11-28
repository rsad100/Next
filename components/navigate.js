import React, { Component, Fragment } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";

import arrowup from "../assets/arrowup.svg";
import plus from "../assets/plus.svg";
import user from "../assets/user.svg";
import logout from "../assets/logout.png";
import cross from "../assets/cross.png";
import authAction from "../redux/actions/auth";

class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "none", amount: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit2(event) {
    event.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const data = { amount: this.state.amount };
    const url = `https://fazzpay-rose.vercel.app/transaction/top-up`;
    Axios.post(url, data, config)
      .then((res) => {
        console.log(res.data.data.redirectUrl);
        Swal.fire({
          title: "You're being redirected to payment page",
          timer: 1200,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.replace(res.data.data.redirectUrl);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Top Up Failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const url = `https://fazzpay-rose.vercel.app/auth/logout`;
    this.props.dispatch(
      authAction.logoutThunk(() => {
        Swal.fire({
          title: "Logout Success",
          timer: 2000,
          showConfirmButton: false,
          // timerProgressBar: true,
        }).then((result) => {
          localStorage.removeItem("token", this.props.auth.userData.token);
          localStorage.removeItem("id", this.props.auth.userData.id);
          localStorage.removeItem("pin", this.props.auth.userData.pin);
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "/login";
          }
        });
      })
    );
    // Axios.post(url)
    //   .then((res) => {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("id");
    //     localStorage.removeItem("pin");
    //     // deleteCookie("token");
    //     // console.log(res);
    //     Swal.fire({
    //       title: "Logout Success",
    //       timer: 2000,
    //       showConfirmButton: false,
    //       timerProgressBar: true,
    //     }).then((result) => {
    //       if (result.dismiss === Swal.DismissReason.timer) {
    //         window.location.href = "/login";
    //       }
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       title: "Logout failed",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //   });
  }

  // componentDidUpdate() {
  //   if (this.props.auth.isFulfilled) {
  //     if (this.props.auth.userData.token === null) {
  //       Swal.fire({
  //         title: "Logout Success",
  //         timer: 2000,
  //         showConfirmButton: false,
  //         timerProgressBar: true,
  //       }).then((result) => {
  //         localStorage.removeItem("token", this.props.auth.userData.token);
  //         localStorage.removeItem("id", this.props.auth.userData.id);
  //         localStorage.removeItem("pin", this.props.auth.userData.pin);
  //         if (result.dismiss === Swal.DismissReason.timer) {
  //           window.location.href = "/login";
  //         }
  //       });
  //     }
  //   }
  // }

  render() {
    return (
      <Fragment>
        <aside className={styles["aside-left"]}>
          <div className={styles["aside-left-subdiv-1"]}>
            <Link href="/home" className={styles[this.props.dashboard]}>
              <Image width={28} height={28} src={this.props.image1} alt="img" />
              <p>Dashboard</p>
            </Link>
            <Link
              href="/transfer/search"
              className={styles[this.props.transfer]}
            >
              <Image src={this.props.image2} alt="img" />
              <p>Transfer</p>
            </Link>
            <div
              onClick={() => {
                this.setState({
                  display: "block",
                });
              }}
              className={styles[this.props.topup]}
            >
              <Image src={this.props.image3} alt="img" />
              <p>Top Up</p>
            </div>
            <Link href="/profile" className={styles[this.props.profile]}>
              <Image src={this.props.image4} alt="img" />
              <p>Profile</p>
            </Link>
          </div>
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className={styles["aside-left-div-2"]}>
              <Image src={logout} alt="img" />
              <p>Logout</p>
            </button>
          </form>
        </aside>
        <div
          style={{ display: this.state.display }}
          className={styles["topup-background"]}
        >
          <div className={styles["topup-div"]}>
            <div className={styles["topup-div-2"]}>
              <h1 className={styles["topup-header-1"]}>Topup</h1>
              <Image
                onClick={() => {
                  this.setState({
                    display: "none",
                  });
                }}
                className={styles["cross"]}
                src={cross}
                alt="img"
              />
            </div>
            <p className={styles["topup-text-1"]}>
              Enter the amount of money, and click submit
            </p>
            <input
              className={styles["topup-input-1"]}
              type="number"
              placeholder="Input the amount of money"
              value={this.state.amount}
              onChange={(event) => this.handleChange(event, "amount")}
            />
            <form onSubmit={this.handleSubmit2} className={styles["btn-div"]}>
              <button type="submit" className={styles["btn-submit"]}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Navigate);
