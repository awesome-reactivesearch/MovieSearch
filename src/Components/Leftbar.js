import React, { Component } from 'react';
import {
  MultiList,
  RangeSlider,
  DateRange
} from '@appbaseio/reactivesearch';

class Leftbar extends Component{
  render(){
    return(
      <div className={this.props.isClicked?"left-bar-optional":"left-bar"} >

              <div className="filter-heading center">
                    <b>  <i className="fa fa-language"></i> Languages </b>
              </div>

              <MultiList
                  componentId="language-list"
                  dataField="original_language.raw"
                  className="language-filter"
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
                  filterLabel="language-filter"
                  URLParams={false}
                  innerClass={{
                    label: 'list-item',
                    input: 'list-input'

                 }}
              />

              <hr className="blue"/>

              <div className="filter-heading center">
                    <b><i className="fa fa-star"></i> Ratings</b>
              </div>

              <RangeSlider
                  componentId="RangeSlider"
                  dataField="vote_average"
                  className="review-filter"
                  range={{
                    "start": 0,
                    "end": 10
                  }}
                  rangeLabels={{
                    "start": "0",
                    "end": "10"
                  }}
                  react={{
                    and: ["mainSearch","results","language-list","date-Filter"]
                  }}
               />

              <hr className="blue"/>

              <div className="filter-heading center">
                    <b> <i className="fa fa-calendar"></i> Release Date  </b>
              </div>

              <DateRange
                  componentId="date-filter"
                  dataField="release_date"
                  className="DatePicker"
              />
   </div>
);

  }
}
export default Leftbar;
