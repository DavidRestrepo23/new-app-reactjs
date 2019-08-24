import React, { Component } from 'react';

class Search extends Component {

    constructor(){
        super();

        this.state = {
            category: ''
        }
    }

    componentDidMount() {
        this.setState({
            category: 'general'
        })
    }

    handleCategories = e => {
        

        this.setState({
            category: e.target.value
        }, () => {
            this.props.getNews(this.state.category);
        });

       

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <form>
                            <div className="input-field col s12 m8">
                                <select onChange={this.handleCategories} >
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="entertainment">Entretenimientos</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencia</option>
                                    <option value="sports">Deporte</option>
                                    <option value="technology">Tecnología</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
