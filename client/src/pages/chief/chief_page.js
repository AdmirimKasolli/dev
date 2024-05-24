
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import routes from "../../routes/chief_routes.js";

function ChiefPage(){

    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

    return (
      <Routes>
        {getRoutes(routes)}
        {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
      </Routes>
    );
}

export default ChiefPage;