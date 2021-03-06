import React from 'react';
import bg6 from './images/bg6.jpg';
import API from "../../utils/API";
import Runner from "./../Runner/Runner"
import TaskCard from "../../components/TaskCard";

const UserListStyle = {
  backgroundImage: "url(" + bg6 + ")"
};

const UserListContainerStyle = {
  height: 80 + '%',
  overflow: 'auto'
}

// const runnerStyle = {
//   backgroundImage: "url(" + bg8 + ")"
// };


// const runnerContainerStyle = {
//   height: 80 + '%'
// }

export default class UserList extends React.Component {

  state = {
    taskListArray: [],
    id: "",
    firstName:"",
    lastName:"",
    phone: ""
}


  componentDidMount() {
  //  console.log(Runner.this.state.phone)
    this.loadTasks()

    API.getUser(this.props.match.params.id)
    .then(res => {
        console.log(res);
        this.setState({
        id: res.data._id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phone: res.data.phone
        })
    }).catch(err => console.log(err))



  };

  loadTasks = () => {

    API.getTasks()
      .then(res =>
        this.setState({ taskListArray: res.data })
      )
      .catch(err => console.log(err));

  };

  handleSignout = event => {
    event.preventDefault();
    
    API.logout();
  }




  render() {

    return (

      <div className="bg" style={UserListStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo blue-text text-darken-2 left hide-on-small-only" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right">
              <li><a href={`/user/${this.state.id}`} className="blue-text text-darken-2">Create List</a></li>
              <li><a href={`/profile/${this.state.id}`} className="blue-text text-darken-2">Home</a></li>
              <li><a href="/" onClick={this.handleSignout} className="signoutBtn blue-text text-darken-2">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">My Lists</p>

        <div className="row runner" style={UserListContainerStyle}>
          <div className="">
            <div className="col s12">



              {/* rendering onto the page, feel free to skip over */}

              {this.state.taskListArray.map(task => {
                // this.populatePage(task)
                console.log(task.user[0]);
                if (this.props.match.params.id === task.user[0]){
                  
               
                if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />

                }
                else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={""}
                    task_2_PaymentAmount={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_Location={""}
                    task_3_Description={""}
                    task_3_PaymentAmount={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_Location={""}
                    task_4_Description={""}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phone={this.state.phone}
                  />
                }
              }
              })}
              

            </div>
          </div>
        </div>
      </div>
    )
  }
}
