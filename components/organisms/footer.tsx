import style from "../../src/styles/style.module.css"
function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.ft_upper}>
            <div className={style.ft_title}>
                <a href="#top"><h2>Hunter.</h2></a>
            </div>
            <div className={style.ft_address}>
                <p>
                    Hunter inc. <br />
                    Tyuuouku Sapporo-si <br />
                    Hokkaidou, japan 060-0000
                </p>
            </div>
        </div>
        <div className={style.ft_lower}>
            <div className={style.copyright}>
                <p>Copyright Hunter. All Rights Reserved.</p>
            </div>
            <nav>
                <ul className={style.ft_list}>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">RECRUITING</a></li>
                    <li><a href="" className={style.ft_jp}>予約サービス利用規約</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer;