import React, { Component } from "react";
import {
  ReactiveBase,
  SelectedFilters,
  ResultCard
} from "@appbaseio/reactivesearch";
import Navbar from "./Navbar.js";
import Leftbar from "./Leftbar.js";
import initReactivesearch from "@appbaseio/reactivesearch/lib/server";
import "./index.css";

const components = {
  settings: {
    app: "MovieAppFinal",
    credentials: "RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484",
    theme: {
      typography: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: "16px"
      },
      colors: {
        textColor: "#fff",
        backgroundColor: "#212121",
        primaryTextColor: "#fff",
        primaryColor: "#2196F3",
        titleColor: "#fff",
        alertColor: "#d9534f",
        borderColor: "#666"
      }
    }
  },
  selectedFilters: {
    showClearAll: true,
    clearAllLabel: "Clear filters"
  },
  resultCard: {
    componentId: "results",
    dataField: "original_title.search",
    react: {
      and: [
        "mainSearch",
        "RangeSlider",
        "language-list",
        "date-filter",
        "genres-list",
        "revenue-list"
      ]
    },
    pagination: true,
    className: "Result_card",
    paginationAt: "bottom",
    pages: 5,
    size: 12,
    Loader: "Loading...",
    noResults: "No results found...",
    sortOptions: [
      {
        dataField: "revenue",
        sortBy: "desc",
        label: "Sort by Revenue(High to Low) \u00A0"
      },
      {
        dataField: "popularity",
        sortBy: "desc",
        label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
      },
      {
        dataField: "vote_average",
        sortBy: "desc",
        label: "Sort by Ratings(High to Low) \u00A0"
      },
      {
        dataField: "original_title.raw",
        sortBy: "asc",
        label: "Sort by Title(A-Z) \u00A0"
      }
    ],
    onData: res => ({
      description: (
        <div className="main-description">
          <div className="ih-item square effect6 top_to_bottom">
            <a target="#" href={"http://www.imdb.com/title/" + res.imdb_id}>
              <div className="img">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
                  alt={res.original_title}
                  className="result-image"
                />
              </div>
              <div className="info colored">
                <h3 className="overlay-title">{res.original_title}</h3>

                <div className="overlay-description">{res.tagline}</div>

                <div className="overlay-info">
                  <div className="rating-time-score-container">
                    <div className="sub-title Rating-data">
                      <b>
                        Imdb
                        <span className="details"> {res.vote_average}/10 </span>
                      </b>
                    </div>
                    <div className="time-data">
                      <b>
                        <span className="time">
                          <i className="fa fa-clock-o" />{" "}
                        </span>{" "}
                        <span className="details">{res.time_str}</span>
                      </b>
                    </div>
                    <div className="sub-title Score-data">
                      <b>
                        Score:
                        <span className="details"> {res.score}</span>
                      </b>
                    </div>
                  </div>
                  <div className="revenue-lang-container">
                    <div className="revenue-data">
                      <b>
                        <span>Revenue:</span>{" "}
                        <span className="details"> ${res.or_revenue}</span>{" "}
                      </b>
                    </div>

                    <div className="sub-title language-data">
                      <b>
                        Language:
                        <span className="details">
                          {" "}
                          {res.original_language}
                        </span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ),
      url: "http://www.imdb.com/title/" + res.imdb_id
    }),
    innerClass: {
      title: "result-title",
      listItem: "result-item",
      list: "list-container",
      sortOptions: "sort-options",
      resultStats: "result-stats",
      resultsInfo: "result-list-info",
      poweredBy: "powered-by"
    }
  }
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }

  static async getInitialProps() {
    return {
      store: await initReactivesearch(
        [
          {
            ...components.selectedFilters,
            type: "SelectedFilters",
            source: SelectedFilters
          },
          {
            ...components.resultCard,
            type: "ResultCard",
            source: ResultCard
          }
        ],
        null,
        components.settings
      )
    };
  }

  render() {
    return (
      <div className="main-container">
        <ReactiveBase {...components.settings} initialState={this.props.store}>
          <Navbar />

          <div className="sub-container">
            <Leftbar isClicked={this.state.isClicked} />

            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters {...components.selectedFilters} />

              <ResultCard {...components.resultCard} />
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}
export default Main;
