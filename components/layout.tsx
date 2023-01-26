import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';


interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
    <Navbar/>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};
