import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import CaretLeft from "../../assets/CaretLeft.svg"
import PreviewPlaceholder from "../../assets/empty_plate.png"

import { Container, Content } from "./styles"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { api } from "../../services/api"

export function AdminDishes() {
  const [dish, setDish] = useState(null) // Garantir que o estado inicial seja null

  const { id } = useParams() // Obter id do prato via params
  const navigate = useNavigate()

  const dishPreviewURL = dish?.picture
    ? `${api.defaults.baseURL}/files/${dish.picture}`
    : PreviewPlaceholder

  // Função para buscar dados do prato na API
  async function fetchDish(id) {
    const dishId = Number(id)
    try {
      const { data } = await api.get(`/dishes/${dishId}`)
      if (data.id) {
        setDish(data) // Atualizar estado do prato
      }
    } catch (error) {
      console.error(error)
      navigate("/") // Redirecionar em caso de erro
    }
  }

  // useEffect para buscar os dados do prato ao montar o componente
  useEffect(() => {
    if (id) {
      fetchDish(id)
    }
  }, [id]) // Adicionando 'id' às dependências

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <img src={CaretLeft} alt="voltar" /> Voltar
        </Link>
        {dish && (
          <div className="dish-wrapper">
            <div className="dish-preview">
              <img src={dishPreviewURL} alt="foto do prato" />
            </div>
            <div className="info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <div className="tags">
                {dish.ingredients?.map((item, index) => (
                  <Tag key={index} title={item} />
                ))}
              </div>
              <div className="order">
                <Link to={`/edit/${dish.id}`}>
                  <Button> Editar prato </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Content>
      <Footer />
    </Container>
  )
}
