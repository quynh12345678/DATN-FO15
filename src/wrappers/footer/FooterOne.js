import React from "react";

const FooterOne = () => {

	return (
		<footer >
<div className="footerBox">
    <div className="container">
        <div className="top">
            <div className="item infoFooter">
                <div className="logoBox">
                    <a href='/'>
                    <img className="logoBox" src="/assets/logo.jpg" />
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
                            <a>Visa, Master Card</a>
                        </li>
                        <li>
                            <i className="fa fa-circle-o"></i>
                            <a>Thanh toán khi nhận hàng</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='item menuBottom'>
                <div className='title'>
                    <a href='javascript:void(0);'  title='HỖ TRỢ KHÁCH HÀNG'>HỖ TRỢ KHÁCH HÀNG</a>
                    <span className='open'></span>
                </div>
                <ul>
                    <li>
                        <i className='fa fa-circle-o' aria-hidden='true'></i><a href='/giao-hang-tra-hang'  title='Giao hàng và trả hàng'>Giao hàng và trả hàng</a>
                    </li>
                    <li>
                        <i className='fa fa-circle-o' aria-hidden='true'></i><a href='/bao-hanh'  title='Chính sách bảo hành'>Chính sách bảo hành</a>
                    </li>
                    <li>
                        <i className='fa fa-circle-o' aria-hidden='true'></i><a href='/bao-mat-thong-tin'  title='Bảo mật thông tin'>Bảo mật thông tin</a>
                    </li>
                    <li>
                        <i className='fa fa-circle-o' aria-hidden='true'></i><a href='https://aobongda.net/dai-ly'  title='Hệ thống chi nhánh'>Hệ thống chi nhánh</a>
                    </li>
                </ul>
            </div>
            <div className="socialBox">
                <div className="box">
                    <div className="text">
                        <a href='javascript:void(0);' title='ÁO BÓNG ĐÁ TRÊN'>ÁO BÓNG ĐÁ TRÊN</a>:
                    </div>
                    <ul>
                        <li>
                            <a href='https://web.facebook.com/aobongdanetshop/' target='_blank' title=''>
                            <img alt="" className="lazyload" src="/view/img/fbicon_9806_HasThumb_Thumb.png" />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/@AOBONGDANETOFFICIAL' target='_blank' title=''>
                            <img alt="" className="lazyload" src="/view/img/youtubeicon_9454_HasThumb_Thumb.png" />
                            </a>
                        </li>
                    </ul>
                    <div className="bct">
                        <a href="http://online.gov.vn/Home/WebDetails/7926" target="_blank" title="Đã đăng ký với bộ công thương">
                        <img src="/view/img/bct.png" alt="Đã đăng ký với bộ công thương" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="fbPage">
                <div className="title">
                    <a href='javascript:void(0);' title='FANPAGE FACEBOOK'>FANPAGE FACEBOOK</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="bottomBox">
    <div className="text">Bản quyền © {new Date().getFullYear()} của chúng tôi </div>
</div>
<div className="actionFix">
    <ul>
        <li className="phone">
            <a href="tel:0989248835" title="Hotline">
            <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
        </li>
        <li className='icon'>
            <a href='https://zalo.me/0943039054' target='_blank' title=''>
            <img alt="" className="lazyload" src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw' data-src="https://aobongda.net/pic/banner/zaloicon_8309_HasThumb_Thumb.png" />
            </a>
        </li>
        <li className='icon'>
            <a href='https://www.messenger.com/t/1847033885584162/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0' target='_blank' title=''>
            <img alt="" className="lazyload" src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw' data-src="https://aobongda.net/pic/banner/thiet-ke-chua-co-ten-53_8182_HasThumb_Thumb.png" />
            </a>
        </li>
        <li className='icon'>
            <a href='https://shopee.vn/aobongda.net' target='_blank' title=''>
            <img alt="" className="lazyload" src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw' data-src="https://aobongda.net/pic/banner/thiet-ke-chua-co-ten-52_3532_HasThumb_Thumb.png" />
            </a>
        </li>
        <li className='icon'>
            <a href='https://www.tiktok.com/@aobongdanet.official' target='_blank' title=''>
            <img alt="" className="lazyload" src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw' data-src="https://aobongda.net/pic/banner/tiktokicon_5273_HasThumb_Thumb.png" />
            </a>
        </li>
        <li className="top">
            <a href="javascript:void(0);" className="btnTop" title="Lên đầu trang"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a>
        </li>
    </ul>
</div>
		</footer >
	);
};

export default FooterOne;
