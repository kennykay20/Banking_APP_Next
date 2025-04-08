import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Kenny" };

  return (
    <section className="home no-scrollbar">
      <div className="home-content no-scrollbar">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
