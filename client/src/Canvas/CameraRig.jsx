import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";


const CameraRig = ({children}) => {
  const group = useRef();
  const snap = useSnapshot(state);


  useFrame((state, delta) => {

    const isBreakingpoint = window.innerWidth <= 1260;
    const isMoblie = window.innerWidth <= 600;

    //set initial position of the model(shirt)

    let targetPosition = [-0.4, 0, 2];
    if(snap.intro){
      if(isBreakingpoint) targetPosition = [0, 0, 2];
      if(isMoblie) targetPosition = [0, 0.2, 2.5];

    }else{
      if(isMoblie) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }
     //set model camera position 

     easing.damp3(state.camera.position, targetPosition, 0.25, delta);


    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
      )
  });

     


  return <group ref={group} >
     {children}
     </group>

  
  
}

export default CameraRig