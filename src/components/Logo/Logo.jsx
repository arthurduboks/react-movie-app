/* eslint-disable react/prop-types */
import style from "./style.module.css";
export default function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={img} alt="Logo" />

        <div className={style.title}>{title}</div>
      </div>
      <div className={style.subtitle}>{subtitle}</div>
    </>
  );
}
