
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

const CartCounte = styled.span`
  width: 17px;
  height: 17px;
  
  background-color: var(--delete-color);
  color: red;
  
  position: absolute;
  right: -10px;
  top: 50%;
`

const Container = styled.div`
  position: relative;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items',[])

  return(
    <Container>
      <CartIcon />
      {value.length && <CartCounte>value.length</CartCounte
      >}
    </Container>
  )
}