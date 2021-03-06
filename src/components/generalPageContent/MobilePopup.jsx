import React, { useState, useEffect } from "react";

const MobilePopup = (props) => {
  const [showPopupMobile, setShowMobilePopup] = useState(props.showMobilePopup)

  useEffect(() => {
    setTimeout(() => {
      setShowMobilePopup(true)
    }, 10000)
  }, [props.showPopupMobile])

  return showPopupMobile? (
    <div>
      <h1>hello</h1>
    </div>
  ) : null
}

export default MobilePopup
