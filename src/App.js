import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getDate } from "./api";
import Header from "./Header";
import Home from "./Home";
import PostList from "./PostList";

const BASH1 = "https://umorili.herokuapp.com/api/get?site=bash.im&name=bash";
const BASH2 = "https://umorili.herokuapp.com/api/get?site=bash.im&name=abyss";
const ZADOLBALI1
  = "https://umorili.herokuapp.com/api/get?site=zadolba.li&name=zadolbali";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bashDate: [],
      zadolbaliDate: [],
    };
  }

  setBashDate = async() => {
    if (!this.state.bashDate.length) {
      const [, ...newDate] = [
        ...(await getDate(BASH1)),
        ...(await getDate(BASH2)),
      ];
      console.log("Init Bash");
      this.setState({
        bashDate: newDate,
      });
    }
  };

  setZadolbaliDate = async() => {
    if (!this.state.zadolbaliDate.length) {
      const newDate = [...(await getDate(ZADOLBALI1))];
      console.log(`Init Zadolbali ${newDate.length}`);
      this.setState({
        zadolbaliDate: newDate,
      });
    }
  };

  render() {
    const wrappedBash = props => {
      this.setBashDate();
      return <PostList props={{ ...props }} posts={this.state.bashDate} />;
    };

    const wrappedZadolbali = props => {
      this.setZadolbaliDate();
      return <PostList props={{ ...props }} posts={this.state.zadolbaliDate} />;
    };

    return (
      <div className="App">
        <Header perPage={this.state.perPage} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/Bash/perPage=:perPage&page=:page"
            component={wrappedBash}
          />
          <Route
            path="/Zadolbali/perPage=:perPage&page=:page"
            component={wrappedZadolbali}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
