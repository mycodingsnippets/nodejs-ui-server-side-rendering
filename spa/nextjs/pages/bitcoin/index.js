import Fetch from 'isomorphic-unfetch';
import Layout from "../../components/bitcoin/Layout";
import Prices from "../../components/bitcoin/Prices";

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Dot Com Engineer</h1>
            <p>Check Current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi: data.bpi
    }
};

export default Index;