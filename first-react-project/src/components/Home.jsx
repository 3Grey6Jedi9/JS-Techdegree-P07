import React from "react";

const Home = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
        {/* Adding the image element below the Nav component */}
                <img
                    src="../../public/HomePagePicture.jpeg"
                    alt="Home Page Image"
                    style={{ width: "100%", marginTop: "20px" }}
                    />
    </div>
  );
};

export default Home;

