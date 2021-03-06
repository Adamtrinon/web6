import React from 'react'
import { Container,FormWrap,Icon,FormContent,Form,FormH1,
    FormLabel,FormInput,FormButton,Text } from './signinElements'

const Signin = () => {
    return (
       <>
        <Container>
            <FormWrap>
                <Icon to="/">Memes</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='Email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
       </>
    )
}

export default Signin
