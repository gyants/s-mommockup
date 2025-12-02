'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleChipGroupClick(
    e: React.MouseEvent<HTMLDivElement>,
    hiddenName: string
  ) {
    const button = (e.target as HTMLElement).closest<HTMLButtonElement>('.chip');
    if (!button) return;

    // parentElement is the .chips group
    const group = button.parentElement as HTMLDivElement | null;
    if (!group) return;

    // Toggle active in this group only
    const chips = group.querySelectorAll<HTMLButtonElement>('.chip');
    chips.forEach((ch) => ch.classList.remove('active'));
    button.classList.add('active');

    // Update hidden input
    const hidden = document.querySelector<HTMLInputElement>(
      `input[name="${hiddenName}"]`
    );
    if (hidden) hidden.value = button.dataset.value || '';
  }

  function resetChips() {
    document.querySelectorAll<HTMLDivElement>('.chips').forEach((group) => {
      const chips = group.querySelectorAll<HTMLButtonElement>('.chip');
      chips.forEach((ch) => ch.classList.remove('active'));

      const first = chips[0];
      if (first) {
        first.classList.add('active');
        const hiddenName = group.dataset.name;
        if (hiddenName) {
          const hidden = document.querySelector<HTMLInputElement>(
            `input[name="${hiddenName}"]`
          );
          if (hidden) hidden.value = first.dataset.value || '';
        }
      }
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // no validation: allow empty fields
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      resetChips();
      router.push('/thank-you');
    }, 800); // short delay just for effect
  }

  return (
    <main className="page">
      <div className="mock-card">
        <div className="mock-inner">
          {/* Header */}
          <div className="badge-wrap">
            <div className="badge">
              S‑Mom Club
              <span>Nestlé Nutrition‑S‑26</span>
            </div>
          </div>
          <h1 className="title-main">สมัครสมาชิก S‑Mom club</h1>
          <p className="title-sub">
            กรอกข้อมูลเพื่อดูตัวอย่างขั้นตอนการสมัครสมาชิก
          </p>
          <div className="divider" />

          {/* Form */}
          <form id="mockForm" onSubmit={handleSubmit}>
            {/* Thai Name */}
            <div>
              <label htmlFor="firstName">
                ชื่อ (ภาษาไทย)
              </label>
              <input
                className="input-pill"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="กรุณาระบุชื่อจริง"
              />
            </div>

            {/* Thai Surname */}
            <div>
              <label htmlFor="lastName">
                นามสกุล (ภาษาไทย)
              </label>
              <input
                className="input-pill"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="กรุณาระบุนามสกุลจริง"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email">อีเมล</label>
              <input
                className="input-pill"
                id="email"
                name="email"
                type="email"
                placeholder="emailname@mail.com"
              />
            </div>

            {/* Due date */}
            <div>
              <label>วันกำหนดคลอด / วันเกิดบุตร</label>
              <div className="row">
                <select className="input-pill" name="day" defaultValue="">
                  <option value="">วัน</option>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select className="input-pill" name="month" defaultValue="">
                  <option value="">เดือน</option>
                  {[
                    'ม.ค.',
                    'ก.พ.',
                    'มี.ค.',
                    'เม.ย.',
                    'พ.ค.',
                    'มิ.ย.',
                    'ก.ค.',
                    'ส.ค.',
                    'ก.ย.',
                    'ต.ค.',
                    'พ.ย.',
                    'ธ.ค.'
                  ].map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select className="input-pill" name="year" defaultValue="">
                  <option value="">ปี</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
            </div>

            {/* Hospital type */}
            <div>
              <label>
                สถานที่คลอดบุตร<br />
                โรงพยาบาล
              </label>
              <div
                className="chips"
                data-name="hospitalType"
                onClick={(e) => handleChipGroupClick(e, 'hospitalType')}
              >
                <button type="button" className="chip active" data-value="public">
                  โรงพยาบาลรัฐบาล
                </button>
                <button type="button" className="chip" data-value="private">
                  โรงพยาบาลเอกชน
                </button>
              </div>
              <input type="hidden" name="hospitalType" defaultValue="public" />
            </div>

            {/* Birth plan */}
            <div>
              <label>แผนการคลอด</label>
              <div
                className="chips"
                data-name="birthPlan"
                onClick={(e) => handleChipGroupClick(e, 'birthPlan')}
              >
                <button type="button" className="chip active" data-value="csec">
                  ผ่าคลอด
                </button>
                <button type="button" className="chip" data-value="natural">
                  คลอดธรรมชาติ
                </button>
              </div>
              <input type="hidden" name="birthPlan" defaultValue="csec" />
            </div>

            {/* Address section */}
            <div className="section-label">ที่อยู่</div>

            <div>
              <label htmlFor="addressLine">
                ที่อยู่สำหรับจัดส่งของรางวัล
              </label>
              <input
                className="input-pill"
                id="addressLine"
                name="addressLine"
                type="text"
                placeholder="ชื่ออาคาร / บ้านเลขที่ / ซอย / ถนน"
              />
            </div>

            <div className="row">
              <div>
                <label htmlFor="subDistrict">แขวง / ตำบล</label>
                <input
                  className="input-pill"
                  id="subDistrict"
                  name="subDistrict"
                  type="text"
                  placeholder="แขวง / ตำบล"
                />
              </div>
              <div>
                <label htmlFor="district">เขต / อำเภอ</label>
                <input
                  className="input-pill"
                  id="district"
                  name="district"
                  type="text"
                  placeholder="เขต / อำเภอ"
                />
              </div>
            </div>

            <div className="row">
              <div>
                <label htmlFor="province">จังหวัด</label>
                <input
                  className="input-pill"
                  id="province"
                  name="province"
                  type="text"
                  placeholder="จังหวัด"
                />
              </div>
              <div>
                <label htmlFor="postcode">รหัสไปรษณีย์</label>
                <input
                  className="input-pill"
                  id="postcode"
                  name="postcode"
                  type="text"
                  inputMode="numeric"
                  placeholder="10240"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'กำลังส่ง...' : 'ยืนยันการสมัคร'}
            </button>
            <div className="note">
              แบบฟอร์มนี้เป็นตัวอย่างสำหรับเดโมเท่านั้น ไม่ได้บันทึกข้อมูลจริง
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
