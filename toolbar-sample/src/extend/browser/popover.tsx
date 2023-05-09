import * as React from "react";
import { useEffect } from 'react';

export const CustomPopover = (props) => {

  useEffect(() => {
    console.log('do something...');
    return () => {
      console.log('dispose custom popover...');
    };
  }, []);

  return (
    <div style={{ width: 200, height: 200, padding: 10 }} className="kt-extension-example-toolbar">
      Hello {props.context?.name}
    </div>
  );
}