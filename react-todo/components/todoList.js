var TodoList = React.createClass({displayName: "TodoList",
	render: function() {
		var newItem = function(item) {
			return (
				React.createElement(Todo, null, item)
			)
		}
		return (
		React.createElement("div", {className: "list"}, 
		    React.createElement("ul", null, this.props.data.map(newItem))
        )
		);
	}
});