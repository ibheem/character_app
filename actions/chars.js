import axios from 'axios';


export const getCharacters=async (props)=>{
    const currentpage = props.currentPage;
    try{
        const characterList = await axios.get('https://rickandmortyapi.com/api/character/?page='+currentpage)
        return characterList.data;
    }catch{
        return false;
    }
    
    
}
export  const getCharactersByName=async (props)=>{
    const name = props.searchterm;
    try{
        if(props.paginating==false){
            const characterList = await axios.get('https://rickandmortyapi.com/api/character/?name='+name)
            if(characterList.hasOwnProperty('error')){
                return false;
            }else{
                return characterList.data;
            }
        }else{
            if(props.pageflag=='next'){
                const characterList = await axios.get(props.apiinfo.next)
                if(characterList.hasOwnProperty('error')){
                    return false;
                }else{
                    return characterList.data;
                }
            }else{
                const characterList = await axios.get(props.apiinfo.prev)
                return characterList.data;
               
            }
        }  
    }catch{
        return false;
    }
    
    
    
}
export  const getCharactersByFilter=async (props)=>{
    try{
        const characterList = await axios.get('https://rickandmortyapi.com/api/character/?'+props.apiFilterStr);
        return characterList.data; 
    }catch{
        return false;
    }
}

export default { getCharacters,getCharactersByName,getCharactersByFilter };



