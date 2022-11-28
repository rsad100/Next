import React, { Component, Fragment } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";
import { NumericFormat } from "react-number-format";
import Link from "next/link";

import withAuth from "../helpers/withAuth";

import Header from "../components/header";
import Footer from "../components/footer";
import Navigate from "../components/navigate";

import dashboard from "../assets/dashboard.svg";
import arrowup from "../assets/arrowup.svg";
import plus from "../assets/plus.svg";
import user from "../assets/user.svg";
import arrowup2 from "../assets/arrowup2.png";
import plus2 from "../assets/plus2.png";
import arrowdown from "../assets/arrowdown.png";
import arrowup3 from "../assets/arrowup3.png";
import table from "../assets/table.png";
import profile1 from "../assets/profile1.png";
import netflix from "../assets/netflix.png";
import profile2 from "../assets/profile2.png";
import adobe from "../assets/adobe.png";
import cross from "../assets/cross.png";
import HistoryCard from "../components/HistoryCard";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      hidden: true,
      email: undefined,
      password: undefined,
      phone: undefined,
      display: "none",
      page: 1,
      limit: 4,
    };
  }

  componentDidMount() {
    document.title = "Dashboard";
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `https://fazzpay-rose.vercel.app/dashboard/${localStorage.getItem(
      "id"
    )}`;
    const url2 = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "id"
    )}`;
    const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${this.state.page}&limit=${this.state.limit}&filter=MONTH`;
    Axios.get(url, config)
      .then((res) => {
        this.setState({
          totalExpense: res.data.data.totalExpense,
          totalIncome: res.data.data.totalIncome,
        });
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
    Axios.get(url2, config)
      .then((res) => {
        this.setState({
          // first: res.data.data.firstName,
          // last: res.data.data.lastName,
          phone: res.data.data.noTelp,
          // image: res.data.data.image,
        });
        // console.log(res.data.data);
      })
      .catch((err) => console.log(err));
    Axios.get(url3, config)
      .then((res) => {
        this.setState({ history: res.data.data });
        console.log(res.data.pagination);
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
              dashboard="aside-left-div-1"
              transfer="aside-left-div-2"
              topup="aside-left-div-2"
              profile="aside-left-div-2"
            />
            <aside className={styles["aside-right"]}>
              <section className={styles["aside-right-section-1"]}>
                <div className={styles["right-section-1-div-1"]}>
                  <p className={styles["right-section-1-text-1"]}>Balance</p>
                  <p className={styles["right-section-1-text-2"]}>
                    <NumericFormat
                      value={this.state.totalIncome - this.state.totalExpense}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                    />
                  </p>
                  <p className={styles["right-section-1-text-3"]}>
                    {this.state.phone}
                  </p>
                </div>
                <div className={styles["right-section-1-div-2"]}>
                  <Link href="/transfer/search">
                    <button className={styles["section-1-btn"]}>
                      <Image src={arrowup2} alt="img" />
                      <p>Transfer</p>
                    </button>
                  </Link>
                  <button className={styles["section-1-btn"]}>
                    <Image src={plus2} alt="img" />
                    <p>Top Up</p>
                  </button>
                </div>
              </section>
              <section className={styles["section-2"]}>
                <aside className={styles["section-2-aside-left"]}>
                  <div className={styles["section-2-aside-left-div-1"]}>
                    <div>
                      <Image
                        className={styles["section-2-aside-left-image-1"]}
                        src={arrowdown}
                        alt="img"
                      />
                      <p className={styles["section-2-aside-left-text-1"]}>
                        Income
                      </p>
                      <p className={styles["section-2-aside-left-text-2"]}>
                        <NumericFormat
                          value={this.state.totalIncome}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp"}
                        />
                      </p>
                    </div>
                    <div>
                      <Image
                        className={styles["section-2-aside-left-image-1"]}
                        src={arrowup3}
                        alt="img"
                      />
                      <p className={styles["section-2-aside-left-text-1"]}>
                        Expense
                      </p>
                      <p className={styles["section-2-aside-left-text-2"]}>
                        <NumericFormat
                          value={this.state.totalExpense}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp"}
                        />
                      </p>
                    </div>
                  </div>
                  <div className={styles["table"]}>
                    <Image src={table} alt="img" />
                  </div>
                </aside>
                <aside className={styles["section-2-aside-right"]}>
                  <h1 className={styles["section-2-aside-right-header-1"]}>
                    Transaction History
                  </h1>
                  <Link className={styles["history-div"]} href="/history">
                    {this.state.history.map((history) => {
                      return (
                        <HistoryCard
                          firstname={history.firstName}
                          lastName={history.lastName}
                          image={history.image}
                          id={history.id}
                          amount={history.amount}
                          type={history.type}
                        />
                      );
                    })}
                  </Link>
                  <div className={styles["nav-div"]}>
                    <button
                      onClick={() => {
                        const newpage = this.state.page - 1;
                        const config = {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        };
                        const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${newpage}&limit=${this.state.limit}&filter=MONTH`;
                        Axios.get(url3, config)
                          .then((res) => {
                            console.log(res.data.data);
                            this.setState({ history: res.data.data });
                            // console.log(res.data.data);
                          })
                          .catch((err) => console.log(err));
                        this.setState({
                          page: newpage,
                        });
                      }}
                      className={styles["nav-left"]}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {
                        const newpage = this.state.page + 1;
                        const config = {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        };
                        const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${newpage}&limit=${this.state.limit}&filter=MONTH`;
                        Axios.get(url3, config)
                          .then((res) => {
                            console.log(res.data.data);
                            this.setState({ history: res.data.data });
                            // console.log(res.data.data);
                          })
                          .catch((err) => console.log(err));
                        this.setState({
                          page: newpage,
                        });
                      }}
                      className={styles["nav-left"]}
                    >
                      {">"}
                    </button>
                  </div>
                </aside>
              </section>
            </aside>
          </section>
          <Footer />
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
        </main>
      </Fragment>
    );
  }
}

export default withAuth(home);
