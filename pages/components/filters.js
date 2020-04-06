import React from 'react';

class Filter extends React.Component{
    state={
            species_human:"false",
            species_mytholog:"false",
            species_otherspecies:"false",
            gender_male:"false",
            gender_female:"false",
            gender_unknown:"false",
            origin_unknown:"false",
            origin_postapocalypticearth:"false",
            origin_nuptia4:"false",
            origin_otherorigins:"false"
        
    }

    applyFilter = (event)=>{
        
        if(event.target.dataset.filterValue == "false"){
            event.target.dataset.filterValue = "true";
        }else{
            event.target.dataset.filterValue = "false";
        }
        const key = event.target.id;
        const value = event.target.dataset.filterValue;
        this.setState({[key]:value},()=>{
            // console.log(this.state);
            this.props.filtersApplied(this.state);
        })
    }
    resetCheckbox=()=>{
        Object.keys(this.props.activeFilters).map((key,index)=>{
            if(this.props.activeFilters[key]!=='false'){
                // document.getElementById(key).checked = false;
            }
        })
    }

    toggleFilter = (event)=>{
        if(event.target.dataset.show=="true"){
            document.getElementById('filterContent').classList.remove('d-none');
            event.target.dataset.show = "flase";
            event.target.innerHTML = '-';
        }else{
            document.getElementById('filterContent').classList.add('d-none');
            event.target.dataset.show = "true";
            event.target.innerHTML = '+';
        }
            
    }
    render() { 
        this.resetCheckbox();
        return (
            <React.Fragment>
                <div className="mb-2">
                    <span className="float-left">Filters</span>
                    <a data-show="true" onClick={this.toggleFilter} className="toggleBtn float-right badge badge-secondary d-md-none d-md-none d-sm-block">
                        +
                    </a>
                </div>
                <div className="clearfix"></div>
                <div id="filterContent" className="mt-2 d-none d-md-block d-lg-block">
                    <div className="card bg-light text-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Species</h5>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input  data-filter-value="false" id="species_human" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Human</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="species_mytholog" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Mytholog</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="species_other" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Other Species...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-light text-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Gender</h5>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="gender_male" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Male</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="gender_female" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Female</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-light text-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Origin</h5>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="origin_unknown" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Unknown</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="origin_postapocalypticearth" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Post-Apocalyptic Earth</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="origin_nuptia4" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Nuptia 4</li>
                            </ul>
                            <ul className="row list-unstyled ml-2">
                                <li>
                                <input data-filter-value="false" id="origin_otherorigins" onChange={this.applyFilter} type="checkbox" />  
                                </li>
                                <li className="ml-3 card-text">Other Origins...</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
    
}

export default Filter;