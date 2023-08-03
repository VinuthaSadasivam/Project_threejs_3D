import React from 'react';
import { SketchPicker } from "react-color";
import { useSnapshot } from 'valtio';
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
    <SketchPicker 
      color={snap.color}
      disableAlpha
      // presetColors={[ 
      //   "#000000",
      //   "#ccc",
      //   "#A084E8",
      //   "#FEBBCC",
      //   "#91C8E4",
      //   "#F2EE9D",
      //   "#EF6262",
      //   "#FCAEAE",
      //   "#815B5B",
      //   "#85586F",
      //   "#CD1818",
      //   "#61677A"
      // ]}
      onChange={color => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker;