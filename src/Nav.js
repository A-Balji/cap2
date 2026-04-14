let Nav = function () {
  return (
    <>
      <ul className="allNav">
        <li>
          <a href="/" tabIndex="1">
            Home
          </a>
        </li>
        <li>
          <a href="/about" tabIndex="2">
            About
          </a>
        </li>
        <li>
          <a href="/menu" tabIndex="3">
            Menu
          </a>
        </li>
        <li>
          <a href="/booking" tabIndex="4">
            Reservations
          </a>
        </li>
        <li>
          <a href="/order" tabIndex="5">
            Order online
          </a>
        </li>
        <li>
          <a href="/login" tabIndex="6">
            Login
          </a>
        </li>
      </ul>
    </>
  );
};
export default Nav;
