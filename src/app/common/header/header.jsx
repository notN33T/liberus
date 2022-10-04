import styles from './css/header.module.sass';
import waxImg from '../../../assets/wax-token.png'
import avatarImg from '../../../assets/ava.jpg';
import classnames from 'classnames';

export default function Header() {
  return(
  <div className={styles.header}>
    <div className={styles.header_c}>
      <div className={styles.header_buttons_c}>
        <p className={styles.logo_text}>⚔Liberius</p>
        <p className={classnames(styles.header_text, styles.hover_1)}>Leaderboard</p>

        {/* <p className={classnames(styles.header_text, styles.hover_1)}>Inventory</p> */}
        {/* <p className={classnames(styles.header_text, styles.hover_1)}>Battles</p> */}

        <p className={classnames(styles.about_text, styles.hover_1)}>About us</p>
      </div>
      <div className={styles.profile_c}><p className={styles.hover_1}>My Profile</p><p className={styles.profile_left_stick}>|</p> <div className={styles.profile_avatar_c}><img src={avatarImg} alt="avatar" /></div>
        <div className={styles.profile_cash_c}>
          <div className={styles.waxp_info_c}>
            <p className={styles.waxp_cash}><span className={styles.profile_cash_c_amount}>0</span></p><img src={waxImg} alt="waxp" />
          </div>

          <div className={styles.points_info_c}>
            <p className={styles.points_cash}><span className={styles.profile_cash_c_amount}>0</span> points</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}