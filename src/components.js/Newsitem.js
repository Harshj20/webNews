import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, url, mode, date, source} = this.props;
        return (
                <div className="card" style={{ width: "100%",backgroundColor: mode === 'light' ? 'white' : '#393838', border:"2px solid black", boxShadow:"2px 2px 5px 0 white"}}>
                    <span className="position-absolute badge rounded-pill bg-danger" style={{right:-7, top:-7}}>
                        {source}
                        <span className="visually-hidden">Scource</span>
                    </span>
 
                    <img src={imageUrl} className="card-img-top" style={{height:200}} alt={`can not be rendered. The url is - ${imageUrl}`} />
                    <div className="card-body" style={{ backgroundColor: mode === 'light' ? 'white' : '#393838', color: mode === 'light' ? 'black' : 'white' }}>
                        <h5 className="card-title" style={{overflow: "hidden",textOverflow: "ellipsis", display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 2}}>{title}</h5>
                        <p className="card-text mt-3" style={{height:100 , overflowY:"auto"}}>{description}</p>
                        <div className="text-muted">
                            {date ? date.toUTCString() : 'unknown'}
                        </div>
                        <div className="d-flex justify-content-center my-4">
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: "90%" }}>Read More</a>
                        </div>
                    </div>
                </div>
        )
    }
}
