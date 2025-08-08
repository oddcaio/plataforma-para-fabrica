import "../../pages/home/Home.css";

export default function Home() {
  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
