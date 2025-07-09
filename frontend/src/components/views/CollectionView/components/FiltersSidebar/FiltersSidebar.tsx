// FiltersSidebar.jsx
import styles from "./FiltersSidebar.module.scss";
import FilterImg from "../../../../../assets/images/collection_page/filter.png";
import DownArrowImg from "../../../../../assets/icons/down_arrow_marker.svg";
import RedDownArrowImg from "../../../../../assets/icons/red_down_arrow_marker.svg";
import CloseImg from "../../../../../assets/icons/close.svg"; // Іконка закриття
import { list } from "./constants";

export default function FiltersSidebar({
  isOpen,
  isOpenHandler,
}: {
  isOpen: boolean;
  isOpenHandler: (val: boolean) => void;
}) {
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
      {/* Напівпрозорий фон, який закриває меню */}
      <div className={styles.backdrop} onClick={() => isOpenHandler(false)} />

      {/* Заголовок фільтрів (десктоп) */}
      <div className={styles.filtersBlock}>
        <img src={FilterImg} alt="Filters" />
        <h3>Фільтри</h3>
      </div>

      {/* Саме меню */}
      <div className={styles.section}>
        {/* Кнопка закриття (тепер всередині меню) */}
        <button
          className={styles.closeBtn}
          onClick={() => isOpenHandler(false)}
        >
          <img src={CloseImg} alt="Close menu" />
        </button>

        {list.map((item) => (
          <details key={item.title}>
            <summary className={styles.topLevel}>
              <img
                src={RedDownArrowImg}
                alt="Arrow"
                className={styles.arrowIcon}
              />
              {item.title}
            </summary>
            <div className={styles.subsection}>
              {item.subCategory?.map((sub) => (
                <details key={sub.subCategoryName}>
                  <summary>
                    <img
                      src={DownArrowImg}
                      alt="Arrow"
                      className={styles.arrowIcon}
                    />
                    {sub.subCategoryName}
                  </summary>
                  <div>
                    <h6>
                      Одяг <span>({sub.clothesCounter})</span>
                    </h6>
                    <ul>
                      {sub.clothesList?.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                    <h6>
                      Аксесуари <span>({sub.accessoriesCounter})</span>
                    </h6>
                  </div>
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
