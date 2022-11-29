
const Home = () => {
  let num = 0

  function botao() {

    num ++

    let p = document.querySelector('p')

    p.innerHTML = num
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick= {botao} > Clique aqui </button>
      <p></p>
    </div>
  );
};

export default Home;