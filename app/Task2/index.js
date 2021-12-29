import React, { Component } from "react";

export default class Task2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [
				{
					id: 1,
					text: "hidden text 1"
				},
				{
					id: 2,
					text: "hidden text 2"
				},
				{
					id: 3,
					text: "hidden text 3"
				},
			],
			text: ''
		};
	}

	handlHoverOn = (e) => {
		return this.setState({
			text: this.state.list[e.currentTarget.dataset.id - 1].text
		})
	}
	handleHoverOff = (e) => {
		return this.setState({
			text: ''
		})
	}

	render() {
		return (
			<div >
				<ul>
					{this.state.list.map(item => {
						return <li key={item.id} className="element" data-id={item.id} onMouseOver={this.handlHoverOn} onMouseOut={this.handleHoverOff}>
							id - {item.id}
						</li>
					})}
				</ul>
				<div className="text">{this.state.text}</div>
			</div>
		)
	}
}
