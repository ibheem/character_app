import React from 'react';



class Paginatecharacters extends React.Component{
    state={
        pageflag:'next',
        currentpage:1
    }
    loadCharacters = ()=>{
        event.preventDefault();
        this.setState({pageflag:event.target.dataset.paginate},()=>{
            this.props.loadNew(this.state.pageflag);
            if(this.state.pageflag=="next"){
                this.setState({currentpage:this.state.currentpage+1},()=>{
                    document.getElementById('currentPage').innerHTML=this.state.currentpage;
                    document.getElementById('prevPageBtn').classList.remove('disabled');
                })
            }else{
                this.setState({currentpage:this.state.currentpage-1},()=>{
                    document.getElementById('currentPage').innerHTML=this.state.currentpage;
                    if(this.state.currentpage==1){
                        document.getElementById('prevPageBtn').classList.add('disabled');
                    }
                })
            }
        });
       
    }
    
    renderPagination = ()=>{
        if(Object.keys(this.props.apiinfo).length!==0){
            if(this.props.apiinfo.next=='' && this.props.apiinfo.prev==''){
                return(
                    <div id="pagination_wizard" className="mx-auto mt-3 ">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination">
                                <li id="prevPageBtn"   className="page-item disabled"><a data-paginate='prev' onClick={this.loadCharacters} className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a id="currentPage" className="page-link">1</a></li>
                                <li  className="page-item disabled" ><a data-paginate='next' onClick={this.loadCharacters} className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                )
            }
            if(this.props.apiinfo.next==''){
                return(
                    <div id="pagination_wizard" className="mx-auto mt-3 ">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination">
                                <li id="prevPageBtn"   className="page-item"><a data-paginate='prev' onClick={this.loadCharacters} className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a id="currentPage" className="page-link">1</a></li>
                                <li  className="page-item disabled" ><a data-paginate='next' onClick={this.loadCharacters} className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                )
            }
            if(this.props.apiinfo.prev==''){
                return(
                    <div id="pagination_wizard" className="mx-auto mt-3 ">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination">
                                <li id="prevPageBtn"   className="page-item  disabled"><a data-paginate='prev' onClick={this.loadCharacters} className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a id="currentPage" className="page-link">1</a></li>
                                <li  className="page-item" ><a data-paginate='next' onClick={this.loadCharacters} className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                )
            }
            return(
                <div id="pagination_wizard" className="mx-auto mt-3 ">
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination">
                            <li id="prevPageBtn"   className="page-item "><a data-paginate='prev' onClick={this.loadCharacters} className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a id="currentPage" className="page-link">1</a></li>
                            <li  className="page-item" ><a data-paginate='next' onClick={this.loadCharacters} className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            )
            
            
        }else{
            return(
                <div id="pagination_wizard" className="mx-auto mt-3 ">
                    
                </div>
            )
        }
    }
    
    render(){
        // if(Object.keys(this.props.apiinfo).length==0){
        //     alert();
        //     document.getElementById('pagination_wizard').style.display='none';
        // }
        return(
            <React.Fragment>
                {this.renderPagination()}
                
                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
    
}

export default Paginatecharacters;