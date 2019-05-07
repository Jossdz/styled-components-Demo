import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => 
    props.type === 'ghost' ? 'transparent' :
    props.type === 'danger' ? 'crimson' :
  'palevioletred'
  };
  border-radius: 3px;
  border: 2px solid ${props => 
    props.type === 'ghost' ? 'transparent' :
    props.type === 'danger' ? 'crimson' :
  'palevioletred'
  };;
  color: ${props => 
    props.type === 'ghost' ? 'palevioletred': 
    props.type === 'danger' ? 'white': 
    'white'};
  margin: 0 1em;
  padding: 0.25em 1em;
` 

export const Card = styled.div`
background: #fff;
border-radius: 2px;
display: inline-block;
height: 300px;
margin: 1rem;
width: 300px;
display: flex;
flex-direction: column;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
justify-content: space-around;

&:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
p{
  padding: 0 1rem;
  font-size: 0.8rem;
}
nav{
  display: flex;
  justify-content: space-evenly;
  button{
    border: none;
    text-decoration: underline;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
      background-color: yellowgreen;
    }
  }
}

@media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`