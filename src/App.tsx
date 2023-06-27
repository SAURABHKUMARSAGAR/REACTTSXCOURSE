import "./styles.css";
import { Person } from "./Person";
import { Greet } from "./Greet";
import { PersonArray } from "./PersonArray";

export default function App() {
  const PersonName = {
    first: "Saurabh",
    last: "Kumar"
  };

  const PersonListName = [
    {
      first: "Saurabh",
      last: "Kumar"
    },
    {
      first: "Sukhvindra",
      last: "Gill"
    },
    {
      first: "Wassen",
      last: "Khan"
    },
    {
      first: "Aditiya",
      last: "Kumar"
    }
  ];
  return (
    <div className="App">
      <Person names={PersonName} />
      <Greet name="SaurabhKumar" count={10} isLogged={true} />
      <PersonArray Names={PersonListName} />
    </div>
  );
}
