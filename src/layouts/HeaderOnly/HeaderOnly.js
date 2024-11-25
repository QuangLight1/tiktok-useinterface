import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default HeaderOnly;
