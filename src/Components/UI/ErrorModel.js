import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

function ErrorModel(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>{props.content}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>{props.actions}</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModel;
