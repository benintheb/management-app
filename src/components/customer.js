import React from 'react';

class Customer extends React.Component {
  render() {
    return (
      <div>
        <CustomerProfile image={this.props.image} name={this.props.name} id={this.props.id} />
        <CustomerInfo birthdate={this.props.birthdate} gender={this.props.gender} occupation={this.props.occupation} />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="picture" />
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthdate}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.occupation}</p>
      </div>
    );
  }
}

export default Customer;