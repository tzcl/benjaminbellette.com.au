import { useCallback, useEffect, useRef } from "react";
import styles from "./Slice.module.css";

const Slice = () => {
  const title = "Mumlife";
  const text = "Oscar-nominated film";
  const img = "/assets/mumlife.png";
  const background = { background: `url(${img}) center center / cover #111;` };

  const modalRef = useRef<HTMLDialogElement>();

  function openModal() {
    modalRef.current.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalRef.current.close();
    document.body.style.overflow = "auto";
  }

  const checkEsc = useCallback((e) => {
    console.log("wtf", e);
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", checkEsc, false);

    return () => {
      document.removeEventListener("keydown", checkEsc, false);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bg} style={background}>
        <div className={styles.overlay} onClick={() => openModal()}>
          <img width="16.5" height="21" src="./assets/play.svg" />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      <dialog
        className={styles.modal}
        ref={modalRef}
        onClick={() => closeModal()}
      >
        <div className={styles.inner}>
          <i
            className="fa-solid fa-xmark"
            style={{
              color: "white",
              fontSize: 2 + "rem",
              cursor: "pointer",
              float: "right",
              marginBottom: 1 + "rem",
            }}
            onClick={() => closeModal()}
          ></i>
          <iframe
            src="https://player.vimeo.com/video/707425833"
            frameBorder="0"
            width="100%"
            height="100%"
            className={styles.item}
          />
          <img
            src="https://i.imgur.com/vByh3Ds.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/m9pUpLU.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/0o06GPO.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/du1xzlu.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/VO43cLW.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/IIM63Df.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/SZH4pKh.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/WpzfttP.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/NirDIiW.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/v72J2Jg.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/6p4g0yO.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src="https://i.imgur.com/Y9AYfO7.jpg"
            width="100%"
            height="100%"
            className={styles.item}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </dialog>
    </div>
  );
};

export default Slice;
