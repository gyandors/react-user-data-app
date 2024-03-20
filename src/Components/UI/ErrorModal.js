import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './ErrorModal.css';

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />;
}

function Overlay(props) {
  return (
    <Card className="error-modal">
      <header className="error-header">
        <h3>{props.title}</h3>
      </header>
      <section className="error-section">
        <p>{props.message}</p>
      </section>
      <footer className="error-footer">
        <button type="submit" onClick={props.onClick}>
          Ok
        </button>
      </footer>
    </Card>
  );
}
