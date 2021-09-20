import Image from "next/image";

import s from "./ArticleTeaser.module.css";

const ArticleTeaser = () => {
  return (
    <div className={s.container}>
      <div className={s.teaserContents}>
        <div className={s.image}></div>
        <div className={s.text}>
          <div className={s.authorAndTitle}>
            <div className={s.author}>Line Ingrid</div>
            <div className={s.articleTitle}>
              Rekordmange ændrer navn –{" "}
              <span className={s.fatTitle}>hvorfor er det et problem?</span>
            </div>
          </div>

          <div className={s.readMore}>
            <div className={s.prompt}>LÆS ELLER LYT</div>
            <div className={s.arrow}>
              <Image
                src="/arrow-red.svg"
                alt="arrow right"
                width={16}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTeaser;
