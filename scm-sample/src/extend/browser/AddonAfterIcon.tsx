import * as React from "react";
import { useState } from 'react';
import { getIcon, Icon } from 'sumi-browser';

import './style.less';

export const AddonAfterIcon: React.FC<IComponentProps<INodeService>> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const hanldeClick = React.useCallback(async () => {
    if (isDisabled) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [isDisabled])


  return (
    <div className={`scm-addon-after-icon-container ${(isLoading || isDisabled) ? 'disabled' : ''}`} onClick={hanldeClick}>
      {
        isLoading
        ?<Icon iconClass={getIcon('loading')} className={'loading-icon'} />
        :<Icon iconClass={getIcon('info-circle')}/>
      }
    </div>
  );
};
