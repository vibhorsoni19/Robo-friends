import React,{Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
		super()
		this.state ={
	         robots: robots,
	         searchfield: ''
            }
    }

onSearchChange=(event) =>{
	this.setState({searchfield: event.target.value})
	
}

render(){
	const filteredRobots = this.state.robots.filter(robot =>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return(
    <div className='tc'>
		<h1>ROBOFRIENDS</h1>
		<SearchBox searchchange={this.onSearchChange}/>
		<Scroll >
	        <CardList robots={filteredRobots} />
	    </Scroll>
     </div>   

   );
}
	
}
export default App;
