import React, { Component } from 'react'

class Post extends Component{
    render(){
        return(
            <div className="col-flex item">
            <div className="article">
              <a href="#">                
                <div className="post-img-wrapper">
                  <div className="post-img" style={{backgroundImage: `url(${this.props.data.image})`}}>
                  </div>      
                </div>
              </a>
              <div className="contents"> 
                <div className="blogtitletop">
                  <div className="cat-title">{this.props.data.category}</div>
                  <span>{this.props.data.date}</span>
                </div>
                <div>
                  <h3 className="blog-title">
                    <a href="https://ymedialabs.com/measure-product-success/">
                    {this.props.data.name}
                    </a>
                  </h3>
                </div>
                <div className="excerpt">
                  {this.props.data.metaData.description}
                </div>
              </div>  
            </div>
          </div>
        );
    }
}

export default Post;