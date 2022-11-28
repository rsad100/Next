import React, { Component, Fragment } from "react";
import styles from "../styles/History.module.css";
import Image from "next/image";
import Axios from "axios";
import Swal from "sweetalert2";

import Header from "../components/header";
import Footer from "../components/footer";
import Navigate from "../components/navigate";

import dashboard from "../assets/dashboard.svg";
import arrowup from "../assets/arrowup.svg";
import plus from "../assets/plus.svg";
import user from "../assets/user.svg";
import logout from "../assets/logout.png";
import arrowup2 from "../assets/arrowup2.png";
import plus2 from "../assets/plus2.png";
import arrowdown from "../assets/arrowdown.png";
import arrowup3 from "../assets/arrowup3.png";
import table from "../assets/table.png";
import profile1 from "../assets/profile1.png";
import netflix from "../assets/netflix.png";
import profile2 from "../assets/profile2.png";
import adobe from "../assets/adobe.png";
import HistoryCard2 from "../components/HistoryCard2";

import withAuth from "../helpers/withAuth";

class history extends Component {
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
      filter: "WEEK",
    };
  }

  componentDidMount() {
    document.title = "History";
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/transaction/history?page=${this.state.page}&limit=${this.state.limit}&filter=${this.state.filter}`;

    Axios.get(url, config)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ history: res.data.data });
        // console.log(res.data.data);
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
              <div className={styles["aside-right-div-1"]}>
                <h1 className={styles["aside-right-header-1"]}>
                  Transaction History
                </h1>
                <div className={styles["dropdown"]}>
                  <button className={styles["dropdown"]}>
                    {this.state.filter}
                  </button>
                  <div className={styles["dropdown-content"]}>
                    <a
                      onClick={() => {
                        const newfilter = "WEEK";
                        const config = {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        };
                        const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${this.state.page}&limit=${this.state.limit}&filter=${newfilter}`;
                        Axios.get(url3, config)
                          .then((res) => {
                            console.log(res.data.data);
                            this.setState({ history: res.data.data });
                            // console.log(res.data.data);
                          })
                          .catch((err) => console.log(err));
                        this.setState({
                          filter: newfilter,
                        });
                      }}
                      href="#"
                    >
                      Week
                    </a>
                    <a
                      onClick={() => {
                        const newfilter = "MONTH";
                        const config = {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        };
                        const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${this.state.page}&limit=${this.state.limit}&filter=${newfilter}`;
                        Axios.get(url3, config)
                          .then((res) => {
                            console.log(res.data.data);
                            this.setState({ history: res.data.data });
                            // console.log(res.data.data);
                          })
                          .catch((err) => console.log(err));
                        this.setState({
                          filter: newfilter,
                        });
                      }}
                      href="#"
                    >
                      Month
                    </a>
                    <a
                      onClick={() => {
                        const newfilter = "YEAR";
                        const config = {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                        };
                        const url3 = `https://fazzpay-rose.vercel.app/transaction/history?page=${this.state.page}&limit=${this.state.limit}&filter=${newfilter}`;
                        Axios.get(url3, config)
                          .then((res) => {
                            console.log(res.data.data);
                            this.setState({ history: res.data.data });
                            // console.log(res.data.data);
                          })
                          .catch((err) => console.log(err));
                        this.setState({
                          filter: newfilter,
                        });
                      }}
                      href="#"
                    >
                      Year
                    </a>
                  </div>
                </div>
                {/* <div className={styles["aside-right-filter"]}>
                  -- Select Filter --
                </div> */}
              </div>
              <div className={styles["history-div"]}>
                {this.state.history.map((history) => {
                  return (
                    <HistoryCard2
                      firstName={history.firstName}
                      lastName={history.lastName}
                      image={history.image}
                      id={history.id}
                      amount={history.amount}
                      type={history.type}
                    />
                  );
                })}
              </div>
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
                  className={styles["nav-btn"]}
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
                  className={styles["nav-btn"]}
                >
                  {">"}
                </button>
              </div>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(history);
