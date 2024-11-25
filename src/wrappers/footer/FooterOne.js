import React from "react";

const FooterOne = () => {
  return (
    <footer>
      <div className="footerBox">
        <div className="container">
          <div className="top">
            <div className="item infoFooter">
              <div className="logoBox">
                <a href="/">
                  <img className="logoBox" src="/assets/logoo2.jpg" />
                </a>
              </div>
              <div className="menuBottom">
                <div className="title">
                  <a>Chấp nhận thanh toán</a>
                  <span className="open"></span>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-circle-o"></i>
                    <a>Chuyển khoản ngân hàng</a>
                  </li>
                  <li>
                    <i className="fa fa-circle-o"></i>
                    <a>Visa, Masters Cards</a>
                  </li>
                  <li>
                    <i className="fa fa-circle-o"></i>
                    <a>Thanh toán khi nhận hàng nhé anh em</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item menuBottom">
              <div className="title">
                <a href="javascript:void(0);" title="HỖ TRỢ KHÁCH HÀNG">
                  HỖ TRỢ KHÁCH HÀNG 24/7
                </a>
                <span className="open"></span>
              </div>
              <ul>
                <li>
                  <i className="fa fa-circle-o" aria-hidden="true"></i>
                  <a href="/giao-hang-tra-hang" title="Giao hàng và trả hàng">
                    Giao hàng và trả hàng
                  </a>
                </li>
                <li>
                  <i className="fa fa-circle-o" aria-hidden="true"></i>
                  <a href="/bao-hanh" title="Chính sách bảo hành">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <i className="fa fa-circle-o" aria-hidden="true"></i>
                  <a href="/bao-mat-thong-tin" title="Bảo mật thông tin">
                    Bảo mật thông tin
                  </a>
                </li>
                <li>
                  <i className="fa fa-circle-o" aria-hidden="true"></i>
                  <a
                    href="https://aobongda.net/dai-ly"
                    title="Hệ thống chi nhánh"
                  >
                    Hệ thống chi nhánh
                  </a>
                </li>
              </ul>
            </div>
            <div className="socialBox">
              <div className="box">
                <div className="text">
                  <a href="javascript:void(0);" title="ÁO BÓNG ĐÁ TRÊN">
                    ÁO BÓNG ĐÁ TRÊN
                  </a>
                  :
                </div>
                <ul>
                  <li>
                    <a
                      href="https://web.facebook.com/aobongdanetshop/"
                      target="_blank"
                      title=""
                    >
                      <img
                        alt=""
                        className="lazyload"
                        src="/view/img/fbicon_9806_HasThumb_Thumb.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@AOBONGDANETOFFICIAL"
                      target="_blank"
                      title=""
                    >
                      <img
                        alt=""
                        className="lazyload"
                        src="/view/img/youtubeicon_9454_HasThumb_Thumb.png"
                      />
                    </a>
                  </li>
                </ul>
                <div className="bct">
                  <a
                    href="http://online.gov.vn/Home/WebDetails/7926"
                    target="_blank"
                    title="Đã đăng ký với bộ công thương"
                  >
                    <img
                      src="/view/img/bct.png"
                      alt="Đã đăng ký với bộ công thương"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="fbPage">
              <div className="title">
                <a href="javascript:void(0);" title="FANPAGE FACEBOOK">
                  FANPAGE FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomBox">
        <div className="text">
          Bản quyền © {new Date().getFullYear()} của chúng tôi{" "}
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
