import { Button, LinkBack } from './ButtonBack.styled';
import { GoArrowLeft } from "react-icons/go";



const ButtonBack = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button>
        <GoArrowLeft /> 
        Go Back
      </Button>
    </LinkBack>
  );
};

export default ButtonBack;