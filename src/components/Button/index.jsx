/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react"
import { Container } from "./styles"

export const Button = forwardRef(
  ({ loading = false, children, ...rest }, ref) => {
    return (
      <Container isLoading={loading} {...rest} ref={ref}>
        {children}
      </Container>
    )
  }
)
