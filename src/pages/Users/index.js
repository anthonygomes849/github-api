import React, { useState} from 'react'
import api from '../../services/api'
import { Container,Input,Button,Form,Error} from './style'
import logo from '../../assets/img/logo.png'
import errorImg from '../../assets/img/error.png'
import history from './history'
import './styles.css';


export default function Users(props) {
    const [input, setInput] = useState('');
    
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);
    
    async function getUsers(e) {
        e.preventDefault();
       try{ 
            //Enviando o Valor do Login na Url
            const { data } = await api.get(`/users/${input}`)
            //Guardando Valor do Login do Usuario
            localStorage.setItem('@githubApi/repository', data.login)
            // Guardando os Dados do Usuario Buscado
            localStorage.setItem('@githubApi/users', JSON.stringify(data))
            setInput('')
            setUsers(data)
            setError(false)
            //Redirecionando o Usuario pra tela de Resultados
            props.history.push(`/detail`)
            

            console.log(data)
        }catch(err){
            setTimeout(() => {
                setError(true)
            },3000)
            
            history.push('/')
        }
    }
    
  
     return(
        
        <div className="app">
                
            <Container>


                
                    <Error errorMessage={error}>
                    <img src={errorImg} width='24' alt=""/>&nbsp;

                    <strong>Usuario nao Encontrado</strong>
                </Error>
       

                <Form >
                   <img src={logo} className="logo-alt" alt=""/>
                <Input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Digite o Usuario do Github"
                />
                <Button onClick={getUsers}>Pesquisar</Button>


                
               </Form>
            </Container>
            
        </div>
       
        
    );
}


