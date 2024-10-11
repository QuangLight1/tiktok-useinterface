import Header from '~/conponents/Layouts/conponents/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;