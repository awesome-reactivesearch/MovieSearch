import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  RangeSlider,
  MultiList,
  SelectedFilters,
  DateRange,
  ResultCard
} from '@appbaseio/reactivesearch';
import './App.css';
require("dotenv").config();

class App extends Component {
  constructor() {
    super();
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
      <ReactiveBase
      app="Movie-Search"
      credentials={process.env.REACT_APP_CLIENT_SECRET}
      >
              <div className="navbar">

                      <div className="logo_container">
                          <img  className="App_logo" src="Images/Applogo.png" alt="MovieSearch"/>
                      </div>

                      <DataSearch
                          componentId="mainSearch"
                          dataField={["title"]}
                          categoryField="title"
                          className="Search_bar"
                          queryFormat="and"
                          placeholder="Search a movie..."
                          iconPosition="left"
                          autosuggest={false}
                          filterLabel="search"
                        />
              </div>

              <div className="Main_container">
                      <div className={this.state.isClicked?"Left_bar":"Left_bar_optinal"} >
                              <div className="Topic_Heading center">
                                  <b>  Langauge Filter </b>
                              </div>
                              <br/>

                              <MultiList
                                  componentId="language_list"
                                  dataField="original_language.raw"
                                  className="Language_Filter"
                                  size={100}
                                  sortBy="asc"
                                  queryFormat="or"
                                  selectAllLabel="All Languages"
                                  showCheckbox={true}
                                  showCount={true}
                                  showSearch={true}
                                  placeholder="Search for a language"
                                  react={{
                                      and: ["mainSearch","results","Date_Filter","RangeSlider"]
                                    }}
                                  showFilter={true}
                                  filterLabel="language_filter"
                                  URLParams={false}
                              />
                              <hr/>
                              <div className="Topic_Heading center">
                                  <b>Ratings Filter</b>
                              </div>
                              <br/>

                              <RangeSlider
                                  componentId="RangeSlider"
                                  dataField="vote_average"
                                  className="Review_Filter"
                                  range={{
                                    "start": 0,
                                    "end": 10
                                  }}
                                  rangeLabels={{
                                    "start": "0",
                                    "end": "10"
                                  }}
                                  react={{
                                    and: ["mainSearch","results","language_list","Date_Filter"]
                                  }}
                               />
                              <hr/>




                              <div className="Topic_Heading center">
                                  <b>  Release Date Filter </b>
                              </div>
                              <br/>

                              <DateRange
                                  componentId="Date_Filter"
                                  dataField="release_date"
                                  className="DatePicker"
                              />
                              <br/>
                              <hr/>
                   </div>

                 <div className={this.state.isClicked?"Result_container_optional":"Result_container"} >
                        <SelectedFilters
                            showClearAll={true}
                            clearAllLabel="Clear filters"
                        />

                        <ResultCard
                            componentId="results"
                            dataField="title"
                            react={{
                              and: ["mainSearch","dateFilter","RangeSlider","language_list","Date_Filter"]
                            }}
                            pagination={true}
                            className="Result_card"
                            paginationAt="bottom"
                            pages={5}
                            noResults="No results were found..."
                            sortOptions={[
                                { dataField: "popularity", sortBy: "desc", label: "Sort by Popularity(High to Low)"},
                                { dataField: "vote_average", sortBy: "desc", label: "Sort by Ratings(High to Low)"},
                                { dataField: "title.raw", sortBy: "asc", label: "Sort by Title A->Z"},
                                { dataField: "title.raw", sortBy: "desc", label: "Sort by Title Z->A"},
                                { dataField: "revenue", sortBy: "desc", label: "Sort by Revenue(High to Low)"}
                              ]}
                           innerClass={{
                             image: 'result-image',
                             tit: 'result-title'
                          }}

                      onData={
                            function(res) {
                                      return {
                                            image: "https://image.tmdb.org/t/p/w500"+ res.poster_path,
                                            description: (
                                                          <div>
                                                              <p className="result-title"><b>{res.title}</b></p>
                                                              <p className="rating"><b>★★★★ :</b> {res.vote_average}/10</p>
                                                                      <div className="extra-description">
                                                                          <p><b>Popularity Score :</b> {res.popularity}</p>
                                                                          {(res.tagline) ? <p className="result-tagline"><b>Tagline :</b>{res.tagline}</p> :null}
                                                                          <p><b>Revenue :</b> ${res.revenue}</p>
                                                                      </div>
                                                          </div>
                              ),
                              url: "http://www.imdb.com/title/"+ res.imdb_id
                              }
                            }
                          }
                   />
                </div>

               <button className="Toggle_Button"onClick={this.handleClick.bind(this)}>{this.state.message}</button>

           </div>
      </ReactiveBase>
    );
  }
}
export default App;
