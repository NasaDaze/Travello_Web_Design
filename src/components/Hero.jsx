import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1474452926969-af7bfdb9ca39?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-bold">
            Choose your next Destination
          </h1>
          <p className="mb-5">
            Your next travel destination won't be a hassle with our plans,
            providing you with the best deals and packages to over 100 countries
            on the most affordable rates. So, what are you waiting for? Let's
            travel!
          </p>
          <button className="btn btn-primary">Plan your travel</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
