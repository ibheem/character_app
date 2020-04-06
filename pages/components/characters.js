import React from 'react';



class Characters extends React.Component{
    css ={color:'rgb(255, 152, 0)',background:'#333333',propColor:'rgb(158, 158, 158)'}

    renderCharacters(){
        const { charactersList } = this.props;
        return(
            charactersList.map((character)=>{
                return(
                    <div key={character.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                        {/* <div className="card">
                            <p>{character.name}</p>
                            <img className="img-responsive" src={character.image} alt={character.name}/>
                        </div> */}
                        <div className="card mb-4" style={{width: '100%'}}>  
                            <div className="card-img-caption">
                                <div className="card-text" >
                                    <div style={{backgroundColor:'rgba(32, 35, 41,.7)',padding:'5px'}}>
                                        <h5 style={{color:this.css.propColor}}>{character.name}</h5>
                                        <span style={{color:this.css.propColor}}>id: {character.id}&nbsp;&nbsp; </span>
                                    </div>
                                    
                                </div>
                                <img className="card-img-top" src={character.image} alt={character.name}/>
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            
                            <ul className="list-group list-group-flush">
                                <li style={{backgroundColor:this.css.background}} className="list-group-item list-group-item-secondary">
                                    <span style={{color:this.css.propColor}}>Status</span>
                                    <span className="float-right" style={{color:this.css.color}}>{character.status}</span>
                                </li>
                                <li style={{backgroundColor:this.css.background}} className="list-group-item list-group-item-secondary">
                                    <span style={{color:this.css.propColor}}>Species</span>
                                    <span className="float-right" style={{color:this.css.color}}>{character.species}</span>
                                </li>
                                <li style={{backgroundColor:this.css.background}} className="list-group-item list-group-item-secondary">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                    <span style={{color:this.css.propColor}}>Gender</span>
                                    <span className="float-right" style={{color:this.css.color}}>{character.gender}</span>
                                </li>
                                <li style={{backgroundColor:this.css.background}} className="list-group-item list-group-item-secondary">
                                    <span style={{color:this.css.propColor}}>Origin</span>
                                    <span className="float-right" style={{color:this.css.color}}>{character.origin.name}</span>
                                </li>
                                <li style={{backgroundColor:this.css.background}} className="list-group-item list-group-item-secondary">
                                    <span style={{color:this.css.propColor}}>Last Location</span>
                                    <span className="float-right" style={{color:this.css.color}}>{character.location.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                )
            })
        )
    }
    render(){
        
        return(
            <React.Fragment>
                { this.renderCharacters()}
                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
    
}

export default Characters;