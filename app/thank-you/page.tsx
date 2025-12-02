'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  function goBack() {
    // In a real LINE OA you might window.close() or LIFF close.
    // For demo, just go back to the register page.
    router.push('/register');
  }

  return (
    <main className="page">
      <div className="mock-card">
        <div className="mock-inner" style={{ textAlign: 'center' }}>
          <div className="badge-wrap">
            <div className="badge">
              S‑Mom Club
              <span>Nestlé Nutrition‑S‑26</span>
            </div>
          </div>

          <h1 className="title-main">สมัครสมาชิกสำเร็จ</h1>
          <p className="title-sub">
            ขอบคุณที่เข้าร่วม S‑Mom club 🌸 <br />
            เราจะส่งข้อมูลและสิทธิประโยชน์ดี ๆ ให้คุณผ่าน LINE Official Account
          </p>

          <div className="divider" />

          <div style={{ marginTop: 18, fontSize: 13, color: '#7b4b2b' }}>
            คุณสามารถปิดหน้านี้และกลับไปที่หน้าต่างสนทนา LINE ได้เลย
          </div>

          <button
            type="button"
            className="submit-btn"
            style={{ marginTop: 20, maxWidth: 260 }}
            onClick={goBack}
          >
            กลับไปที่หน้าแชท
          </button>
        </div>
      </div>
    </main>
  );
}
