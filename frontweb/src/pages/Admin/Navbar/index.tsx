import './styles.css'

const Navbar = () => {
  return (
    <nav className="admin-navbar-content">
      <ul>
        <li>
          <a href="link" className='admin-link-item active'>
            <p>Produtos</p>
          </a>
        </li>
        <li>
          <a href="link" className='admin-link-item'>
            <p>Categorias</p>
          </a>
        </li>
        <li>
          <a href="link" className='admin-link-item'>
            <p>Usuários</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
