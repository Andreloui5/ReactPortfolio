import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={475}
    viewBox="0 0 600 475"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="206" y="139" rx="0" ry="0" width="244" height="237" />
  </ContentLoader>
);

export default Loading;
