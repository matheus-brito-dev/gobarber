import React, { ButtonHTMLAttributes }  from 'react';


import { Container } from './style';


//interface vazia o eslint já joga como um type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => ( //recebendo todas as props
    //passando todas as props com spread
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;
