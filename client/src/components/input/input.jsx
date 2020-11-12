import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      studentArray: ["boat", "car", "plane"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // ? Does not mutate the array
    this.setState((prevState) => ({
      studentArray: [...prevState.studentArray, this.state.name],
    }));

    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter student name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit"> Add </button>
        </form>
        <section>
          <header>
            <h1>Student Container</h1>
          </header>
          <main>
            <ol>
              {this.state.studentArray.map((student) => (
                <li key={student}>
                  <span>{student}</span>
                </li>
              ))}
            </ol>
          </main>
        </section>
      </>
    );
  }
}

export default Input;
