import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`

// App.js
export const Container = styled.div`
    background-image: linear-gradient(to bottom left, #ff8941, #dd4587);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .button-clear{
        position: fixed;
        right: 10px;
        bottom: 10px;
    }
`

export const Card = styled.div`
    background-color: white;
    width: 400px;
    max-width: 100vw;
    height: ${(props) => props.altura};
    border: 1px solid black;
    border-radius: 10px 20px;
    .button-matches{
        display: block;
        margin: 5px auto;
    }
`

//Pages
export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;
    .pink{
        color: #dd4587;
    };
    .orange{
        color: #ff8941;
    }
`
export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
`

//CardPhoto.js
export const ContainerCard = styled.div`
    flex-grow: 1;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    -webkit-box-pack: end;
`
export const BorderPhoto = styled.div`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 450px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    img{
        width: 100%;
        display: block;
        z-index: 1;
    }
    /* animation: rotate-right 1s ease-in;
    @keyframes rotate-right {
        0%{
            transform: translateX(0) rotate(0);
        }
        100%{
            transform: translateX(100px) rotate(20deg);
        }
    } */
`
export const ContainerPhoto = styled.div`
    background-image: url(${(props) => props.url});
    filter: blur(20px);
    height: 100%;
    width: 100%;
    position: absolute;
`

export const ContainerDescription = styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 15px;
    z-index: 2;
`

export const NameAge = styled.div`
    display: flex;
    align-items: flex-end;
    h2{
        padding-right: 8px;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
    overflow: hidden;
`

export const ButtonX = styled.button`
    color: red;
    background-color: white;
    border: 1px solid red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    -webkit-transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    :hover{
        color: white;
        background-color: red;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`

export const ButtonHeart = styled.button`
    color: green;
    background-color: white;
    border: 1px solid green;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    -webkit-transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    :hover{
        color: white;
        background-color: green;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`

//Matches.js

export const Itens = styled.li`
    height: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    cursor: pointer;
    :hover{
        background-color: #dcdcdc;
    }
`
export const ImgDiv = styled.div`
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
    background: url(${(props) => props.url}) center center / 100% no-repeat;
`

export const ListArea = styled.div`
    margin: 10px;
    height: 500px;
    overflow-y: scroll;
`