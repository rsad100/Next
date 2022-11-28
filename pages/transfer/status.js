import React, { Component, Fragment } from "react";
import styles from "../../styles/Status.module.css";
import Image from "next/image";

import Header from "../../components/header";
import Footer from "../../components/footer";

import dashboard from "../../assets/dashboardgrey.png";
import arrowup from "../../assets/arrowupblue.png";
import plus from "../../assets/plus.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.png";
import profile1 from "../../assets/profile1.png";
import success from "../../assets/success.png";

import withAuth from "../../helpers/withAuth";

class Status extends Component {
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
                <div className={styles["aside-left-div-1"]}>
                  <Image src={arrowup} alt="img" />
                  <p>Transfer</p>
                </div>
                <div className={styles["aside-left-div-2"]}>
                  <Image src={plus} alt="img" />
                  <p>Top Up</p>
                </div>
                <div className={styles["aside-left-div-2"]}>
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
              <div className={styles["success-div"]}>
                <Image className={styles["success"]} src={success} alt="img" />
                <p className={styles["aside-right-text-3"]}>Transfer Success</p>
              </div>
              <div className={styles["details-div"]}>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Amount</p>
                  <p className={styles["detail-div-text-2"]}>Rp100.000</p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Balance Left</p>
                  <p className={styles["detail-div-text-2"]}>Rp20.000</p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Date & Time</p>
                  <p className={styles["detail-div-text-2"]}>
                    May 11, 2020 - 12.20
                  </p>
                </div>
                <div className={styles["detail-div"]}>
                  <p className={styles["detail-div-text-1"]}>Notes</p>
                  <p className={styles["detail-div-text-2"]}>
                    For buying some socks
                  </p>
                </div>
              </div>
              <h1 className={styles["aside-right-header-1"]}>Transfer To</h1>
              <div className={styles["aside-right-div-1"]}>
                <Image
                  className={styles["search-image"]}
                  src={profile1}
                  alt="img"
                />
                <div>
                  <p className={styles["aside-right-text-1"]}>Samuel Suhi</p>
                  <p className={styles["aside-right-text-2"]}>
                    +62 813-8492-9994
                  </p>
                </div>
              </div>
              <div className={styles["btn-div"]}>
                <button className={styles["continue-btn"]}>Back to Home</button>
                <button className={styles["download-btn"]}>Download PDF</button>
              </div>
            </aside>
          </section>
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default withAuth(Status);
