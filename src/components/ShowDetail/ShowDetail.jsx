/* eslint-disable react/prop-types */
import { StarRating } from "../StarRating/StarRating";
import style from "./style.module.css";

export function ShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating_container}>
        <StarRating rating={rating} />
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}
