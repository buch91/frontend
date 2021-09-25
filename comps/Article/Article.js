import Image from "next/image";

import s from "./Article.module.css";

const Article = () => {
  return (
    <div className={s.container}>
      <div className={s.articleHeader}>
        <div className={s.backContents}>
          <div className={s.backArrow}>
            <Image
              src="/arrow-red-left.svg"
              alt="arrow back"
              width={33}
              height={26}
            />
          </div>
          <div className={s.backText}>Tilbage</div>
        </div>

        <div className={s.imageAndBubbleContents}>
          <div className={s.image}></div>
          <div className={s.colorBubble}>
            {/* <img
          src="/article-bubble-red-flat-edge-right.svg"
          alt="bubble red"
          width={245}
          height={336}
        /> */}
          </div>
        </div>

        <div className={s.authorAndTitle}>
          <div className={s.author}>Line Ingrid</div>
          <div className={s.articleTitle}>
            Rekordmange ændrer navn –{" "}
            <span className={s.fatTitle}>hvorfor er det et problem?</span>
          </div>
        </div>
      </div>

      <div className={s.articleOptions}>
        <div className={s.listenToArticle}>
          <div className={s.playButton}>
            <Image
              src="/play-article-red.svg"
              alt="arrow down"
              width={50}
              height={50}
            />
          </div>
          <div className={s.listenPrompt}>Lyt til indlæg</div>
        </div>

        <div className={s.readArticle}>
          <div className={s.arrow}>
            <Image
              src="/arrow-red-down.svg"
              alt="arrow down"
              width={33}
              height={26}
            />
          </div>
          <div className={s.readPrompt}>Scroll for at læse</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
