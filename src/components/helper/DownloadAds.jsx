import React from "react";

const DownloadAds = () => {
  return (
    <div className="flex gap-2 py-2">
      <a href="#">
        <img
          src={require("../../images/app-store.png")}
          alt="app-store-logo"
          className="border-[#232A4E] border-2 rounded-xl h-12 w-40 hover:border-[#293157]"
        />
      </a>
      <a href="#">
        <img
          src={require("../../images/google-play.png")}
          alt="google-play-logo"
          className="border-[#232A4E] border-2 rounded-xl h-12 w-40 hover:border-[#293157]"
        />
      </a>
    </div>
  );
};

export default DownloadAds;
