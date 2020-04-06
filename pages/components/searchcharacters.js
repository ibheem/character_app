import React from 'react';


class Searchcharacters extends React.Component{
    state={
        name:''
    }
    searchByName = (event)=>{
        event.preventDefault();
        this.setState({name:event.target.value});
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.searchCharacters(this.state.name);
    }



    render(){
        return (
            <React.Fragment>
                <div className="search-box">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="input-group mb-3">
                            <input className="form-control" value={this.state.name} id="searchByName" onChange={this.searchByName} type="text"/>
                            <div className="input-group-append">
                                <input className="btn btn-secondary" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
}

export default Searchcharacters;