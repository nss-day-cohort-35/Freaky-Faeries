// import React, { Component } from 'react';
// import FriendManager from '../../modules/FriendManager';

// class FriendAddForm  extends Component {
//     state = {
//         id: '',
//         friends: [],
//     }

//     handleFieldChange = evt => {
//         const stateToChange = {};
//         stateToChange[evt.target.id] = evt.target.value;
//         this.setState(stateToChange);
//     };

//     getData = () => {
//        FriendManager.getAll()
//        .then((friends) => {
//            this.setState({
//                friends:friends
//            })
//        })
//     }

//     filterArray = () => {
//         var searchString = this.state.id;
//         var responseData = this.state.friends
//         if(searchString.length > 0){
//             responseData = responseData.filter(evt => {
//             })
//         }
//     }

//     componentWillMount() {
//         this.getData();
//     }
//     render() {
//         return (
//             <div className="friendAddForm">
//                 <form>
//                     <input type="text" id="filter" placeholder="Find a Friend" ref={input => this.search = input} onChange={this.handleFieldChange}/>
//                 </form>
//                 <div>
//                     {
//                         this.state.friends.map((i) =>
//                             <p>{i.name}</p>
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }


// export default FriendAddForm;