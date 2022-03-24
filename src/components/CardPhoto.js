import React from "react";
import { useState, useEffect } from "react";
import { choosePerson, getProfileToChoose } from "../services/integracoes";
import {
  BorderPhoto,
  ButtonArea,
  ButtonHeart,
  ButtonX,
  ContainerCard,
  ContainerDescription,
  ContainerPhoto,
  NameAge,
} from "./StyleGeral";
import coacaoPulsando from "../assets/heart.gif";

export default function CardPhoto(props) {
  const [file, setFile] = useState({});
  const [click, setClick] = useState(0);

  const addFile = (data) => {
    setFile(data);
  };

  const newFile = () => {
    setClick(click + 1);
  };

  useEffect(() => {
    getProfileToChoose(props.name, addFile);
  }, [click, props.name]);

  const matchYes = () => {
    choosePerson(props.name, file.id, true);
    setFile({})
    newFile()
  };

  const matchNo = () => {
    choosePerson(props.name, file.id, false);
    setFile({})
    newFile()
  };

  return (
    <ContainerCard>
      {file && file.name ? (
        <BorderPhoto>
          <ContainerPhoto url={file.photo}></ContainerPhoto>
          <img src={file.photo} alt='foto do perfil' />
          <ContainerDescription>
            <NameAge>
              <h2>{file.name},</h2>
              <h3>{file.age}</h3>
            </NameAge>
            <p>{file.bio}</p>
          </ContainerDescription>
        </BorderPhoto>
      ) : (
        <img src={coacaoPulsando} alt='corações pulsando' />
      )}
      <ButtonArea>
        <ButtonX onClick={matchNo}>X</ButtonX>
        <ButtonHeart onClick={matchYes}>♥</ButtonHeart>
      </ButtonArea>
    </ContainerCard>
  );
}
