import React from "react";
import Sqaure from "./Sqaure";
import classes from "./Board.module.css";
export default function Board() {
  return (
    <div>
      <div className={classes.row}>
        <Sqaure/>
        <div className={classes.coloumn}><Sqaure/></div>
        <Sqaure/>
      </div>
      
      <div className={classes.row}>
        <Sqaure/>
      <div className={classes.coloumn}><Sqaure/></div>
        <Sqaure/>
      </div>
      
      <div className={classes.row}>
        <Sqaure />
        <div className={classes.coloumn}>
          <Sqaure/>
        </div>
        <Sqaure/>
      </div>
    </div>
  );
}
