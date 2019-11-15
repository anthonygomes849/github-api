import styled from 'styled-components';

export const Container = styled.div `
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.div``;

export const Error = styled.div`
  display: ${props => props.errorMessage ? 'block' : 'none'};
  padding: 30px;
  background: #ff5555;
  color:white;
  position: relative;
  left:30rem
`;


export const Form = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  position:relative;
  top:24rem;

`;
export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  width:100% !important;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
`;
export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  width:113%;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  background: #7159c1;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
`;