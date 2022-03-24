import axios from 'axios'
import { baseURL } from '../constants/urls'

export const getProfileToChoose = (aluno, funcao) =>{
    const url = `${baseURL}${aluno}/person`
    axios.get(url)
    .then((resp)=>{funcao(resp.data.profile)})
    .catch((err)=>{console.log(err)})
}

export const choosePerson = (aluno, id, choose) =>{
    const url = `${baseURL}${aluno}/choose-person`
    const body = {
        "id": id,
	    "choice": choose
    }
    axios.post(url, body)
    .then()
    .catch((err)=>{console.log(err.response)})
}

export const getMatches = (aluno, funcao) =>{
    const url = `${baseURL}${aluno}/matches`
    axios.get(url)
    .then((resp)=>{funcao(resp.data.matches)})
    .catch((err)=>{console.log(err.response)})
}

export const clearAll = (aluno) =>{
    const url = `${baseURL}${aluno}/clear`
    axios.put(url)
    .then()
    .catch((err)=>{console.log(err.response)})
}