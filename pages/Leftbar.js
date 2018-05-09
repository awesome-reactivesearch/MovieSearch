import React, { Component } from "react";
import {
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange
} from "@appbaseio/reactivesearch";
const components = {
  multiList: {
    componentId: "genres-list",
    dataField: "genres_data.raw",
    className: "genres-filter",
    size: 20,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Genres",
    showCheckbox: true,
    showCount: true,
    showSearch: true,
    placeholder: "Search for a Genre",
    react: {
      and: [
        "mainSearch",
        "results",
        "date-filter",
        "RangeSlider",
        "language-list",
        "revenue-list"
      ]
    },
    showFilter: true,
    filterLabel: "Genre",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  rangeSlider: {
    componentId: "RangeSlider",
    dataField: "vote_average",
    className: "review-filter",
    range: {
      start: 0,
      end: 10
    },
    rangeLabels: {
      start: "0",
      end: "10"
    },
    react: {
      and: [
        "mainSearch",
        "results",
        "language-list",
        "date-Filter",
        "genres-list",
        "revenue-list"
      ]
    }
  },
  dateRange: {
    componentId: "date-filter",
    dataField: "release_date",
    className: "datePicker"
  },
  multiDataList: {
    componentId: "language-list",
    dataField: "original_language.raw",
    className: "language-filter",
    size: 100,
    sortBy: "asc",
    queryFormat: "or",
    selectAllLabel: "All Languages",
    showCheckbox: true,
    showSearch: true,
    placeholder: "Search for a language",
    react: {
      and: [
        "mainSearch",
        "results",
        "date-filter",
        "RangeSlider",
        "genres-list",
        "revenue-list"
      ]
    },
    data: [
      {
        label: "English",
        value: "English"
      },
      {
        label: "Chinese",
        value: "Chinese"
      },
      {
        label: "Turkish",
        value: "Turkish"
      },
      {
        label: "Swedish",
        value: "Swedish"
      },
      {
        label: "Russian",
        value: "Russian"
      },
      {
        label: "Portuguese",
        value: "Portuguese"
      },
      {
        label: "Korean",
        value: "Korean"
      },
      {
        label: "Japanese",
        value: "Japanese"
      },
      {
        label: "Italian",
        value: "Italian"
      },
      {
        label: "Hindi",
        value: "Hindi"
      },
      {
        label: "French",
        value: "French"
      },
      {
        label: "Finnish",
        value: "Finnish"
      },
      {
        label: "Spanish",
        value: "Spanish"
      },
      {
        label: "Deutsch",
        value: "Deutsch"
      }
    ],
    showFilter: true,
    filterLabel: "Language",
    URLParams: false,
    innerClass: {
      label: "list-item",
      input: "list-input"
    }
  },
  singleRange: {
    componentId: "revenue-list",
    dataField: "ran_revenue",
    className: "revenue-filter",
    data: [
      { start: 0, end: 1000, label: "< 1M" },
      { start: 1000, end: 10000, label: "1M-10M" },
      { start: 10000, end: 500000, label: "10M-500M" },
      { start: 500000, end: 1000000, label: "500M-1B" },
      { start: 1000000, end: 10000000, label: "> 1B" }
    ],
    showRadio: true,
    showFilter: true,
    filterLabel: "Revenue",
    URLParams: false,
    innerClass: {
      label: "revenue-label",
      radio: "revenue-radio"
    }
  }
};

class Leftbar extends Component {
  static async getInitialProps() {
    return {
      store: await initReactivesearch(
        [
          {
            ...components.multiList,
            type: "MultiList",
            source: MultiList
          },
          {
            ...components.multiDataList,
            type: "MultiDataList",
            source: MultiDataList
          },
          {
            ...components.dateRange,
            type: "DateRange",
            source: DateRange
          },
          {
            ...components.rangeSlider,
            type: "RangeSlider",
            source: RangeSlider
          },
          {
            ...components.singleRange,
            type: "SingleRange",
            source: SingleRange
          }
        ],
        null
      )
    };
  }
  render() {
    return (
      <div className={this.props.isClicked ? "left-bar-optional" : "left-bar"}>
        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-pied-piper-alt" /> Genres{" "}
          </b>
        </div>

        <MultiList {...components.multiList} />

        <hr className="blue" />
        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-dollar" /> Revenue{" "}
          </b>
        </div>

        <SingleRange {...components.singleRange} />
        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            <i className="fa fa-star" /> Ratings
          </b>
        </div>

        <RangeSlider {...components.rangeSlider} />

        <hr className="blue" />
        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-language" /> Languages{" "}
          </b>
        </div>

        <MultiDataList {...components.multiDataList} />

        <hr className="blue" />

        <div className="filter-heading center">
          <b>
            {" "}
            <i className="fa fa-calendar" /> Release Date{" "}
          </b>
        </div>

        <DateRange {...components.dateRange} />
      </div>
    );
  }
}
export default Leftbar;
