/* eslint-disable react/prop-types */
import { ShowListItem } from "../ShowListItem/ShowListItem";
import style from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={style.title}>You might like:</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={style.show_item} key={tvShow.id}>
              <ShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
