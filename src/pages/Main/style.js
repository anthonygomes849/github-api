import styled from 'styled-components'


export const Repo = styled.div`

    padding:40px;
 
    .bio{
        color:#44475a;
        font-size:14px;
        width:10px;
    }
    .userall{
        position:relative;

    }
    span img{
        margin-right:14px;
        
    }
    .user-item span{
        margin-right:20px;
        
        
    }

    .user-item{
        position:relative;
        left:2.5rem;
        width:20%;
        
        
    }
   
    .user-item span p{
        color: #CD5C5C;
        
    }
    .users-avatar img{
        border-radius:100%;
        width:15%;
    }
    h1{
        color:white;
        position:relative;
        margin-top:20px;
        margin-bottom:10px;
        font-family: 'Roboto', sans-serif;

    }
    span{
        color:white;
        margin-top:40px;
        font-family: 'Roboto', sans-serif;

    }
    .users-find{

    }
`;
export const List = styled.div`
    padding:60px;
    display:flex;
    flex-direction: row;
    align-content:center;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    position:relative;
    left:14%;
    height:25px;
    background: #44475a;
    top:-25rem;
    border-radius:8px;
    width:10%;


    li{
        flex-direction:row;
        position:absolute;
        list-style:none;
        width:100%;
    }
    span{
        width:120%;
        
    }
    .repo-fork span{
        font-size: 14px;
        margin:0 auto;
        width:100%;
        position:absolute;
        top:3.5rem;
        left:0.2rem;
        color:white;
    }
    .repo-stars span{
        font-size: 14px;
        margin:0 auto;
        width:100%;
        position:absolute;
        
        top:3.5rem;
        left:-3rem;
        color:white;
    }
    .repo-name span {
        font-size: 17px;
        font-weight:bold;
        margin:0 auto;
        width:100%;
        position:relative;
        top:-3rem;
        left:-3rem;
        color:white;
        max-width:20%;
    }
    .align-itens{
        
    
    }
    .repo-description{
        position:relative;
        left:-3rem;
        top:-3.2rem;
        width:90%;
    }
    .repo-description span{
        font-size:13px;
        color:#ccc;
        
        max-width: 20%;
    }
`;

export const Message = styled.div`
  display: ${props => props.messageNull ? 'block' : 'none'};
  font-size:22px;
  color:#a9a9a9 !important;
  position:absolute;
  top:50%;

  left:50%;
  transform:translate(-50%,-50%)
`;