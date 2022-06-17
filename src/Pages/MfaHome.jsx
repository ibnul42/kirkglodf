import React, { useEffect } from "react";

import LoginPage from "../Components/LoginPage";

function Home({ user, requireMfa, loginHandler, logouthandler, loginState }) {
  return (
    <div className="">
      <LoginPage user={user} requireMfa={requireMfa} loginHandler={loginHandler} logouthandler={logouthandler} loginState={loginState} />
    </div>
  );
}

export default Home;
