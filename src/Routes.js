import React from "react";
import { Route, Switch } from "react-router-dom";

// FREE

import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import OtherPage from "./layouts/OtherPage/OtherPage";
import ProductList from "./pages/ProductList/ProductList";
import FaqPage from "./pages/FaqPage/FaqPage";
import CardPage from "./pages/CardPage/CardPage";
import WishListPage from "./pages/WishListPage/WishListPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/otherpage" component={OtherPage} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/productdetail" component={ProductDetail} />
        <Route path="/faqpage" component={FaqPage} />
        <Route path="/cardpage" component={CardPage} />
        <Route path="/wishlistpage" component={WishListPage} />
        <Route path="/checkoutpage" component={CheckOutPage} />
        {/* FREE */}

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;