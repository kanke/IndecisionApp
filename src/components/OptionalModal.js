import React from "react";
import Modal from 'react-modal';

const OptionalModal = (props) => (
      <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleDeleteSelectedOption}
      contentLabel="Selected Option"
      >
          <h3>Selected Option</h3>
          { props.selectedOption && <p>{props.selectedOption}</p>}
          <button onClick={props.handleDeleteSelectedOption}>Okay</button>
      </Modal>
)

export default OptionalModal