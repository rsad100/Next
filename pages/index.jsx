import React, { Component, Fragment } from "react";
import styles from "../styles/Index.module.css";
import Image from "next/image";

import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import microsoft from "../assets/microsoft.png";
import dropbox from "../assets/dropbox.png";
import hm from "../assets/hm.png";
import airbnb from "../assets/airbnb.png";
import canon from "../assets/canon.png";
import dell from "../assets/dell.png";
import phone2 from "../assets/phone2.png";
import lock2 from "../assets/lock2.png";
import download from "../assets/download.png";
import arrowleft from "../assets/arrowleft.png";
import arrowright2 from "../assets/arrowright2.png";
import profile5 from "../assets/profile5.png";

class home extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main"]}>
          <section className={styles["section-1"]}>
            <div className={styles["section-1-div-1"]}>
              <h1 className={styles["section-1-header-1"]}>FazzPay</h1>
              <div>
                <button className={styles["login-btn"]}>Login</button>
                <button className={styles["signup-btn"]}>Sign Up</button>
              </div>
            </div>
            <div className={styles["section-1-aside-div"]}>
              <aside>
                <Image src={landing1} alt="img" />
              </aside>
              <aside className={styles["section-1-aside-right"]}>
                <div className={styles["section-1-header-div"]}>
                  <h1>
                    <span className={styles["section-1-header-2"]}>
                      Awesome App For Saving{" "}
                    </span>
                    <span className={styles["section-1-header-3"]}>Time.</span>
                  </h1>
                </div>
                <p className={styles["section-1-text-1"]}>
                  We bring you a mobile app for banking problems that oftenly
                  wasting much of your times.
                </p>
                <button className={styles["section-1-btn"]}>Try It Free</button>
                <p className={styles["section-1-text-2"]}>Available on</p>
                <div className={styles["section-1-img-div"]}>
                  <Image src={playstore} alt="img" />
                  <Image src={appstore} alt="img" />
                </div>
              </aside>
            </div>
          </section>
          <section className={styles["section-2"]}>
            <Image src={microsoft} alt="img" />
            <Image src={dropbox} alt="img" />
            <Image src={hm} alt="img" />
            <Image src={airbnb} alt="img" />
            <Image src={canon} alt="img" />
            <Image src={dell} alt="img" />
          </section>
          <section className={styles["section-3"]}>
            <h1 className={styles["section-3-header-div"]}>
              <span className={styles["section-3-header-1"]}>About </span>
              <span className={styles["section-3-header-2"]}>
                the Application.
              </span>
            </h1>
            <p className={styles["section-3-text"]}>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <div className={styles["section-3-div-2"]}>
              <div className={styles["section-3-div-1"]}>
                <Image
                  className={styles["section-3-img-1"]}
                  src={phone2}
                  alt="img"
                />
                <h1 className={styles["section-3-text-2"]}>24/7 Support</h1>
                <p className={styles["section-3-text-3"]}>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
              <div className={styles["section-3-div-4"]}>
                <Image
                  className={styles["section-3-img-1"]}
                  src={lock2}
                  alt="img"
                />
                <h1 className={styles["section-3-text-2"]}>24/7 Support</h1>
                <p className={styles["section-3-text-3"]}>
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </p>
              </div>
              <div className={styles["section-3-div-1"]}>
                <Image
                  className={styles["section-3-img-1"]}
                  src={download}
                  alt="img"
                />
                <h1 className={styles["section-3-text-2"]}>24/7 Support</h1>
                <p className={styles["section-3-text-3"]}>
                  Zwallet is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </p>
              </div>
            </div>
          </section>
          <section className={styles["section-4"]}>
            <aside>
              <Image src={landing2} alt="img" />
            </aside>
            <aside className={styles["section-4-aside-right"]}>
              <h1 className={styles["section-4-header-div"]}>
                <span className={styles["section-4-header-1"]}>All The </span>
                <span className={styles["section-4-header-2"]}>Great </span>
                <span className={styles["section-4-header-1"]}>
                  FazzPay Features.
                </span>
              </h1>
              <div className={styles["section-4-div-2"]}>
                <div className={styles["section-4-div-1"]}>
                  <div className={styles["section-4-div-1-subdiv"]}>
                    <p className={styles["section-4-text-1"]}>1.</p>
                    <p className={styles["section-4-text-2"]}>Small Fee</p>
                  </div>
                  <p className={styles["section-4-text-3"]}>
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>
                <div className={styles["section-4-div-1"]}>
                  <div className={styles["section-4-div-1-subdiv"]}>
                    <p className={styles["section-4-text-1"]}>2.</p>
                    <p className={styles["section-4-text-2"]}>Data Secured</p>
                  </div>
                  <p className={styles["section-4-text-3"]}>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </div>
                <div className={styles["section-4-div-1"]}>
                  <div className={styles["section-4-div-1-subdiv"]}>
                    <p className={styles["section-4-text-1"]}>3.</p>
                    <p className={styles["section-4-text-2"]}>User Friendly</p>
                  </div>
                  <p className={styles["section-4-text-3"]}>
                    FazzPay come up with modern and sleek design and not
                    complicated.
                  </p>
                </div>
              </div>
            </aside>
          </section>
          <section className={styles["section-5"]}>
            <h1 className={styles["section-5-header-div"]}>
              <span className={styles["section-5-header-1"]}>
                What Users are{" "}
              </span>
              <span className={styles["section-5-header-2"]}>Saying.</span>
            </h1>
            <p className={styles["section-5-text-1"]}>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <div className={styles["section-5-div-1"]}>
              <div className={styles["section-5-arrow-div"]}>
                <Image src={arrowleft} alt="img" />
              </div>
              <div className={styles["section-5-div-2"]}>
                <Image
                  className={styles["section-5-img"]}
                  src={profile5}
                  alt="img"
                />
                <h1 className={styles["section-5-header-3"]}>
                  Alex Hansinburg
                </h1>
                <p className={styles["section-5-text-2"]}>Designer</p>
                <p className={styles["section-5-text-3"]}>
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </div>
              <div className={styles["section-5-arrow-div"]}>
                <Image src={arrowright2} alt="img" />
              </div>
            </div>
          </section>
          <section className={styles["footer"]}>
            <h1 className={styles["footer-header-1"]}>FazzPay</h1>
            <p className={styles["footer-text-1"]}>
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
            <div className={styles["footer-line"]}></div>
            <div className={styles["footer-div-1"]}>
              <p className={styles["footer-text-2"]}>
                2020 FazzPay. All right reserved.
              </p>
              <div className={styles["footer-div-2"]}>
                <p className={styles["footer-text-3"]}>+62 5637 8882 9901</p>
                <p className={styles["footer-text-3"]}>contact@fazzpay.com</p>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default home;
