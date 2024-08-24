/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/location.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
            Loyiha strategik jihatdan eng qulay joyda joylashgan. Majmua Samarqand shahri markazida boʻlib, qulay infratuzilmaga ega. Bu yerda har bir kundalik ehtiyojingiz uchun barcha zarur sharoitlar taqdim etilgan.
            </p>
            <p className="location_text">
            Barcha asosiy infratuzilma obyektlari, ish joylari, taʼlim va sogʻliqni saqlash muassasalariga oson kirish imkonini beradi. Endi uzoq yoʻl yurish yoki tirbandliklarda vaqt yoʻqotish haqida xavotir olmasangiz ham boʻladi.
            </p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
            Yaqin atrofda yashil bogʻlar, sport majmualari va koʻngilochar maskanlar 
joylashgan boʻlib, dam olish va koʻngilochar tadbirlar oʻtkazish uchun 
ajoyib joylarni taqdim etadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
