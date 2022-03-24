import React from 'react';
import { ContainerHome, Title, TitleArea } from '../components/StyleGeral';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CheckIcon from '@material-ui/icons/Check';
import CardPhoto from '../components/CardPhoto';

export default function Home(props) {

  const profile = () =>{
    return <CardPhoto newProfile={props.newProfile} name={props.name} />
  }

  return (
  <ContainerHome>
      <TitleArea>
        <Title>
            <h1 className='pink'>astro</h1>
            <h1 className='orange'>match</h1>
        </Title>
        <IconButton color='primary' onClick={props.changeMatches}>
            <PeopleAltIcon />
            <CheckIcon fontSize='small' />
        </IconButton>
      </TitleArea> 
      <hr></hr>
      {profile()}
  </ContainerHome>);
}
