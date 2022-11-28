import React, { Component, Fragment } from "react";
import styles from "../../../styles/Input.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navigate from "../../../components/navigate";

import dashboard from "../../../assets/dashboardgrey.png";
import arrowup from "../../../assets/arrowupblue.png";
import plus from "../../../assets/plus.svg";
import user from "../../../assets/user.svg";
import logout from "../../../assets/logout.png";
import profile1 from "../../../assets/profile1.png";
import edit from "../../../assets/edit.png";
import def from "../../../assets/default.jpg";

import withAuth from "../../../helpers/withAuth";

class transferdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      noTelp: undefined,
      image: undefined,
      balance: undefined,
      receiverId: window.location.href.split("/")[5],
      amount: undefined,
      notes: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  componentDidMount() {
    document.title = "Dashboard";
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const id = window.location.href.split("/")[5];
    // console.log(id);
    const url = `https://fazzpay-rose.vercel.app/user/profile/${id}`;
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
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
    Axios.get(url2, config)
      .then((res) => {
        this.setState({
          balance: res.data.data.balance,
        });
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
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
              <h1 className={styles["aside-right-header-1"]}>Transfer Money</h1>
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
              <p className={styles["aside-right-text-3"]}>
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
              <div className={styles["input-div"]}>
                <input
                  className={styles["input-1"]}
                  type="number"
                  placeholder="0.00"
                  value={this.state.amount}
                  onChange={(event) => this.handleChange(event, "amount")}
                />
                <p className={styles["aside-right-text-4"]}>
                  <NumericFormat
                    value={this.state.balance}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp"}
                  />{" "}
                  Available
                </p>
                <div className={styles["edit-div"]}>
                  <Image className={styles["edit"]} src={edit} alt="img" />
                  <input
                    className={styles["input-2"]}
                    type="text"
                    placeholder="For buying some socks"
                    value={this.state.notes}
                    onChange={(event) => this.handleChange(event, "notes")}
                  />
                </div>
              </div>
              <Link
                onClick={() => {
                  localStorage.setItem("receiver-id", this.state.receiverId);
                  localStorage.setItem("amount", this.state.amount);
                  localStorage.setItem("notes", this.state.notes);
                }}
                href="/transfer/confirmation"
                className={styles["btn-div"]}
              >
                <button className={styles["continue-btn"]}>Continue</button>
              </Link>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(transferdetail);
