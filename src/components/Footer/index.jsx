import { Container } from "./styles"

import logo from "../../assets/logo-footer.svg"

export function Footer() {
  return (
    <Container>
      <div className="logo-footer">
        <img src={logo} alt="logo foodexplorer" />
        <span>food explorer</span>
      </div>
      <p className="copyright">&copy; 2024 - Todos os direitos reservados.</p>
    </Container>
  )
}
