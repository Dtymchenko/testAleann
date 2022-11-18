import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <div className="w-[1400px] flex justify-center mx-[260px] p-[15px]">
     <ContentLoader 
    speed={2}
    width={1400}
    height={164}
    viewBox="0 0 1400 164"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="43" cy="50" r="40" /> 
    <rect x="21" y="207" rx="11" ry="11" width="134" height="22" /> 
    <rect x="21" y="254" rx="11" ry="11" width="133" height="35" /> 
    <rect x="21" y="316" rx="12" ry="12" width="55" height="22" /> 
    <rect x="93" y="316" rx="12" ry="12" width="55" height="22" /> 
    <rect x="99" y="10" rx="0" ry="0" width="500" height="30" /> 
    <rect x="99" y="50" rx="0" ry="0" width="250" height="12" /> 
    <rect x="99" y="77" rx="0" ry="0" width="116" height="10" />
  </ContentLoader>
  </div>
  
)

export default Loader
