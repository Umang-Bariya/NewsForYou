import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <div>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">
                            {description}...
                        </p>
                        <p className="card-text"> <small className="text-muted"> By {!author ? "Unkonown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">
                            Read-More
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
