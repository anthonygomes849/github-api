import React, {useState,useEffect} from 'react';
import api from '../../services/api'
import { Repo,List,Message } from './style'
import following from '../../assets/img/following.png'
import followers from '../../assets/img/followers.png'
import stars from '../../assets/img/star.png'
import codeFork from '../../assets/img/code-fork.png'
import './styles.css'


export default function Main(props){
    const [repos,setRepos] = useState([]);
    
    const [message,setMessage] = useState('')
    //Pegando todos os Repositorios do Usuario Buscado
    const repolist = localStorage.getItem('@githubApi/repository');
    //Pegando dados do usuario buscado
    const repolist1 = localStorage.getItem('@githubApi/users');
    //Convertendo Javascript pra Json
    const result = JSON.parse(repolist1)

    console.log(result)
    


      //Capturando todos os repossitorios do Usuario
      useEffect(() => {
          
        async function getRepo() {
         try{
            
            const {data} = await api.get(`/users/${repolist}/repos`)
            const sortStarsData = await data.sort((starsBigger,starSmaller) => starSmaller.stargazers_count - starsBigger.stargazers_count);
            const sortForksData = await data.sort((forkBigger,forkSmaller) => forkSmaller.forks_count - forkBigger.forks_count);
            
            // Verificando se o Usuario tem repositorios publicos
            if(data.length === 0 || data === null){
                setMessage('O Usuario nao Possui Repositorios Publico')
            }
            
            
            setRepos(data)
            
            
            
         }catch(err){
         }
        }

        getRepo();
          
      },[]);
    return(
        <>
        
            <div className="user">
                <Repo>
                            <div className="users-avatar">
                                <img  src={result.avatar_url} alt=""/>
                                
                            </div>
                            <div className="user-item">

                                <h1>{result.login}</h1>  
                                <span>{result.email || <p>null</p>}</span><br/><br/>
                                <span><img src={following} width="16" alt=""/>{result.following}</span>
                                <span><img src={followers} width="16" alt=""/>{result.followers}</span><br/><br/>
                                <span className="bio">{result.bio || <p>null</p>}</span>
                            </div>

                </Repo>
            </div>
            <div className="content">    
                <Message  messageNull={message}>{message}</Message>
                {repos.map(repo => (
                    <List>
                        <li key={repo.id}>
                            <div className="align-itens">
                            <div className="repo-name">
                                <span>{repo.name}</span><br/><br/>
                            </div>

                            <div className="repo-description">
                                <span>{repo.description}</span><br/><br/><br/>
                            </div>

                            <div className="repo-stars">
                                <span> <img src={stars} width="14" alt=""/> {repo.stargazers_count}</span>
                            </div>
                            <div className="repo-fork">
                                <span className="repo-fork"> <img src={codeFork} width="14" alt=""/> {repo.forks_count}</span>
                            </div>
                            </div>
                        </li>
                    </List>
                ))}
            </div>
        </>
    );
}