import React, { Component } from "react";
import axios from "axios";
import { Button, Input } from "semantic-ui-react";


class AddressSearch extends Component {
  state = {
    searchTerm: [],
    items: [],
  };

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://postnummerapi.se/api/1.0/get/${this.state.searchTerm}/`;
    const response = await axios.get(url);
    this.setState({
      items: response.data.items,
    });
  };

  render() {
    const showAddresses = this.state.items.map((address) => {
      return (
        <div>
          <p>{address}</p>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="postcode"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <Button id="submit" name="search">
            Search
          </Button>
        </form>
        <p>{showAddresses}</p>
      </div>
    );
  }
}

export default AddressSearch;