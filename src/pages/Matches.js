import React, { useState, useEffect } from 'react';
import { ContainerHome, ImgDiv, Itens, ListArea, Title, TitleArea } from '../components/StyleGeral';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { getMatches } from '../services/integracoes'

export default function Matches(props) {
  const [listProfiles, setListProfiles] = useState([])

  const addFile = (data) => {
    setListProfiles(data)
  }


  useEffect(()=>{
    getMatches(props.name, addFile)
  }, [])

  const profile = listProfiles.map((item) =>{
    return (
    <Itens key={item.id}>
        <ImgDiv url={item.photo} />
        <p>{item.name}</p>
    </Itens>)
  })

  return (
  <ContainerHome>
      <TitleArea>
        <IconButton color='primary' onClick={props.changeHome}>
            <PeopleAltIcon />
            <CompareArrowsIcon fontSize='small' />
        </IconButton>
        <Title>
            <h1 className='pink'>astro</h1>
            <h1 className='orange'>match</h1>
        </Title>
      </TitleArea> 
      <hr></hr>
      <ListArea>
        {listProfiles.length!==0 && profile}
      </ListArea>
  </ContainerHome>);
}