import React from 'react';
import Todo from './Todo'

class Title extends React.Component {
	render () {
		return (
			<div className="title">
				<h1>To do List:</h1>
				<ul>{ this.props.data }</ul>
			</div>	
		);
	}
}

export default Title;