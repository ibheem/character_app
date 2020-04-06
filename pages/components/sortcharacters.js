import React from 'react';



class Sortcharacters extends React.Component{
    state={
        sorting:'asc'
    }
    sortCharacters = ()=>{
        event.preventDefault();
        this.setState({sorting:event.target.value},()=>{
            this.props.sortCharacters(this.state.sorting);
        })
        
    
        
    }
    
    
    render(){
        
        return(
            <React.Fragment>
                <div className="form-group">
                    <select className="form-control" onChange={this.sortCharacters}>
                        <option value="asc">Ascending</option>
                        <option value="des">Descending</option>
                    </select>
                </div>
                
                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
    
}

export default Sortcharacters;