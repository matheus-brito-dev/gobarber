import styled, {keyframes} from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`

    height:100vh; /*100% do viewport heigth do navegador do user*/
    display:flex;
    align-items: stretch;
`;

export const Content = styled.div`

    /* place-content: center; permite colocar o conteúdo da div no meio v e h */
    width:100%;
    max-width:700px;
    display:flex;
    justify-content:center;
    align-items:center;

`;

const appearFromRight = keyframes`

    from{
        opacity:0;
        transform: translateX(50px);
    }
    to{
        opacity:1;
        transform: translateX(0);
    }

`;

export const AnimationContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    animation: ${appearFromRight} 1s;

form{
        margin:80px 0;
        width:340px;
        text-align:center;
    }

    h1{
        margin-bottom:24px;
    }



    a{
        color:#f4ede8;
        display:block;
        text-decoration:none;
        margin-top:24px;
        transition: color 0.2s;

        &:hover{
            color: ${shade(0.2, '#f4ede8')};
        }
    }

    > a{ /* O > diz que é pra estilizar o a que está dentro do content
            mesmo que tenha a dentro de outros containers dentro de content
            ele não pegará, somente o que tá dentro de content
        */
        color:#ff9000;
        display:flex;
        align-items:center;
        text-decoration:none;
        margin-top:24px;
        transition: color 0.2s;

        svg{
            margin-right:16px;
        }

        &:hover{
            color: ${shade(0.2,'#ff9000')};
        }


    }

`;
export const Background = styled.div`

    flex:1;
    background: url(${signUpBackground}) no-repeat center;
    background-size:cover;
`;
