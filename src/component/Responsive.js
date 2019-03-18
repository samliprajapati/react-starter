import React, { Component } from 'react';

class Responsive extends Component {
    render() {
        return (
            <div>
                <div class="flex-container">
                    <div class="box one" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                        <h3>Box one</h3>
                        <i class="fas fa-clock" ></i>
                    </div>
                    <div class="box two">Box Two</div>
                    <div class="box three">Box Three</div>
                    <div class="box four">Box Four</div>
                    <div class="box five">Box Five</div>
                </div>
                <div class="flex-container1">
                    <div class="box six">Box Six
            <p>this is my paragraph for my box six</p></div>
                    <div class="box seven">Box Seven
            <p> this is my paragraph for my box seven</p></div>
                </div>

            </div>
        );
    }
}

export default Responsive;