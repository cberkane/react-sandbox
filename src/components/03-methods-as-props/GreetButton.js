export const GreetButton = (props) => {
  /**
   * Child component can call its prop as a method
   */
  const { greet } = props;
  return <button onClick={greet}> Greet</button>;
}
