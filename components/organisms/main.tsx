import styles from "../../src/styles/style.module.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.refresh(); // 初期化済みのAOSを有効にする
  }, []);

  return (
    <>
      <section className={styles.top_wrapper}>
        <div className={styles.top_bgimg}>
          <div className={`${styles.bgimg} ${styles.pic1}`}></div>
          <div className={`${styles.bgimg} ${styles.pic2}`}></div>
        </div>
        <div className={styles.top_scroll}>
          <p>&gt;</p>
        </div>
      </section>
      <div className={styles.cc_bg}>
        <div className={styles.inner}>
          <section id="concept" className={styles.cc_area}>
            <div className={styles.cc_left}>
              <div className={styles.cc_title}>
                <h2>CONCEPT</h2>
                <p>私たちが目指すもの</p>
              </div>
              <div className={styles.cc_catchcopy}>
                <p>Hello,brand new me.</p>
              </div>
            </div>
            <div className={styles.cc_right}>
              <p>
                私たちの願いは自信を持っていただくこと。
                <br />
                当サロンにお越しになったお客様の中より、
                <br />
                自信がつき人生が楽しいとのお声を頂いたこともあります。
              </p>
              <p>
                髪一つで人の印象は大きく変わります。
                <br />
                私たちはあなたが望む以上の姿を提供します。
                <br />
                そうして前を向いて自信をもって生きてほしい。
              </p>
              <p>その為に我々は髪のみならず様々な側面でサポートいたします。 そうして身も心も若々しく健康に、 当サロンはそんなあなたの想いを全力でサポート致します。</p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.sv_bg}>
        <div className={styles.inner}>
          <section id="survice" className={styles.sv_area}>
            <div className={styles.sv_left}>
              <div className={styles.sv_title}>
                <h2>SURVICE</h2>
                <p>サービス</p>
              </div>
              <div className={styles.sv_catchcopy}>
                <p>Give you best condition.</p>
              </div>
            </div>
            <div className={styles.sv_right}>
              <div className={`${styles.esthe} ${styles.sv_item}`} data-aos="fade-left" data-aos-duration="1000">
                <div className={styles.sv_logo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_flower1}`} viewBox="0 0 16 16">
                    <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </div>
                <div className={styles.sv_content}>
                  <h2>ESTHE</h2>
                  <p>リラクゼーション お肌のエステ ボディのエステ 肌質、体質改善 等よりさらなる美を提供いたします。</p>
                </div>
              </div>
              <div className={`${styles.hair} ${styles.sv_item}`} data-aos="fade-left" data-aos-duration="1000">
                <div className={styles.sv_logo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_scissors}`} viewBox="0 0 16 16">
                    <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                  </svg>
                </div>
                <div className={styles.sv_content}>
                  <h2>HAIR</h2>
                  <p>ご希望の髪型、髪色以外にもこちらからお客様に適した 髪型等をご提案させていただくことも可能です。</p>
                </div>
              </div>
              <div className={`${styles.nail} ${styles.sv_item}`} data-aos="fade-left" data-aos-duration="1000">
                <div className={styles.sv_logo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_droplet}`} viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                    />
                    <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                  </svg>
                </div>
                <div className={styles.sv_content}>
                  <h2>NAIL</h2>
                  <p>プロの技によりムラの無い、均一な仕上がり、 難しいデザインもご相談の上ご納得いただける完成をお約束いたします。</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="greeting" className={styles.gt_bg}>
        <div className={styles.inner}>
          <section id="concept" className={styles.gt_area}>
            <div className={styles.gt_left}>
              <div className={styles.gt_title}>
                <h2>GREETING</h2>
                <p>代表挨拶</p>
              </div>
              <div className={styles.gt_catchcopy}>
                <p>Wish you happiness and health.</p>
              </div>
            </div>
            <div className={styles.gt_right}>
              <div className={styles.gt_content}>
                <p>
                  先述しました通り我々の願いは自信を持っていただくこと。 私たち女性は常に若々しく綺麗でいたいもの、その為には 内と外両方の側面から自分を磨かなくてはなりません。 当サロンに通っていただきますと目に見えて美しくなります。
                  目に見えて美しくなったという実績があなたに自信をもたらし、 その自信が更に内からもあなたを美しくするのです。
                  <br />
                  <br />
                  一度の体験で世界が変わることでしょう。 是非当サロンで美に磨きをかけてよりよい人生を送れることをここに願って。
                </p>
              </div>
              <div className={styles.gt_name}>
                <p>
                  <span>株式会社Hunter.</span>
                  <br />
                  代表取締役社長　美川美子
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.salon_img}></div>
      <div className={styles.vc_bg}>
        <div className={styles.inner}>
          <section id="voice" className={styles.vc_area}>
            <div className={styles.vc_title}>
              <h2>VOICE</h2>
              <p>お客様の声</p>
            </div>
            <div className={styles.vc_content}>
              <ul className={styles.vc_list}>
                <li className={styles.one} data-aos="fade-left" data-aos-duration="1000">
                  <div className={styles.vc_head}>
                    <div className={styles.vc_number}>
                      <p>01</p>
                    </div>
                    <div className={styles.vc_head_title}>
                      <p className={styles.vc_upper}>お世話になり5年になります</p>
                      <p className={styles.vc_lower}>A.K 様 / 40代</p>
                    </div>
                  </div>
                  <div className={styles.vc_body}>
                    <p>こちらのサロンでお世話になり、はや5年が経ちました。 それもスタッフの方々の確かな技術と素晴らしい接客あってこそです。 ちょうどいい距離感を5年も保ち続けてくれているスタッフの方ありがとうございます。</p>
                  </div>
                </li>
                <li className={styles.two} data-aos="fade-right" data-aos-duration="1200">
                  <div className={styles.vc_head}>
                    <div className={styles.vc_number}>
                      <p>02</p>
                    </div>
                    <div className={styles.vc_head_title}>
                      <p className={styles.vc_upper}>周りの同性から褒められることが増えました</p>
                      <p className={styles.vc_lower}>Y.A 様 / 20代</p>
                    </div>
                  </div>
                  <div className={styles.vc_body}>
                    <p>女性の方から褒められることというのはほとんど無かったのですが、 サロンに通い始めてからというものの肌やネイルに至るまで 何したらそんなになるのと聞かれるのが今では誇らしいです。</p>
                  </div>
                </li>
                <li className={styles.three} data-aos="fade-left" data-aos-duration="1000">
                  <div className={styles.vc_head}>
                    <div className={styles.vc_number}>
                      <p>03</p>
                    </div>
                    <div className={styles.vc_head_title}>
                      <p className={styles.vc_upper}>20代と間違えられることが嬉しいです</p>
                      <p className={styles.vc_lower}>T.K 様 / 30代</p>
                    </div>
                  </div>
                  <div className={styles.vc_body}>
                    <p>もう30代も半ばに差し掛かってきた私ではありますが、 初対面の方々には年齢を言うととても驚かれます。 その反応がとてもうれしくて確かな自信につながっています。</p>
                  </div>
                </li>
                <li className={styles.four} data-aos="fade-right" data-aos-duration="1200">
                  <div className={styles.vc_head}>
                    <div className={styles.vc_number}>
                      <p>04</p>
                    </div>
                    <div className={styles.vc_head_title}>
                      <p className={styles.vc_upper}>同窓会で驚かれました</p>
                      <p className={styles.vc_lower}>H.M 様 / 60代</p>
                    </div>
                  </div>
                  <div className={styles.vc_body}>
                    <p>同窓会があるということで半年ほど通ったのですが、 自分でも通い始める前と比べると見違えるようで 案の定同窓会では一番若々しいということで周りに驚かれました。</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.sh_bg}>
        <div className={styles.inner}>
          <section id="shop" className={styles.sh_area}>
            <div className={styles.sh_title}>
              <h2>SHOP</h2>
              <p>店舗案内</p>
            </div>
            <div className={styles.sh_img}>
              <img className={styles.mv_img} src="./images/salon9.png" alt="サロンの内装" />
              <img className={styles.sp_img} src="./images/salon5.png" alt="サロンの内装" />
            </div>
            <div className={styles.sh_info}>
              <dl>
                <dt>所在地</dt>
                <dd>北海道札幌市美区美１条美１丁目１－１</dd>
              </dl>
              <dl>
                <dt>営業時間</dt>
                <dd>10：00 ~ 20：00</dd>
              </dl>
              <dl>
                <dt>定休日</dt>
                <dd>水曜日・年末年始</dd>
              </dl>
              <dl>
                <dt>電話番号</dt>
                <dd>0120-000-000</dd>
              </dl>
              <dl>
                <dt>電車でお越しの方</dt>
                <dd>札幌駅南口から出てそのまま２分ほど歩くと右手に見える青の建物です</dd>
              </dl>
              <dl>
                <dt>お車でお越しの方</dt>
                <dd>大変申し訳ございませんが当店駐車場がございませんので 、近くの駐車場にとめられるか公共交通機関をご利用してお越しください。</dd>
              </dl>
              <dl>
                <dt>予約に関して</dt>
                <dd>当店は電話とネット予約となっております。 お電話の場合は10：00 ~ 19：00の間でいただけると幸いです。</dd>
              </dl>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.rv_bg}>
        <div className={styles.inner}>
          <section id="reserve" className={styles.rv_area}>
            <div className={styles.rv_title}>
              <h2>RESERVE</h2>
              <p>ご予約</p>
            </div>
            <div className={styles.rv_message}>
              <p>
                ご予約は、お電話または
                <br />
                予約専用ページから承っております。
              </p>
            </div>
            <div className={styles.rv_info}>
              <div className={styles.rv_tel}>
                <a href="tel:0120-000-000">
                  0120-000-000
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_telephone_forward}`} viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className={styles.rv_web}>
                <a href="./reserve.html">
                  WEB予約
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_pc_display_horizontal}`} viewBox="0 0 16 16">
                      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
