import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { getCharacters,getCharactersByName,getCharactersByFilter } from '../actions/chars'
import Characters from './components/characters';
import Searchcharacters from './components/searchcharacters';
import Sortcharacters from './components/sortcharacters';
import Filters from './components/filters';
import Paginatecharacters from './components/paginatecharacters';
import Loader from './components/loader';
import Activefiltertag from './components/activefitertag'



class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      charactersList:[],
      currentPage:1,
      pageflag:'next',
      paginating:false,
      searchterm:'',
      sorting:'asc',
      apiinfo:{},
      filters:{},
      erroMessage:''
    }
  }
  mainContent = {};
  loaderBox = {};

  fetchCharacters = async() =>{
    this.mainContent.classList.add('d-none');
    this.loaderBox.classList.remove('d-none');
    const resCharacters = await getCharacters({...this.state});
    if(resCharacters!= false){
      this.mainContent.classList.remove('d-none');
      this.loaderBox.classList.add('d-none');
      
      if(this.state.sorting == 'asc'){
        this.setState({charactersList:resCharacters.results});
        
      }else{
        this.setState({charactersList:resCharacters.results.reverse()});
      }
      this.setState({apiinfo:resCharacters.info});
    }else{
      this.mainContent.classList.remove('d-none');
      this.loaderBox.classList.add('d-none');
      this.errorMsg();
    }
    
  } 

  errorMsg = (msg)=>{
    var container = document.getElementById('errorMsg');
    container.style.display='block';
    if(Object.keys(this.state.filters).length!==0){
        
      Object.keys(this.state.filters).map((key,index)=>{
        if(this.state.filters[key]!=='false'){
          this.setState({filter:{}})
        }
      })
    
    }
    setTimeout(()=>{

      container.style.display='none';

    },1000);
  }


  loadCharacters = (pageflag)=>{
    this.setState({paginating:true},()=>{
      this.setState({pageflag:pageflag},()=>{
        if(pageflag=='next'){
          this.setState({currentPage:this.state.currentPage+1},()=>{
            if(this.state.searchterm==""){
              this.fetchCharacters();
            }else{
              this.searchCharacters(this.state.searchterm);
            }
          });
        }else{
          this.setState({currentPage:this.state.currentPage-1},()=>{
            if(this.state.searchterm==""){
              this.fetchCharacters();
            }else{
              this.searchCharacters(this.state.searchterm);
            }
          });
        }
        
      });
    })
  }

  filtersApplied = (filters)=>{
    this.mainContent.classList.add('d-none');
    this.loaderBox.classList.remove('d-none');
    
    this.setState({filters:filters},async ()=>{
      let apiFilterStr = '';
      if(Object.keys(this.state.filters).length!==0){
        
        Object.keys(this.state.filters).map((key,index)=>{
          if(this.state.filters[key]!=='false'){
            let str_parts = key.split("_");
            apiFilterStr = ''+str_parts[0]+'='+str_parts[1];
            
          }
        })
      
      }
      const resCharacters = await getCharactersByFilter({apiFilterStr});
      if(resCharacters!= false){
        this.setState({charactersList:resCharacters.results},()=>{
          this.mainContent.classList.remove('d-none');
          this.loaderBox.classList.add('d-none');
        });
        this.setState({apiinfo:resCharacters.info});
      }else{
        this.mainContent.classList.remove('d-none');
        this.loaderBox.classList.add('d-none');
        this.errorMsg();
      }
    });
  }

  sortCharacters = (sorting)=>{
    this.setState({sorting:sorting})
    this.setState({charactersList:this.state.charactersList.reverse()});
  }

  searchCharacters = (name)=>{
    this.mainContent.classList.add('d-none');
    this.loaderBox.classList.remove('d-none');
    this.setState({searchterm:name},async  ()=>{
      const resCharacters = await getCharactersByName({...this.state});
      if(resCharacters!= false){
        if(this.state.sorting == 'asc'){
          this.setState({charactersList:resCharacters.results});
        }else{
          this.setState({charactersList:resCharacters.results.reverse()});
        }
        this.setState({apiinfo:resCharacters.info});
        this.mainContent.classList.remove('d-none');
        this.loaderBox.classList.add('d-none');
      }else{
        this.mainContent.classList.remove('d-none');
        this.loaderBox.classList.add('d-none');
        this.errorMsg('No Data Found');
      }
    })
  }
  
  componentDidMount(){
    this.mainContent = document.getElementById('mainContent');
    this.loaderBox = document.getElementById('loader');
    this.fetchCharacters();
    if(Object.keys(this.state.filters).length!==0){
      this.filtersApplied(this.state.filters);
    }
  }
  
    render(){
      const { charactersList } = this.state;
      // console.log(this.state);
      return (
        <div className="container">
            <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </Head>

            <main className="row main">
              <div className="col-sm-12 col-xs-12 col-md-3 box-border">
                <div className="filter-box">
                  <div className="filters">
                    <Filters activeFilters={this.state.filters} filtersApplied={this.filtersApplied}/>
                  </div>
                </div>
              </div>
              <div id="loader" className="col-md-9  col-xs-12 col-sm-12 d-none">
                <Loader />
              </div>
              
              <div id="mainContent" className="col-md-9 col-xs-12 col-sm-12">
                
                <div className=" mt-2">
                  <div className="row">
                    <Activefiltertag filtersApplied={this.filtersApplied} activeTags={this.state.filters} />
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                      <Searchcharacters searchCharacters={this.searchCharacters}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                      <Sortcharacters sortCharacters={this.sortCharacters}/>
                    </div>
                  </div>
                  <div id="errorMsg" style={{display:'none'}}>
                    <h5>No Data Found</h5>
                  </div>
                  <div className="character-list row">
                    <Characters {...this.state}/>
                  </div>
                  <div className="row">
                    <Paginatecharacters apiinfo={this.state.apiinfo} loadNew={this.loadCharacters}/>
                  </div>
                </div>
              </div>
              
            </main>

            

            <style jsx>{`
              
              .main{
                min-height:100vh
              }
              
            `}</style>

            <style jsx global>{`
              html {
                  font: 100%/1.625 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
                  box-sizing: border-box;
                  overflow-y: scroll;
                }
                .card-img-caption {
                  border-top-left-radius: calc(.25rem - 1px);
                  border-top-right-radius: calc(.25rem - 1px);
                  position:relative;

                }
                  
                .card-img-caption .card-img-top {
                  z-index: 0;
                  max-height: 186px;
                  
                }
                    
                .card-img-caption .card-text {
                  text-align: left;
                  width: 100%;
                  position: absolute;
                  z-index: 1;
                  bottom:0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                }
                .toggleBtn{
                  color: white !important;
                  font-weght:700;
                  lineheight:5rem
                }
                @media only screen and (max-width: 600px) {
                  .card-img-caption .card-img-top {
                    z-index: 0;
                    max-height: 323px;
                  }
                }
                
            `}</style>
          </div>
      )
    }
  

}


export default Home
