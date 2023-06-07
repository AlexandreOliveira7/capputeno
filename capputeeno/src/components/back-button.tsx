import { styled } from "styled-components";
import { BackIcon } from "./back-icon";
import { useRouter } from 'next/navigation';


const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secundary-text);
`
interface BtnProps{
  navigate: string;
}

export function BackBtn(props: BtnProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(props.navigate)
  }
  return(
    <Button onClick={handleNavigate}>
       <BackIcon/>
        voltar
    </Button>
  )
}