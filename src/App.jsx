import { Routes, Route } from 'react-router-dom';

import { Reset } from 'styled-reset';

import { useLocalStorage } from 'usehooks-ts';

import { useEffect } from 'react';

import { apiService } from './services/ApiService';

import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import OrdersPage from './pages/OrdersPage';
import OrdersDetailPage from './pages/OrderDetailPage';
import SignupSuccessPage from './pages/SignupSuccessPage';

import useUserStore from './hooks/useUserStore';

export default function App() {
  const [accessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  const fetchUserAmount = async () => {
    await userStore.fetchUserAmount();
  };

  useEffect(() => {
    apiService.setAccessToken(accessToken);

    if (accessToken) {
      fetchUserAmount();
    }
  }, [accessToken]);

  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/success" element={<SignupSuccessPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrdersDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
