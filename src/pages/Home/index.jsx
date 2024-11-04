import { useRef, useState } from "react"
import api from "../../services/api"
import { All, Title, Form, ContainerInput, Input, InputLabel } from "./styles"
import Button from "../../components/Button"
import Topbackground from "../../components/TopContainer"
import { useNavigate } from "react-router-dom"



function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {

    await api.post("./users", {

        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        email: inputEmail.current.value

        
    })
  }

 

  const navigate = useNavigate()

  return (
    <All>
      <Topbackground/>

      <Title>User Registration</Title>

      <Form>

        <ContainerInput>
          <div>
            <InputLabel>
              Name <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="User name" ref={inputName} ></Input>
          </div>
          <div>
            <InputLabel>
              Age <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="User age" ref={inputAge}></Input>
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type="email" placeholder="User e-mail" ref={inputEmail} ></Input>
        </div>

        <Button type="button" theme="primary" onClick={registerNewUser}>Register User</Button>

      </Form>

      <Button type="button" onClick={() => navigate("/list-User")}>See Users</Button>

    </All>
  )
}

export default Home
