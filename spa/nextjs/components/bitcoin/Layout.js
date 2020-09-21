import Head from 'next/head';
import Navbar from "./Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Dot Com Engineer</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;