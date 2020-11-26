import React from "react";

import "./index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Index = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div style={{position: "relative"}}>
          <h1 className="title-collection mb-3 mt-4">Hôm nay ăn gì </h1>
          <div className="mt-3">
            <div dir="ltr" className="slick-slider slick-initialized">
            <button className="prev btn-nav d-flex align-items-center justify-content-center slick-arrow slick-prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slick-list">
              <div className="slick-track" style={{width: "5850px", opacity: 1},{transform: 'translate3d(-2574, 0, 0)'}}>
              <div tabIndex="-1" data-index="0" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                <div >
              <a href="#" tabIndex="-1" style={{width:"100%"}}  className="" >
                <div className="mx-2" >
                  <div className="collection-item  row-data" > 
                    <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                      <img alt="buffet lau" title="Buffet Lẩu" src="https://static.riviu.co/480/image/2020/09/17/9b574147eac4141955abff0b5b9ea4ca.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                    </div> 
                    <div className="title mx-2 mt-1" >
                      <h3 className="text-truncate px-2 py-1" >Buffet Lẩu</h3> 
                      <div >
                        <div className="review_count px-2 py-1" >313 bài viết
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div tabIndex="0" data-index="1" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                <div >
              <a href="#" tabIndex="0" style={{width:"100%"}}  className="" >
                <div className="mx-2" >
                  <div className="collection-item  row-data" > 
                    <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                      <img alt="buffet lau" title="Buffet Nướng" src="https://static.riviu.co/480/image/2020/09/17/f81665652bb4a498155fe564e7e95e66.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                    </div> 
                    <div className="title mx-2 mt-1" >
                      <h3 className="text-truncate px-2 py-1" >Buffet Nướng</h3> 
                      <div >
                        <div className="review_count px-2 py-1" >161 bài viết
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div tabIndex="1" data-index="2" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                <div >
              <a href="#" tabIndex="1" style={{width:"100%"}}  className="" >
                <div className="mx-2" >
                  <div className="collection-item  row-data" > 
                    <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                      <img alt="buffet lau" title="Hải Sản" src="https://static.riviu.co/480/image/2020/10/02/4f78b5f72d2340f7528c2ec408b0b901.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                    </div> 
                    <div className="title mx-2 mt-1" >
                      <h3 className="text-truncate px-2 py-1" >Hải Sản</h3> 
                      <div >
                        <div className="review_count px-2 py-1" >465 bài viết
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div tabIndex="2" data-index="3" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                <div >
              <a href="#" tabIndex="2" style={{width:"100%"}}  className="" >
                <div className="mx-2" >
                  <div className="collection-item  row-data" > 
                    <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                      <img alt="buffet lau" title="Cà phê Sống Ảo" src="https://static.riviu.vn/480/image/2020/07/16/7e413658781489790319f9204072020f.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                    </div> 
                    <div className="title mx-2 mt-1" >
                      <h3 className="text-truncate px-2 py-1" >Cà phê Sống Ảo</h3> 
                      <div >
                        <div className="review_count px-2 py-1" >500 bài viết
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div tabIndex="3" data-index="4" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                <div >
              <a href="#" tabIndex="3" style={{width:"100%"}}  className="" >
                <div className="mx-2" >
                  <div className="collection-item  row-data" > 
                    <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                      <img alt="buffet lau" title="Ăn Vặt" src="https://static.riviu.vn/480/image/2020/07/16/7e413658781489790319f9204072020f.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                    </div> 
                    <div className="title mx-2 mt-1" >
                      <h3 className="text-truncate px-2 py-1" >Ăn Vặt</h3> 
                      <div >
                        <div className="review_count px-2 py-1" >459 bài viết
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
              </div>
            </div>
            <button class="next btn-nav d-flex align-items-center justify-content-center slick-arrow slick-next">
              <i class="fas fa-chevron-right"></i>
            </button>
            </div>
          </div>
        </div>
        <div style={{position: "relative"}}>
          <h1 className="title-collection mb-3 mt-4"> Ẩm thực vùng miền </h1>
          <div className="mt-3">
          <div dir="ltr" className="slick-slider slick-initialized">
                <div className="slick-list">
                  <div className="slick-track" style={{width: "5850px", opacity: 1},{transform: 'translate3d(-2574, 0, 0)'}}>
                  <div tabIndex="-1" data-index="0" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                    <div >
                      <a href="#" tabIndex="-1" style={{width:"100%"}}  className="" >
                      <div className="mx-2" >
                        <div className="collection-item  row-data" > 
                          <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                            <img alt="buffet lau" title="Ẩm thực miền Bắc" src="https://static.riviu.co/480/image/2020/09/17/46542d3aeebcbba4f0ae8fadf91cad4e.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                          </div> 
                          <div className="title mx-2 mt-1" >
                            <h3 className="text-truncate px-2 py-1" >Ẩm thực miền Bắc</h3> 
                              <div >
                                <div className="review_count px-2 py-1" >500 bài viết
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                    </div>
                    <div tabIndex="0" data-index="1" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                    <div >
                      <a href="#" tabIndex="0" style={{width:"100%"}}  className="" >
                      <div className="mx-2" >
                        <div className="collection-item  row-data" > 
                          <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                            <img alt="buffet lau" title="Ẩm thực miền Trung" src="https://static.riviu.co/480/image/2020/09/17/e0d753010ea1094dc28503a6748a57b8.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                          </div> 
                          <div className="title mx-2 mt-1" >
                            <h3 className="text-truncate px-2 py-1" >Ẩm thực miền Trung</h3> 
                              <div >
                                <div className="review_count px-2 py-1" >500 bài viết
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                    </div>
                    <div tabIndex="0" data-index="1" aria-hidden="true" className="slick-slide" style={{outline:"none"},{width: "234px"}} >
                    <div >
                      <a href="#" tabIndex="0" style={{width:"100%"}}  className="" >
                      <div className="mx-2" >
                        <div className="collection-item  row-data" > 
                          <div className="thumbnail-wrapper d-flex align-items-center justify-content-center ratio_16-9"  >
                            <img alt="buffet lau" title="Ẩm thực miền Nam" src="https://static.riviu.co/480/image/2020/09/17/db24fc58b0dc9ea71dd61e7b54662b21.jpeg" className="  thumbnail-inner" style={{objectFit:"cover"}} ></img>
                          </div> 
                          <div className="title mx-2 mt-1" >
                            <h3 className="text-truncate px-2 py-1" >Ẩm thực miền Nam</h3> 
                              <div >
                                <div className="review_count px-2 py-1" >500 bài viết
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                    </div>
                </div>
                </div>
          </div>
          </div>
          
        </div>
      </div>
      
    </React.Fragment>
 
  );
};

export default Index;
