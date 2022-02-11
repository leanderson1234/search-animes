import styled from 'styled-components'

export const Content = styled.div`
    display:flex;
    background: #fcfafd;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    
    transition:ease .5s;
    :hover{
      background: rgb(110 41 189 / 50%);
    }
  `
export const ContentBlock2 = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    position: relative;
    bottom: 72px;
    left: 132px;
    width: fit-content;
    
    svg{
      color:#ffeb3b;
    }
  `
export const Rating = styled.div`
    background: rgba(255,255,255,.8);
    font-weight: 900;
    border: 2px ridge #522d75;
    border-radius: 40px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

  `

export const Title = styled.h2`
    width: 216px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:18px;
  `
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    `
export const Link = styled.a`
    text-decoration: none;
    color:#250130
    `