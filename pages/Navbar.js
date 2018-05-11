import React, { Component } from "react";
import { DataSearch } from "@appbaseio/reactivesearch";

const components = {
  dataSearch: {
    componentId: "mainSearch",
    dataField: "original_title.search",
    categoryField: "title",
    className: "search-bar",
    queryFormat: "and",
    placeholder: "Search for movies...",
    iconPosition: "left",
    autosuggest: false,
    filterLabel: "search",
    highlight: true
  }
};

class Navbar extends Component {
  static async getInitialProps() {
    return {
      store: await initReactivesearch(
        [
          {
            ...components.datasearch,
            type: "DataSearch",
            source: DataSearch
          }
        ],
        null
      )
    };
  }
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <img className="app-logo" src="/static/logo.jpg" alt="MovieSearch" />
        </div>

        <div className="search-container">
          <DataSearch {...components.dataSearch} />
        </div>
      </div>
    );
  }
}
export default Navbar;
