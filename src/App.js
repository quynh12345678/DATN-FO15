// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const HomeCakeShop = lazy(() => import("./pages/home/HomeCakeShop"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const NotFound = lazy(() => import("./pages/other/NotFound"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const Product = lazy(() => import("./pages/shop-product/Product"));
const Cart = lazy(() => import("./pages/other/Cart"));
const resetPassword = lazy( () => import( "./pages/other/resetPassword" ) );
const Checkout = lazy( () => import( "./pages/other/Checkout" ) );
const MyOrder = lazy( () => import( "./pages/other/MyOrder" ) );
const MyAccount = lazy( () => import( "./pages/other/MyAccount" ) );
const Voucher = lazy(() => import("./pages/voucher/Voucher"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeCakeShop}
                />
                {/* Homepages */}
                <Route path={"/home"} component={HomeCakeShop} />
                <Route
                  path={process.env.PUBLIC_URL + "/auth/:type"}
                  component={LoginRegister}
                />
                <Redirect from="/auth" to="auth/login" />
                <Route
									path={ process.env.PUBLIC_URL + "/reset-password/:type" }
									component={ resetPassword }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/reset-password" }
									component={ resetPassword }
								/>
                <Route
									path={ process.env.PUBLIC_URL + "/product/:id" }
									render={ ( routeProps ) => (
										<Product { ...routeProps } key={ routeProps.match.params.id } />
									) }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/my-account" }
									component={ MyAccount }
								/>

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />
                <Route path={"/shop"} component={ShopGridStandard} />
                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
									path={ process.env.PUBLIC_URL + "/checkout" }
									component={ Checkout }
								/>
                <Route
									path={ process.env.PUBLIC_URL + "/my-order" }
									component={ MyOrder }
								/>
                 <Route path={"/voucher"} component={Voucher} />
                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
