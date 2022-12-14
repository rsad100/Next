import React, { Component, Fragment } from "react";
import styles from "../../styles/Search.module.css";
import Image from "next/image";
import Axios from "axios";

import Header from "../../components/header";
import Footer from "../../components/footer";
import UserCard from "../../components/UserCard";
import Navigate from "../../components/navigate";

import dashboard from "../../assets/dashboardgrey.png";
import arrowup from "../../assets/arrowupblue.png";
import plus from "../../assets/plus.svg";
import user from "../../assets/user.svg";
import search from "../../assets/search.png";

import withAuth from "../../helpers/withAuth";
import withSearchParams from "../../helpers/withSearchParams";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      page: 1,
      limit: 4,
      search: "",
      sort: "firstName ASC",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  componentDidMount() {
    document.title = "Search";
    this.props.router.push({
      pathname: "/transfer/search",
      query: {
        page: this.state.page,
        limit: this.state.limit,
        search: this.state.search,
      },
    });
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    // console.log(this.info.role);
    const url = `https://fazzpay-rose.vercel.app/user?page=${this.state.page}&limit=${this.state.limit}`;
    Axios.get(url, config)
      .then((res) => {
        this.setState({ users: res.data.data });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.users);
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
              <h1 className={styles["aside-right-header-1"]}>
                Search Receiver
              </h1>
              <div className={styles["search-div"]}>
                <Image
                  onClick={() => {
                    const url = `https://fazzpay-rose.vercel.app/user?page=${this.state.page}&limit=${this.state.limit}&search=${this.state.search}`;
                    const config = {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    };
                    Axios.get(url, config)
                      .then((res) => {
                        this.setState({ users: res.data.data });
                      })
                      .catch((err) => console.log(err));
                    this.props.router.push({
                      pathname: "/transfer/search",
                      query: {
                        page: this.state.page,
                        limit: this.state.limit,
                        search: this.state.search,
                      },
                    });
                  }}
                  src={search}
                  alt="img"
                />
                <input
                  className={styles["search-input"]}
                  type="text"
                  placeholder="Search receiver here"
                  value={this.state.search}
                  onChange={(event) => this.handleChange(event, "search")}
                />
              </div>
              <div className={styles["result-div"]}>
                <div>
                  {this.state.users.map((users) => {
                    return (
                      <UserCard
                        firstName={users.firstName}
                        id={users.id}
                        image={users.image}
                        lastName={users.lastName}
                        noTelp={users.noTelp}
                      />
                    );
                  })}
                </div>
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
                    const url3 = `https://fazzpay-rose.vercel.app/user?page=${newpage}&limit=${this.state.limit}&filter=MONTH`;
                    Axios.get(url3, config)
                      .then((res) => {
                        console.log(res.data.data);
                        this.setState({ users: res.data.data });
                        // console.log(res.data.data);
                      })
                      .catch((err) => console.log(err));
                    this.setState({
                      page: newpage,
                    });
                    this.props.router.push({
                      pathname: "/transfer/search",
                      query: {
                        page: newpage,
                        limit: this.state.limit,
                        search: this.state.search,
                      },
                    });
                  }}
                  className={styles["nav-btn"]}
                >
                  {"<"}
                </button>
                <p className={styles["nav-text"]}>{this.state.page}</p>
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
                    const url = `https://fazzpay-rose.vercel.app/user?page=${newpage}&limit=${this.state.limit}&search=${this.state.search}`;
                    Axios.get(url, config)
                      .then((res) => {
                        console.log(res.data.data);
                        this.setState({ users: res.data.data });
                        console.log(res.data.data);
                      })
                      .catch((err) => console.log(err));
                    this.setState({
                      page: newpage,
                    });
                    this.props.router.push({
                      pathname: "/transfer/search",
                      query: {
                        page: newpage,
                        limit: this.state.limit,
                        search: this.state.search,
                      },
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

export default withSearchParams(withAuth(Search));
