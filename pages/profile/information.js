import React, { Component, Fragment } from "react";
import styles from "../../styles/Information.module.css";
import Image from "next/image";
import jwt from "jwt-decode";
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

import withAuth from "../../helpers/withAuth";

class information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: undefined,
      last: undefined,
      phone: undefined,
      image: undefined,
      email: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  componentDidMount() {
    document.title = "Profile";
    const token = localStorage.getItem("token");
    if (!token) {
      return {
        redirect: { destination: "/login", permanent: false },
      };
    }
    const info = jwt(token);
    this.id = info.user_id;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "id"
    )}`;
    console.log(this.id);
    Axios.get(url, config)
      .then((res) => {
        this.setState({
          first: res.data.data.firstName,
          last: res.data.data.lastName,
          phone: res.data.data.noTelp,
          image: res.data.data.image,
          email: res.data.data.email,
        });
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `https://fazzpay-rose.vercel.app/user/profile/${localStorage.getItem(
      "id"
    )}`;
    const data = {
      firstName: this.state.first,
      lastName: this.state.last,
      noTelp: this.state.phone,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    Axios.patch(url, data, config)
      .then((res) => {
        Swal.fire({
          title: "Data changed successfully!",
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
          title: "Data change failed!",
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
                Personal Information
              </h1>
              <p className={styles["aside-right-text-1"]}>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className={styles["informations-div"]}>
                <div className={styles["information-div"]}>
                  <h1 className={styles["aside-right-header-2"]}>First Name</h1>
                  <input
                    className={styles["aside-right-text-2"]}
                    type="text"
                    placeholder="Input your first name"
                    value={this.state.first}
                    onChange={(event) => this.handleChange(event, "first")}
                  />
                </div>
                <div className={styles["information-div"]}>
                  <h1 className={styles["aside-right-header-2"]}>Last Name</h1>
                  <input
                    className={styles["aside-right-text-2"]}
                    type="text"
                    placeholder="Input your last name"
                    value={this.state.last}
                    onChange={(event) => this.handleChange(event, "last")}
                  />
                </div>
                <div className={styles["information-div"]}>
                  <h1 className={styles["aside-right-header-2"]}>
                    Verified E-mail
                  </h1>
                  {/* <input
                    className={styles["aside-right-text-2"]}
                    type="text"
                    placeholder="Input your email"
                    value={this.state.email}
                    onChange={(event) => this.handleChange(event, "email")}
                  /> */}
                  <p className={styles["aside-right-text-2"]}>
                    {this.state.email}
                  </p>
                </div>
                <div className={styles["information-div-2"]}>
                  <div>
                    <h1 className={styles["aside-right-header-2"]}>
                      Phone Number
                    </h1>
                    <input
                      className={styles["aside-right-text-2"]}
                      type="text"
                      placeholder="Input your phone number"
                      value={this.state.phone}
                      onChange={(event) => this.handleChange(event, "phone")}
                    />
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <button
                      type="submit"
                      className={styles["aside-right-text-5"]}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(information);
