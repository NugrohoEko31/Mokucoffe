import React from 'react';
import { useForm } from '@inertiajs/react';
import logo from '../../assets/LOGOMOKU.PNG';

const LoginPage = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/login');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--kopi-bg)',
      }}
      className="login-bg"
    >
      <div
        style={{
          background: 'var(--kopi-bg-card)',
          borderRadius: 24,
          padding: '56px 46px 50px 46px',
          boxShadow: '0 12px 48px #80543822',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 600,
        }}
        className="card"
      >
        <img
          src={logo}
          alt="Moku Coffee"
          style={{ width: 144, marginBottom: 45, marginTop: 7 }}
        />
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Helvetica, Orbitron, Montserrat, sans-serif',
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 1.7,
              color: 'var(--kopi-main)',
              marginBottom: 22,
            }}
          >
            Admin Login
          </div>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            autoComplete="username"
            onChange={e => setData('email', e.target.value)}
            required
            style={{
              padding: '17px 16px',
              fontSize: 19,
              borderRadius: 8,
              border: errors.email ? '2.5px solid #b51c1c' : '2px solid #b48a6e',
              background: '#fcf6ef',
              color: 'var(--kopi-text)',
              marginBottom: errors.email ? 3 : 13,
              outline: 'none',
              fontFamily: 'Montserrat, Helvetica, sans-serif',
            }}
          />
          {errors.email && <div style={{ color: '#b51c1c', fontSize: 15 }}>{errors.email}</div>}
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            autoComplete="current-password"
            onChange={e => setData('password', e.target.value)}
            required
            style={{
              padding: '17px 16px',
              fontSize: 19,
              borderRadius: 8,
              border: errors.password ? '2.5px solid #b51c1c' : '2px solid #b48a6e',
              background: '#fcf6ef',
              color: 'var(--kopi-text)',
              marginBottom: errors.password ? 3 : 13,
              outline: 'none',
              fontFamily: 'Montserrat, Helvetica, sans-serif',
            }}
          />
          {errors.password && <div style={{ color: '#b51c1c', fontSize: 15 }}>{errors.password}</div>}
          {errors.message && (
            <div
              style={{
                background: '#faefef',
                color: '#962818',
                border: '1.7px solid #efd5d4',
                borderRadius: 8,
                fontWeight: 500,
                padding: 13,
                fontSize: 16,
                marginBottom: 7,
                textAlign: 'center'
              }}
            >
              {errors.message}
            </div>
          )}
          <button
            type="submit"
            disabled={processing}
            style={{
              background: 'linear-gradient(90deg, var(--kopi-main), var(--kopi-light) 88%)',
              color: 'var(--kopi-white)',
              fontWeight: 800,
              borderRadius: 8,
              fontSize: 20,
              border: 'none',
              marginTop: 8,
              padding: '18px 0',
              boxShadow: '0 3px 12px #80543813',
              cursor: 'pointer',
              letterSpacing: 1.2
            }}
          >
            {processing ? 'Tunggu...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
