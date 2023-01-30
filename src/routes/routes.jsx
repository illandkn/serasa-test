import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import RatingPage from '../pages/rating/rating';

function AppRoutes() {
    return (
      <div>
        <Routes>
          <Fragment>
            <Route exact path="/" element={<RatingPage/>} />
          </Fragment>
        </Routes>
      </div>
    );
  }
  
  export default AppRoutes;