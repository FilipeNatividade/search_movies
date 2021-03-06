import { useStateProvider } from "../../providers/state-context";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "@styled-icons/bootstrap";
import { Container, Buttons, Small } from "./style";
import { Link } from "react-router-dom";

const ButtonsPages = () => {

  const { data, pages, count, SetCount } = useStateProvider();

  const handlePages = (operator) => {
    if (operator === "+") {
      SetCount(count + 1);
    } else {
      SetCount(count - 1);
    }
  };

  return (
    <Container>
      <a href="/#">
        <Buttons
          className={count > 1 ? "" : "hidden"}
          title="Previous"
          onClick={() => handlePages("-")}
        >
          <ArrowLeftCircleFill className="arrowButton" />
        </Buttons>
      </a>
      {data !== undefined && (
        <Small>
          {count} / {pages}
        </Small>
      )}

      <a href='/#'>
        <Buttons
          className={count < pages ? "" : "hidden"}
          title="next"
          onClick={() => handlePages("+")}
        >
          <ArrowRightCircleFill className="arrowButton" />
        </Buttons>
      </a>
    </Container>
  );
};

export default ButtonsPages;
