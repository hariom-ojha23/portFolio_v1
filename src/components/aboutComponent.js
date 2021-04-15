import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: "Hello, My Name is Hari om Ojha",
            currentText: '',
            typingDelay: 50,
            charIndex: 0
        };

        this.type = this.type.bind(this);
    }

    componentDidMount() {
        this.type();
    }

    type = () => {
        if (this.state.charIndex <= this.state.text.length) {
            this.setState({
                currentText: this.state.currentText + this.state.text.charAt(this.state.charIndex),
                charIndex: this.state.charIndex + 1
            })
            setTimeout(this.type, this.state.typingDelay);
        }
    }

    render() {
        return (
            <div className="container">
                <div id="social" className="grid-item">
                    <div>social</div>
                </div>
                <div id="about" className="grid-item">
                    <p className="typed">{this.state.currentText}</p>
                </div>
                <div id="next" className="grid-item">
                    <div>next</div>
                </div>
            </div>
        )
    }
}

export default About;