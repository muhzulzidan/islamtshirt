import React, { Component } from "react";

import Modal from "./modals";
import SizeChart from "./sizechart";

class Main extends Component {
  state = {
    isModalOpen: false
  };

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleState} className="menu-button" aria-label="modals">
            Size Chart
        </button>
        {this.state.isModalOpen && (
          <>
         
          <Modal id="modal" isOpen={this.state.isModalOpen} onClose={this.toggleState}>
            <div className="modal-div">
                <SizeChart />
            </div>
          </Modal>
          </>
        )}
      </>
    );
  }
}

export default Main;
