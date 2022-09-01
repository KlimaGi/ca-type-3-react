import React, { useState } from 'react'
import SideBoxCard from './side-box-card';
import SideBoxInfo from './side-box-info';
import classes from './side-box.module.scss';

const SideBox: React.FC = () => {
  const [cardVisibility, setCardVisibility] = useState(false);
  const hideCardVisibility = () => setCardVisibility(!cardVisibility);
  const showCardVisibility = () => setCardVisibility(!cardVisibility);

  return (
    <div className={classes.sideBox}>

      <SideBoxCard show={cardVisibility} onClose={hideCardVisibility} />
      <SideBoxInfo onClick={showCardVisibility} />
    </div >
  )
}

export default SideBox;