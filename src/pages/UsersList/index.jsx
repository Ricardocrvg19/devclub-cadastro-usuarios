import api from "../../services/api"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Topbackground from "../../components/TopContainer"
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles"
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom"



function ListUsers() {

    const [usersFromApi, setUsersFromApi] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get("/users")
            setUsersFromApi(data)
        }
        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)
        const updateUsers = usersFromApi.filter(user => user.id !== id)

        setUsersFromApi(updateUsers)
    }


    return (
        <Container>
            <Topbackground />

            <Title>List Users</Title>

            <ContainerUsers>

                {usersFromApi.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="Icone-Lixo" onClick={() => deleteUsers(user.id)}  />
                    </CardUsers>
                ))}

            </ContainerUsers>

            <Button type="button" onClick={() => navigate("/")}>Voltar</Button>
        </Container>
    )
}

export default ListUsers