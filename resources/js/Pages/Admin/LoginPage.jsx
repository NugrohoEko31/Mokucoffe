import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import logo from '../../assets/LOGOMOKU.PNG';
import bgImage from '../../assets/Background Admin.jpg';


const LoginPage = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  // State untuk toggle show/hide password
  const [showPassword, setShowPassword] = useState(false);

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
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="login-bg"
      >
      <div
        style={{
          background: 'rgba(255,255,255,0.80)',
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
          <label
            htmlFor="email"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: 18,
              color: 'var(--kopi-text)',
              marginBottom: 7,
            }}
          >
            Username / Email
          </label>
          <input
            id="email"
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
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}
          />
          {errors.email && <div style={{ color: '#b51c1c', fontSize: 15 }}>{errors.email}</div>}
          {/* Password Label */}
          <label
            htmlFor="password"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: 18,
              color: 'var(--kopi-text)',
              marginBottom: 7,
            }}
          >
            Password
          </label>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              autoComplete="current-password"
              onChange={e => setData('password', e.target.value)}
              required
              style={{
                width: "100%",
                padding: '17px 16px',
                fontSize: 19,
                borderRadius: 8,
                border: errors.password ? '2.5px solid #b51c1c' : '2px solid #b48a6e',
                background: '#fcf6ef',
                color: 'var(--kopi-text)',
                marginBottom: errors.password ? 3 : 13,
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              style={{
                position: "absolute",
                right: 13,
                top: 14,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                padding: 3,
                color: 'var(--kopi-main)'
              }}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--kopi-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.91 10.91 0 0 1 12 19C7 19 2.73 15.11 1 12c.7-1.31 1.69-2.73 3-3.93M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .47-.1.91-.26 1.31"/>
                  <path d="M1 1l22 22"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--kopi-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
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
              background: '#3F2300',
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
            {processing ? 'Tunggu...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
