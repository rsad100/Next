import React, { Component, Fragment } from "react";
import styles from "../../styles/Phone.module.css";
import Image from "next/image";

import Header from "../../components/header";
import Footer from "../../components/footer";

import dashboard from "../../assets/dashboardgrey.png";
import arrowup from "../../assets/arrowup.svg";
import plus from "../../assets/plus.svg";
import user from "../../assets/userblue.png";
import logout from "../../assets/logout.png";
import phone from "../../assets/phone.png";
import eye from "../../assets/eye.png";

class home extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main"]}>
          <Header />
          <section className={styles["section-main"]}>
            <aside className={styles["aside-left"]}>
              <div className={styles["aside-left-subdiv-1"]}>
                <div className={styles["aside-left-div-2"]}>
                  <Image src={dashboard} alt="img" />
                  <p>Dashboard</p>
                </div>
                <div className={styles["aside-left-div-2"]}>
                  <Image src={arrowup} alt="img" />
                  <p>Transfer</p>
                </div>
                <div className={styles["aside-left-div-2"]}>
                  <Image src={plus} alt="img" />
                  <p>Top Up</p>
                </div>
                <div className={styles["aside-left-div-1"]}>
                  <Image src={user} alt="img" />
                  <p>Profile</p>
                </div>
              </div>
              <div className={styles["aside-left-div-2"]}>
                <Image src={logout} alt="img" />
                <p>Logout</p>
              </div>
            </aside>
            <aside className={styles["aside-right"]}>
              <h1 className={styles["aside-right-header-1"]}>
                Edit Phone Number{" "}
              </h1>
              <p className={styles["aside-right-text-1"]}>
                Add at least one phone number for the transfer ID so you can
                start transfering your money to another user.
              </p>
              <div className={styles["informations-div"]}>
                <div className={styles["input-div"]}>
                  <div className={styles["lock-div"]}>
                    <Image src={phone} alt="img" />
                    <p className={styles["code-text"]}>+62</p>
                    <input
                      className={styles["input"]}
                      type="password"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className={styles["btn-div"]}>
                <button className={styles["change-btn"]}>
                  Edit Phone Number
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

export default home;
