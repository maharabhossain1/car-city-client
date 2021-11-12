import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
export default function DashboardHome() {
  const { user } = useAuth();
  return (
    <div className="top-dashboard-home p-5">
      <div className="my-5 py-5">
        <div className="text-light">
          <h1> Welcome To DashBoard </h1>
          <h4> Dear , {user.displayName}</h4>
          <p>
            {" "}
            You can Do Lots of This is this Section <br /> Like Review ,Order,
            Payment etc
          </p>
        </div>
      </div>
    </div>
  );
}
