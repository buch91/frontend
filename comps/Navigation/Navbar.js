import Image from "next/image";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.headerContainer}>
      <div className={s.header}>
        <div className={s.headerContent}>
          <div className={s.brand}>
            <Image
              src="/kiosk-logo-black.svg"
              alt="Kiosk Logo"
              width={80}
              height={0}
            />
            <div className={s.slash}>
              <Image src="/slash.svg" alt="" width={25} height={25} />
            </div>

            {/* <div className={s.slash}>/</div> */}
            <div className={s.anchor}>Forside</div>
          </div>
          <div className={s.menuContent}>Burger</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
