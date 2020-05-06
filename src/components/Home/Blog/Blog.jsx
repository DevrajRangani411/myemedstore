import React, { Component } from "react";
class Blog extends Component {
  render() {
    return (
      <div className="col-flex item">
        <div className="article">
          <a href="#">
            <div className="post-img-wrapper">
              <div
                className="post-img"
                style={{
                  backgroundImage:
                    "url( https://ymedialabs.com/wp-content/uploads/2017/09/MG_7308-800x450.jpg)"
                }}
              ></div>
            </div>
          </a>
          <div className="contents">
            <div className="blogtitletop">
              <div className="cat-title">Leadership</div>
              <span>13 Aug 2017</span>
            </div>
            <div>
              <h3 className="blog-title">
                <a href="https://ymedialabs.com/measure-product-success/">
                  How Do You Measure Product Success?
                </a>
              </h3>
            </div>
            <div className="excerpt">
              Leaders constantly talk about the importance of innovation in the
              workplace, but most fail to sustain a truly innovative company
              culture.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
