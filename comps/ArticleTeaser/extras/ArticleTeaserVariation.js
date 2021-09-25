import Image from "next/image";

import s from "./ArticleTeaserVariation.module.css";

const ArticleTeaserVariation = () => {
  return (
    <div className={s.container}>
      <div className={s.teaserContents}>
        <div className={s.image}></div>
        <div className={s.text}>
          <div className={s.authorAndTitle}>
            <div className={s.author}>Amin Safari</div>
            <div className={s.articleTitle}>
              <span className={s.fatTitle}>Nye sange fra danske artister</span>
              {" "}du skal høre, lige nu
            </div>
          </div>

          <div className={s.readMore}>
            <div className={s.prompt}>LÆS ELLER LYT</div>
            <div className={s.arrow}>
              <Image
                src="/arrow-purple.svg"
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

export default ArticleTeaserVariation;
