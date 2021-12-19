import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Newscomponent extends Component {
    static defaultProps = {
        defaultImageUrl: "https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        pageContent: 20,
        category: "science",
        country: "in"
    }
    static propTypes = {
        defaultImageUrl: PropTypes.string,
        pageContent: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }


    async componentDidMount() {
        this.props.progress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a46b4b742bf43fbaa532945b60a59bc&pageSize=${this.props.pageContent}&page=${this.state.page}`;
        let data = await fetch(url);
        this.props.progress(50);
        let parsedData = await data.json();
        this.props.progress(100);
        this.setState({
            article: parsedData.articles,
            totalresults: parsedData.totalResults,
            loading: false
        })

    }
    constructor() {
        super();
        this.state = {
            article: [],
            loading: true,
            page: 1
        }
    }
    fetchMoreData=async ()=>{
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a46b4b742bf43fbaa532945b60a59bc&pageSize=${this.props.pageContent}&page=${this.state.page+1}`;
        this.setState({page:this.state.page+1});
        let data = await fetch(url);
       
        let parsedData = await data.json();
       
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            totalresults: parsedData.totalResults,
            loading: false
        })
    }
    // handleNext = async () => {
    //     this.setState({ loading: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a46b4b742bf43fbaa532945b60a59bc&pageSize=${this.props.pageContent}&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         article: parsedData.articles,
    //         page: this.state.page + 1,
    //         loading: false
    //     })
    // }
    // handlePrevious = async () => {
    //     this.setState({ loading: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a46b4b742bf43fbaa532945b60a59bc&pageSize=${this.props.pageContent}&page=${this.state.page - 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         article: parsedData.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     })
    // }
    render() {

        return (
            <>
               
                    <h2 className="container mb-3 text-center" style={{marginTop:80}}>{`Top Headlines - ${this.props.title}`}</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.page*this.props.pageContent}
                        next={this.fetchMoreData}
                        hasMore={this.state.page*this.props.pageContent <= this.state.totalresults}
                        loader={<Spinner />}
                        >
                             <div className="container my-4">
                    <div className="row">
                        {this.state.article.map((element) => {
                            return (
                                <div key={element.url} className="col-md-4 mb-4">
                                    <Newsitem date={new Date(element.publishedAt)} source={element.source.name} title={element.title || 'No Title'} description={element.description} imageUrl={element.urlToImage || this.props.defaultImageUrl} url={element.url} mode={this.props.mode} />
                                </div>);
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                
                {/* <div className="container d-flex justify-content-between mb-4">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevious} className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'}`}>&#8592; Previous</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalresults / this.props.pageContent)} type="button" onClick={this.handleNext} className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'}`}>Next &#8594;</button>
                </div> */}
            </>
        )
    }
}
