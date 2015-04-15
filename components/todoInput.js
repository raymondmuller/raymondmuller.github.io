var TodoInput = React.createClass({
	displayName: "TodoInput",
	getInitialState: function() {
		return {todo: ''};
	},
	addToList: function(e){
		e.preventDefault();
		if(this.state.todo !=- "") {
			this.props.onAdd({content: this.state.todo});
			this.setState({todo: ''}); }
		React.findDOMNode(this.refs.todo).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			todo: e.target.value
		});
	},
	render: function(){
		return (
			React.createElement("div", {className: "row row-centered"}, 
			React.createElement("form", null, 
				React.createElement("input", {id: "todoInput", ref: "todo", onChange: this.onChange, className: "todo-input", value: this.state.todo}), 
				React.createElement("span", {id: "addButton", className: "add-button"}, React.createElement("button", {onClick: this.addToList}, "Add"))
			)
			) 
		);
	}
});