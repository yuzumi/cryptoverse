import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptoNewsQuery } from 'services/crypto-news';
import { useGetCryptosQuery } from 'services/crypto';

import { CryptocurrenciesList, NewsList, Loader } from 'components';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching: isFetching1 } = useGetCryptosQuery({ count: 10 });

  const { data: news, isFetching: isFetching2 } = useGetCryptoNewsQuery({ category: 'Cryptocurrency', count: 6 })

  return (
    <div className="page">
      <Title className="heading" level={2}>
        Global Crypto Stats
      </Title>

      {isFetching1 ? (
        <Loader />
      ) : (
        <Row>
          <Col span={12}>
            <Statistic 
              title="Total Cryptocurrencies"
              value={data.stats.total}
            />
          </Col>
          <Col span={12}>
            <Statistic 
              title="Total Exchanges"
              value={millify(data.stats.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic 
              title="Total Market Cap"
              value={millify(data.stats.totalMarketCap)}
            />
          </Col>
          <Col span={12}>
            <Statistic 
              title="Total 24h Volume"
              value={millify(data.stats.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            <Statistic 
              title="Total Markets"
              value={millify(data.stats.totalMarkets)}
            />
          </Col>
        </Row>
      )}
      
      <div className="home-heading-container">
        <Title className="home-title" level={2}>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title className="show-more" level={3}>
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      
      {isFetching1 ? (
        <Loader />
      ) : (
        <CryptocurrenciesList cryptos={data.coins} />
      )}

      <div className="home-heading-container">
        <Title className="home-title" level={2}>
          Latest Crypto News
        </Title>
        <Title className="show-more" level={3}>
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      
      {isFetching2 ? (
        <Loader />
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
};

export default Home;
