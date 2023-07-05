import { Link } from "react-router-dom";
import App from "./app";

import { Button, Container } from "reactstrap";

export default function layout() {
  return (
    <>
      <header className="p-3 bg-light">
        <div className="h3 d-flex justify-content-between">
          <img
            width="auto"
            height={100}
            src="https://www.lumofy.com/wp-content/uploads/2022/05/Comp-1.gif"
            lazy-src="https://www.lumofy.com/wp-content/uploads/2022/05/Comp-1.gif"
            className="h3 d-flex justify-content-between"
          />
          <Button className="px-5">
            <Link to={`/`} className="text-decoration-none" color="red">
              <h2 style={{ color: "white" }}>Home</h2>
            </Link>
          </Button>
        </div>
      </header>

      <main>
        <Container className="pt-5">
          <App />
        </Container>
      </main>
    </>
  );
}
