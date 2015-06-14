var React = require('react');

var numbers = [1,3,4,5,6,7,8,9,10];

var App = React.createClass({
    render() {
        var numberComponents = numbers.map(number => {
            return <li>{number}</li>
        });

        return <ul>
            {numberComponents}
        </ul>
    }
});

React.render(<App/>, document.getElementById('content'));
