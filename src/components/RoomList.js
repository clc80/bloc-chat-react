import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    };
    this.roomsRef = this.props.firebase.database().ref('rooms')
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState( {rooms: this.state.rooms.concat(snapshot.val())});
      console.log(room);
    });
  }
  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push ({
      name: this.state.newRoomName
    });
    console.log(e);
  }
  handleChange(e) {
    this.setState({newRoomName: e.target.value});
  }

  render() {
    return (
      <section className='RoomList'>
        Room List will go here
        {this.state.rooms.map( (room, index) =>
        <div key={index}>
          {room.name}
        </div>
        )
      }
      <div className='newRoom'>
        {/*Form for creating a room*/}
        <form onSubmit={(e) => this.createRoom(e)}>
          <input
            type="text"
            placeholder="New Chat Room Name"
            value={this.state.newRoomName}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit"/>
        </form>
      </div>
      </section>

    );
  }
}

export default RoomList;
