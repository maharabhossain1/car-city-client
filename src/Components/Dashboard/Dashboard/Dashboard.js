import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddService from "../../AddService/AddService";
import PrivateRoute from "../../Loging/PrivateRoute/PrivateRoute";
import DashboardHome from "../DashaboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";

export default function Dashboard() {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <div>
        <Nav
          className="bg-dark"
          fill
          variant="tabs"
          defaultActiveKey={`${url}`}
        >
          <Nav.Item>
            <Nav.Link className="text-light " as={Link} to={`${url}`}>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light " as={Link} to={`${url}/myorders`}>
              My Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light " as={Link} to={`${url}/review`}>
              Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light " as={Link} to={`${url}/payment`}>
              Payment
            </Nav.Link>
          </Nav.Item>
          {admin && (
            <>
              <Nav.Item>
                <Nav.Link
                  className="text-light "
                  as={Link}
                  to={`${url}/makeadmin`}
                >
                  Make Admin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-light "
                  as={Link}
                  to={`${url}/manageorders`}
                >
                  Manage Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-light "
                  as={Link}
                  to={`${url}/addcar`}
                >
                  Add New Car
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-light "
                  as={Link}
                  to={`${url}/allproducts`}
                >
                  Manage All Products
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
        <div>
          <Switch>
            <Route exact path={path}>
              <DashboardHome />
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/manageorders`}>
              <ManageAllOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <PrivateRoute path={`${path}/addcar`}>
              <AddService />
            </PrivateRoute>
            <PrivateRoute path={`${path}/allproducts`}>
              <ManageAllProducts />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
}
