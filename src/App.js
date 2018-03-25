import React, { Component } from 'react';
import {
  ReactiveBase,
  SelectedFilters,
  ResultCard
} from '@appbaseio/reactivesearch';
import Navbar from './Components/Navbar.js';
import Leftbar from './Components/Leftbar.js';
import Tooltip from './Components/tooltip.js';
import './App.css';

require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,message: "🔬Show Filters",flag:false,total_results:0
    };
  }



  handleClick()
  {
    this.setState({isClicked: !this.state.isClicked, message: this.state.isClicked?"🔬 Show Filters":"🎬 Show Movies"})
  }
  render() {
    return (
          <div className="main-container">

                <ReactiveBase
                app="Movie-Search"
                credentials={process.env.REACT_APP_CLIENT_SECRET}
                theme={{
                  typography: {
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
                    fontSize: '16px',
                  },
                colors: {
                  textColor: '#fff',
                  backgroundColor: '#212121',
                  primaryTextColor: '#fff',
                  primaryColor: '#2196F3',
                  titleColor: '#fff',
                  alertColor: '#d9534f',
                  borderColor: '#666',
                }
              }}
      >

              <Navbar />

              <div className="sub-container">

                  <Leftbar  isClicked={this.state.isClicked} />

                 <div className={this.state.isClicked?"result-container-optional":"result-container"} >

                        <SelectedFilters
                            showClearAll={true}
                            clearAllLabel="Clear filters"
                        />

                        <ResultCard
                            componentId="results"
                            dataField="title"
                            react={{
                              and: ["mainSearch","dateFilter","RangeSlider","language-list","date-filter"]
                            }}
                            pagination={true}
                            className="Result_card"
                            paginationAt="bottom"
                            pages={5}
                            size={12}
                            Loader="Loading..."
                            noResults="No results were found..."
                            sortOptions={[
                                { dataField: "popularity", sortBy: "desc", label: "Sort by Popularity(High to Low)\u00A0 \u00A0"},
                                { dataField: "vote_average", sortBy: "desc", label: "Sort by Ratings(High to Low) \u00A0"},
                                { dataField: "title.raw", sortBy: "asc", label: "Sort by Title A->Z \u00A0"},
                                { dataField: "title.raw", sortBy: "desc", label: "Sort by Title Z->A \u00A0"},
                                { dataField: "revenue", sortBy: "desc", label: "Sort by Revenue(High to Low) \u00A0"}
                              ]}
                           innerClass={{
                             image: 'result-image',
                             title: 'result-title',
                             listItem: 'result-item',
                             list: 'list-container',
                             sortOptions: 'sort-options',
                             resultStats: 'result-stats',
                             resultsInfo: 'result-list-info',
                             poweredBy: 'powered-by',
                          }}

                      onData={
                            function(res) {
                                      return {
                                            image: "https://image.tmdb.org/t/p/w500"+ res.poster_path,
                                            description: (
                                                <div className="result-description">
                                                        <div className="main-description"   >
                                                              <Tooltip
                                                                      placement="left"
                                                                      tooltipContent={(
                                                                                      <div className="tooltip-content">
                                                                                              <p>
                                                                                                        <b className="sub-title">Popularity Score :</b>
                                                                                                        <span className="subDescription" > {res.popularity}</span>
                                                                                              </p>
                                                                                              {(res.tagline) ?
                                                                                              (<p className="result-tagline">
                                                                                                        <b className="sub-title">Tagline :</b>
                                                                                                        <span className="subDescription" >{res.tagline}</span>
                                                                                              </p>) :null}
                                                                                              <p>
                                                                                                        <b className="sub-title">Revenue :</b>
                                                                                                        <span className="subDescription" > ${res.revenue}</span>
                                                                                              </p>
                                                                                        </div>)}
                                                                      tooltipClasses="tooltip-class"
                                                                      componentClasses="tooltip-main" >

                                                                                                        <b className="result-title"  ><b>{res.title}</b></b>
                                                                                                        <p className="rating">
                                                                                                              <b className="sub-title">
                                                                                                              ★★★★★
                                                                                                              <span className="voters">({res.vote_count})</span>:</b>
                                                                                                              <span className="subDescription" > {res.vote_average}/10 </span>
                                                                                                        </p>
                                                              </Tooltip>
                                                        </div>
                                                </div>
                              ),
                              url: "http://www.imdb.com/title/"+ res.imdb_id
                              }
                            }
                          }
                   />
                </div>

               <button className="toggle-button" onClick={this.handleClick.bind(this)}>{this.state.message}</button>
          </div>
      </ReactiveBase>
      </div>
    );
  }
}
export default App;
