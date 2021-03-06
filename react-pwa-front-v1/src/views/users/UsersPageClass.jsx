import React, { Component } from 'react';

import { withRouter } from "react-router-dom";

import UserService from '../../services/UserService'

import Grid from '../../components/CSSGrid/Grid';
import UserCard from '../../components/Cards/UserCard';
import Filter from '../../components/Filter/Filter'

class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filter: ""
        };
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    componentDidMount() {
        this.refreshUserContent("");
    }

    renderCards(users) {
        if (users) {
            return users.map((user) => {
                return (
                    <Grid key={user._id}>
                        <UserCard user={user} handleClick={this.handleCardClick} />
                    </Grid>
                );
            });
        }
        return null
    }

    handleCardClick(_id) {
        const { history } = this.props;
        history.push(`/adm/users/view/${_id}`);
    }

    handleLogoClick() {
        const { history } = this.props;
        history.push(`/adm/users`);
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
        this.refreshUserContent(event.target.value);
    };

    refreshUserContent(filter) {
        UserService.getAllFilterByName(filter)
            .then(data => {
                console.log("Data: ", data);
                this.setState({ users: data.list });
            });
    }

    render() {
        const { users, filter } = this.state;
        return (
            <React.Fragment>
                <Filter value={filter} onChange={this.handleFilterChange} handleLogoClick={this.handleLogoClick} />
                {this.renderCards(users)}
            </React.Fragment>
        );
    }
}

export default (withRouter)(UsersPage);