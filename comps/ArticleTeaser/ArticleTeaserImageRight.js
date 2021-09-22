import Image from "next/image";

import s from "./ArticleTeaserImageRight.module.css";

const ArticleTeaserImageRight = () => {
  return (
    <div className={s.container}>
      <div className={s.teaserContents}>
        <div className={s.text}>
          <div className={s.authorAndTitle}>
            <div className={s.author}>Gittemarie</div>
            <div className={s.articleTitle}>
              Vi bliver nødt til at gøre op med{" "}
              <span className={s.fatTitle}>"treat yourself"-kulturen</span>
            </div>
          </div>

          <div className={s.readMore}>
            <div className={s.prompt}>LÆS ELLER LYT</div>
            <div className={s.arrow}>
              <Image
                src="/arrow-skyblue.svg"
                alt="arrow right"
                width={16}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className={s.image}></div>
      </div>
    </div>
  );
};

export default ArticleTeaserImageRight;
