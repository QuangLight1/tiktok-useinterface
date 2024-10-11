import Header from '~/conponents/Layouts/conponents/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;
