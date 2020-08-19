import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body,input,button{
    font-family: "Roboto Slab",serif;
    font-size:16px;

}

body{
    color:#FFF;
    background-color:#312E38;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
}

button{
    cursor: pointer;
}

`;
