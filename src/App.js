import { useState } from "react";
import SearchBar from "./components/searchbar";

import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
  border: none;
  background-color: #444;
  color: #fff;

  &:hover {
    background-color: #666;
  }
`;

// Database
const people = [
  {
    id: "people-01",
    title: "Lionel Messi",
  },
  {
    id: "people-02",
    title: "Nahuel Molina",
  },
  {
    id: "people-03",
    title: "Rodrigo De Paul",
  },
  {
    id: "people-04",
    title: "Dibu Martinez",
  },
  {
    id: "people-05",
    title: "Cuti Romero",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");
  const [count, setCount] = useState(0);

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
        break;
    }
  }

  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">
        All
      </Button>
      <Button onClick={handleClick} name="people">
        People
      </Button>
      <Button onClick={handleClick} name="calendar">
        Calendar
      </Button>
      <Button onClick={handleClick} name="emails">
        Emails
      </Button>

      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </Button>

      {selection ? (
        <div>You selected: {selection.title}</div>
      ) : (
        "No item selected"
      )}

      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
