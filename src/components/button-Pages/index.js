import { useStateProvider } from "../../providers/state-context";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "@styled-icons/bootstrap";
import { Container, Buttons } from "./style";
const ButtonsPages = () => {
  const { pages, count, SetCount } = useStateProvider();

  const handlePages = (operator) => {
    if (operator === "+") {
      SetCount(count + 1);
    } else {
      SetCount(count - 1);
    }
  };

  return (
    <Container href="#">
        {count > 1 && (
          <Buttons onClick={() => handlePages("-")}>
            <ArrowLeftCircleFill className="arrowButton" />
          </Buttons>
        )}
        {count < pages && (
          <Buttons onClick={() => handlePages("+")}>
            <ArrowRightCircleFill className="arrowButton" />
          </Buttons>
        )}
    </Container>
  );
};

export default ButtonsPages;
