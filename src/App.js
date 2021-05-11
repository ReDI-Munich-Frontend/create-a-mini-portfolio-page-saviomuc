/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PageWrapper } from "./PageWrapper";
import { Tile } from "./Tile";
import { WobblyTile } from "./WobblyTile";
import { Grid } from "./Grid";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/item3">
          <PageWrapper>
            <img
              alt="coffee"
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80"
            />
          </PageWrapper>
        </Route>
        <Route path="/item2">
          <PageWrapper> THIS IS the item 2 page</PageWrapper>
        </Route>
        <Route path="/aboutme">
          <PageWrapper> THIS IS ABOUT ME</PageWrapper>
        </Route>
        <Route path="/portfolio">
          <PageWrapper> THiS IS PORTFOLIO</PageWrapper>
        </Route>
        <Route path="/">
          <PageWrapper>
            <Grid>
              <WobblyTile />
              <Tile
                gridarea="itemtwo"
                bgimage="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=806&h=500&q=80"
              >
                <Link to="/item2">Item 2</Link>
              </Tile>

              <Tile
                gridarea="itemthree"
                bgimage="https://images.unsplash.com/photo-1422207049116-cfaf69531072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              >
                <Link to="/item3">Item 3</Link>
              </Tile>
            </Grid>
          </PageWrapper>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
