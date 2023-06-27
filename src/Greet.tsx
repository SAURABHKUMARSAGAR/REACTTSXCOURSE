type GreetProps = {
  name: string;
  count: number;
  isLogged: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLogged ? (
        <div>
          Welcome {props.name} and {props.count}
        </div>
      ) : (
        "Welcome to New Screen"
      )}
    </div>
  );
};
