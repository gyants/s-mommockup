'use client';

import React, { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({
    type: 'idle'
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: 'idle' });

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ type: 'error', message: 'Please fill in all required fields correctly.' });
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Build full Thai phone (+66)
    let localPhone = (data.phoneLocal || '').replace(/\D/g, '');
    if (localPhone.startsWith('0')) {
      localPhone = localPhone.slice(1);
    }
    const phone = `+66${localPhone}`;

    const payload = {
      firstName: data.firstName,
      surname: data.surname,
      phone,
      facilityType: data.facilityType,
      birthMethod: data.birthMethod,
      addrNumber: data.addrNumber,
      addrStreet: data.addrStreet,
      addrArea: data.addrArea,
      addrProvince: data.addrProvince,
      addrZip: data.addrZip
    };

    try {
      setSubmitting(true);
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Registration failed.');
      }

      setStatus({ type: 'success', message: 'Welcome to the club! Registration successful.' });
      form.reset();
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="page">
      <div
        style={{
          background: 'linear-gradient(160deg, #f9eac4 0%, #e6c980 100%)',
          borderRadius: 30,
          padding: '32px 24px 24px',
          boxShadow:
            '0 20px 50px rgba(74, 54, 10, 0.3), inset 0 0 0 1px rgba(255,255,255,0.4)',
          border: '2px solid #fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 220,
            height: 220,
            background:
              'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* header */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg,#001e8c,#000f5a)',
                color: '#ffd700',
                fontWeight: 900,
                fontSize: 26,
                padding: '14px 24px',
                borderRadius: '50% / 60%',
                border: '2px solid #fff',
                boxShadow: '0 10px 20px rgba(0,30,140,0.35)',
                marginBottom: 12,
                fontStyle: 'italic',
                letterSpacing: -1
              }}
            >
              S‑26
              <span
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: '#fff',
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  fontStyle: 'normal',
                  marginTop: -2
                }}
              >
                Gold
              </span>
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 20,
                textTransform: 'uppercase',
                letterSpacing: 0.8,
                fontWeight: 800,
                color: '#001e8c'
              }}
            >
              Mom‑to‑Be Club
            </h1>
            <p style={{ margin: '6px 0 0', fontSize: 14, color: '#4b5e96' }}>
              Join the journey for exclusive pregnancy tips and reminders.
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* First name */}
            <div>
              <label
                htmlFor="firstName"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 4,
                  display: 'block',
                  color: '#001e8c'
                }}
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                placeholder="Your name"
                style={inputStyle}
              />
            </div>

            {/* Surname */}
            <div>
              <label
                htmlFor="surname"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 4,
                  display: 'block',
                  color: '#001e8c'
                }}
              >
                Surname
              </label>
              <input
                id="surname"
                name="surname"
                required
                placeholder="Family name"
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phoneLocal"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 4,
                  display: 'block',
                  color: '#001e8c'
                }}
              >
                Mobile Phone (TH)
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 12px',
                    borderRadius: 12,
                    border: '1px solid #d4b56a',
                    background: 'rgba(255,255,255,0.7)',
                    fontWeight: 700,
                    color: '#001e8c',
                    minWidth: 90
                  }}
                >
                  🇹🇭 +66
                </div>
                <input
                  id="phoneLocal"
                  name="phoneLocal"
                  required
                  placeholder="81 234 5678"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Facility type */}
            <div>
              <label
                htmlFor="facilityType"
                style={labelStyle}
              >
                Birth Facility Type
              </label>
              <select id="facilityType" name="facilityType" required style={inputStyle as any}>
                <option value="">Select type…</option>
                <option value="Public Hospital">Public Hospital</option>
                <option value="Private Hospital">Private Hospital</option>
              </select>
            </div>

            {/* Birth method */}
            <div>
              <label
                htmlFor="birthMethod"
                style={labelStyle}
              >
                Planned Birth Method
              </label>
              <select id="birthMethod" name="birthMethod" required style={inputStyle as any}>
                <option value="">Select method…</option>
                <option value="Natural">Natural Birth</option>
                <option value="C-Section">C‑Section</option>
              </select>
            </div>

            {/* Address section label */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#fff',
                background: 'rgba(0, 30, 140, 0.2)',
                padding: '4px 10px',
                borderRadius: 4,
                display: 'inline-block',
                marginTop: 6
              }}
            >
              Home Address
            </div>

            {/* Address fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 10 }}>
              <div>
                <label htmlFor="addrNumber" style={labelStyle}>
                  House No.
                </label>
                <input
                  id="addrNumber"
                  name="addrNumber"
                  required
                  placeholder="12/3"
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="addrStreet" style={labelStyle}>
                  Street / Road
                </label>
                <input
                  id="addrStreet"
                  name="addrStreet"
                  required
                  placeholder="Sukhumvit"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="addrArea" style={labelStyle}>
                Sub‑district / Area
              </label>
              <input
                id="addrArea"
                name="addrArea"
                required
                placeholder="Thong Lo"
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <label htmlFor="addrProvince" style={labelStyle}>
                  Province
                </label>
                <input
                  id="addrProvince"
                  name="addrProvince"
                  required
                  placeholder="Bangkok"
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="addrZip" style={labelStyle}>
                  Postcode
                </label>
                <input
                  id="addrZip"
                  name="addrZip"
                  required
                  placeholder="10110"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  style={inputStyle}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                marginTop: 10,
                background: 'linear-gradient(180deg,#0033cc 0%,#001e8c 100%)',
                color: '#fff',
                border: 'none',
                padding: 14,
                fontSize: 15,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1,
                borderRadius: 999,
                cursor: submitting ? 'default' : 'pointer',
                boxShadow: '0 8px 20px rgba(0,30,140,0.4)',
                transition: 'transform 0.1s'
              }}
            >
              {submitting ? 'Sending…' : 'Register Now'}
            </button>

            {status.type !== 'idle' && (
              <div
                style={{
                  marginTop: 12,
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: 'center',
                  background:
                    status.type === 'success' ? '#dcfce7' : '#ffdbdb',
                  color: status.type === 'success' ? '#166534' : '#b91c1c',
                  border:
                    status.type === 'success'
                      ? '1px solid #86efac'
                      : '1px solid #ffb3b3'
                }}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 12px',
  fontSize: 14,
  background: '#fffdf5',
  border: '1px solid #d4b56a',
  borderRadius: 12,
  color: '#001e8c',
  fontWeight: 500,
  outline: 'none',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)'
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 0.6,
  marginBottom: 4,
  display: 'block',
  color: '#001e8c'
};
