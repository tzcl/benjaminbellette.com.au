import { useState } from "react";
import styles from "./BackgroundVideo.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BackgroundVideo = () => {
  const [loaded, setLoaded] = useState(false);

  function done() {
    setLoaded(true);
  }

  const videoClassName = cx("iframe", { "opacity-50": loaded });

  return (
    <div className="absolute h-full w-full">
      <div className="relative h-screen w-screen overflow-hidden">
        <iframe
          id="video"
          src="https://player.vimeo.com/video/316965018?background=1?transparent=1"
          frameBorder="0"
          allow="autoplay"
          className={videoClassName}
          onLoad={done}
        />
      </div>
    </div>
  );
};

export default BackgroundVideo;
