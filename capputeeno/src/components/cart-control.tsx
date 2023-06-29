
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation"


const CartCounte = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  
  background-color: var(--delete-color);
  color: white;
  
 margin-left: -10px;
`

const Container = styled.div`
  position: relative;
  
`


export function CartControl() {
  const { value } = useLocalStorage('cart-items',[])
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/cart")
  }

  return(
    <Container onClick={handleNavigate}>
      <CartIcon />
      {value.length > 0 && <CartCounte>{value.length}</CartCounte> }
     
    </Container>
  )
}