import React, { useState } from "react";

export default function Switch({ renderOn, renderOff }) {
  const [isOn, setIsOn] = useState(false);
  if (isOn) {
    return renderOn(setIsOn);
  } else {
    return renderOff(setIsOn);
  }
}
