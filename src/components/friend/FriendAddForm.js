// import React, { Component } from 'react';

// class FriendAddForm extends Component {
//     state = {
//         query: '',
//         users: [],
//     }

//     handleInputChange = () => {
//         this.setState({
//             query: this.search.value
//         })
//         this.filterArray();
//     }

//     getData = () => {
//         fetch(`http://localhost:5002/users`)
//         .then(response => response.json())
//         .then(responseData => {
//             // console.log(responseData)
//             this.setState({
//                 users:responseData
//             })
//         })
//     }

//     filterArray = () => {
//         var searchString = this.state.query;
//         var responseData = this.state.users;
//         if(searchString.length > 0){
//             responseData = responseData.filter(l => {
//             })
//         }
//     }

//     componentWillMount() {
//         this.getData();
//     }
//     render() {
//         return (
//             <div className="searchFriendForm">
//                 <form>
//                     <input type="text" id="filter" placeholder="Search for Friends" ref={input => this.search = input} onChange={this.handleInputChange}/>
//                 </form>
//                 <div>
//                     {
//                         this.state.users.map((i) =>
//                             <p>{i.name}</p>
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }


// export default FriendAddForm;