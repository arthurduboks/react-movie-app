import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import style from "./style.module.css";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { ShowDetail } from "./components/ShowDetail/ShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentShow, setCurrentShow] = useState();
  const [recoList, setRecoList] = useState([]);

  async function fetchPopular() {
    try {
      const popularShowList = await TVShowAPI.fetchPopular();
      if (popularShowList.length > 0) {
        setCurrentShow(popularShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  }

  async function fetchRecos(tvShowId) {
    try {
      const recoShowList = await TVShowAPI.fetchRecos(tvShowId);
      if (recoShowList.length > 0) {
        setRecoList(recoShowList.slice(0, 10));
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  }

  async function fetchByTitle(title) {
    try {
      const response = await TVShowAPI.fetchByTitle(title);
      if (response.length > 0) {
        setCurrentShow(response[0]);
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentShow) fetchRecos(currentShow.id);
  }, [currentShow]);

  function updateCurrentShow(tvShow) {
    setCurrentShow(tvShow);
  }
  return (
    <div
      className={style.main_container}
      style={{
        background: currentShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("${BACKDROP_BASE_URL}${currentShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Bingewatch"
              subtitle="Find your next binge"
            />
          </div>

          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>
        {currentShow && <ShowDetail tvShow={currentShow} />}
      </div>
      <div className={style.recommended_tv_shows}>
        {currentShow && (
          <TVShowList onClickItem={updateCurrentShow} tvShowList={recoList} />
        )}
      </div>
    </div>
  );
}
