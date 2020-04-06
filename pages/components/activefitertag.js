import React from 'react';


class Activefitertag extends React.Component{
   
    state={
        intercept:true
    }
    removeTag = (event)=>{
        Object.keys(this.props.activeTags).map((key,index)=>{
            if(key==event.target.dataset.value)
                this.props.activeTags[key] = 'false'
        })
        if(this.state.intercept==true){
            this.setState({intercept:false})
        }else{
            this.setState({intercept:true})
        }
        this.props.filtersApplied(this.props.activeTags);
        
        
    }

    renderFilters = ()=>{
        if(Object.keys(this.props.activeTags).length!==0){
            return(
                Object.keys(this.props.activeTags).map((key,index)=>{
                    if(this.props.activeTags[key]!=='false'){
                        return(
                            <div key={index} className="mb-3 ml-2">
                                <span className="btn btn-secondary">
                                    {key.split('_')[1]} <span onClick={this.removeTag} data-value={key} style={{cursor:'pointer'}} className="badge tag-pointer badge-default ml-2">X</span>
                                </span>
                            </div>
                        )
                    }
                })
                
            )
        }else{
            return (
                <div></div>
            )
            
        }
    }
    


    render(){
        // this.renderFilters();
        return (
            <React.Fragment>
                {this.renderFilters()}
                {/* <div></div> */}
                <style jsx>{`
                    .tag-pointer:{
                        cursor:pointer !important
                    }
                    
                `}</style>
            </React.Fragment>
        )
    }
}

export default Activefitertag;