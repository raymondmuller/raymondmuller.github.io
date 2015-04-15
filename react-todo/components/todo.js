var Todo = React.createClass({displayName: "Todo",
	handleClick: function(e) {
		if(this.props.children.url === undefined) {
			React.findDOMNode(this.refs.todoItem).remove();
		} else {
			window.open(this.props.children.url);
		}
	},
	render: function() {
		return (
		React.createElement("li", {ref: "todoItem", onClick: this.handleClick}, 
			React.createElement("b", null, this.props.children.content)
			)	
		)
	}
});