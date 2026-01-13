import { useState, useEffect } from 'react';
import './CryptoTracker.css';

const CryptoTracker = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
    setError(null);
    try {
      // Using CoinGecko public API
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      if (!response.ok) {
        throw new Error(
          'Network response was not ok. API might be rate limited.'
        );
      }
      const data = await response.json();
      setCoins(data);
    } catch (err) {
      setError(err.message);
      // Fallback data if API rate limited
      setCoins([
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'btc',
          current_price: 45000,
          price_change_percentage_24h: 2.5,
          image:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'eth',
          current_price: 3000,
          price_change_percentage_24h: -1.2,
          image:
            'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-container">
      <div className="header-row">
        <h2>Crypto Tracker</h2>
        <button onClick={fetchCoins} className="refresh-btn">
          Refresh
        </button>
      </div>

      {loading && <p>Loading market data...</p>}
      {error && <p className="error-text">NB: Using fallback data. {error}</p>}

      <div className="coin-list">
        <div className="coin-header">
          <span>Coin</span>
          <span className="right-align">Price</span>
          <span className="right-align">24h Change</span>
        </div>
        {coins.map((coin) => (
          <div key={coin.id} className="coin-row">
            <div className="coin-name">
              <img src={coin.image} alt={coin.name} />
              <span>{coin.name}</span>
              <span className="symbol">{coin.symbol.toUpperCase()}</span>
            </div>
            <div className="right-align">
              ${coin.current_price.toLocaleString()}
            </div>
            <div
              className={`right-align ${
                coin.price_change_percentage_24h >= 0 ? 'green' : 'red'
              }`}
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTracker;
