import React,{useCallback, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import {useToast} from '../../hooks/toast';
import { Container, Content, AnimationContainer, Background } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';


interface SignUpData{
    name:string;
    email:string;
    password:string;
}


const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const {addToast} = useToast();
    const history = useHistory();

    const handleSubmit =  useCallback(async (data: SignUpData) =>{
       try{
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            email: Yup.string()
                .required('Email obrigatório')
                .email('Digite um email válido'),
            password: Yup.string()
                .min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        console.log(data);
        await api.post('/users',data);

        addToast({
            type:'success',
            title: 'Cadastro realizado',
            description: 'Você já pode fazer seu logon no GoBarber!',
        });

        history.push('/');

       }catch(err){
        if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);

            return;
           }
           addToast({
               type: 'error',
               title: 'Erro no cadastro',
               description: 'Ocorreu um erro ao realizar o cadastro',
           });
       }
    },[addToast, history]);

    return(
        <Container>
        <Background />
        <Content>
            <AnimationContainer>
                <img src={ logo } alt="GoBarber" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input
                    icon={FiUser}
                    name="name"
                    placeholder="Nome" />

                    <Input
                    icon={FiMail}
                    name="email"
                    placeholder="E-mail" />

                    <Input
                    icon={FiLock}
                    name="password"
                    type="password"
                    placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </AnimationContainer>
        </Content>

    </Container>
    );
}




export default SignUp;
