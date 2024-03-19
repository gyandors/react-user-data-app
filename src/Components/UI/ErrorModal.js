import React from 'react';
import Card from './Card';
import './ErrorModal.css';

export default function ErrorModal(props) {
  return (
    <>
      <div className="backdrop" onClick={props.onClick} />
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
    </>
  );
}
