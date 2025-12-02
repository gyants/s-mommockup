<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <title>สมัครสมาชิก S‑Mom club</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <style>
    :root {
      --gold-light: #fff4d4;
      --gold-mid: #f5e0ad;
      --gold-deep: #d3a45d;
      --gold-chip: #c18a45;
      --gold-chip-bg: #f9edd3;
      --text-main: #14325b;
      --text-brown: #7a4b27;
      --input-bg: #ffffff;
      --input-border: #f6e4c2;
      --green: #2e7d32;
      --error: #c62828;
      --font-sans: -apple-system, BlinkMacSystemFont, "Prompt", system-ui, sans-serif;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: var(--font-sans);
      background: radial-gradient(circle at top, var(--gold-light), var(--gold-mid));
      display: flex;
      justify-content: center;
      padding: 16px;
      color: var(--text-main);
    }

    .page {
      width: 100%;
      max-width: 480px;
      background: linear-gradient(#fffaf0, #feefcf);
      border-radius: 24px;
      box-shadow: 0 12px 30px rgba(165, 118, 55, 0.35);
      padding: 20px 18px 24px;
      position: relative;
      overflow: hidden;
    }

    .page::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 15% 0%, rgba(255,255,255,0.6) 0, transparent 50%),
                  radial-gradient(circle at 90% 0%, rgba(255,255,255,0.4) 0, transparent 55%);
      pointer-events: none;
    }

    .content {
      position: relative;
      z-index: 1;
    }

    /* Header */
    .badge-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
    }

    .badge {
      padding: 10px 26px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 10%, #ffffff 0, #f3ddaa 40%, #c89a51 100%);
      box-shadow: 0 10px 20px rgba(128, 87, 34, 0.45);
      border: 1px solid #f8e8c4;
      text-align: center;
      color: var(--text-main);
      font-weight: 700;
      font-size: 16px;
    }
    .badge span {
      display: block;
      font-size: 11px;
      font-weight: 500;
      color: #20407c;
    }

    .title-main {
      text-align: center;
      margin: 12px 0 4px;
      font-size: 20px;
      font-weight: 700;
      color: #14325b;
    }

    .title-sub {
      text-align: center;
      font-size: 13px;
      color: #7b4b2b;
      margin: 0 0 10px;
    }

    .divider {
      height: 1px;
      margin: 12px 0 10px;
      background: linear-gradient(to right, transparent, #f0d3a3, transparent);
    }

    /* Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .section-label {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-main);
      margin: 12px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-brown);
      margin-bottom: 4px;
    }

    label .required {
      color: #d32f2f;
      margin-left: 2px;
    }

    .input-pill {
      width: 100%;
      padding: 10px 14px;
      border-radius: 999px;
      border: 1px solid var(--input-border);
      background: var(--input-bg);
      font-size: 14px;
      outline: none;
      color: #404040;
      box-shadow: 0 2px 4px rgba(222, 191, 133, 0.35);
    }

    .input-pill::placeholder {
      color: #c8c8c8;
      font-weight: 400;
    }

    .input-pill:focus {
      border-color: #e1bf80;
      box-shadow: 0 0 0 2px rgba(228, 193, 124, 0.5);
    }

    .row {
      display: flex;
      gap: 8px;
    }

    .row > * {
      flex: 1;
    }

    .chips {
      display: flex;
      gap: 6px;
      background: var(--gold-chip-bg);
      padding: 4px;
      border-radius: 999px;
      box-shadow: 0 2px 4px rgba(222, 191, 133, 0.5);
    }

    .chip {
      flex: 1;
      border-radius: 999px;
      text-align: center;
      padding: 8px 6px;
      font-size: 13px;
      border: none;
      background: transparent;
      color: #7b4b2b;
      font-weight: 600;
      cursor: pointer;
    }

    .chip.active {
      background: var(--gold-chip);
      color: #ffffff;
      box-shadow: 0 2px 5px rgba(150, 96, 38, 0.5);
    }

    /* Submit */
    .submit-btn {
      margin-top: 10px;
      border-radius: 999px;
      width: 100%;
      padding: 12px;
      border: none;
      background: linear-gradient(180deg, #f7d99f, #e2b567);
      color: var(--text-main);
      font-size: 15px;
      font-weight: 700;
      box-shadow: 0 4px 10px rgba(152, 104, 46, 0.6);
      cursor: pointer;
    }

    .submit-btn:active {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(152, 104, 46, 0.6);
    }

    .note {
      margin-top: 8px;
      font-size: 11px;
      color: #8c6640;
      text-align: center;
    }

    .status {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      text-align: center;
      display: none;
    }

    .status.success {
      display: block;
      background: #e8f5e9;
      color: var(--green);
      border: 1px solid #c8e6c9;
    }

    .status.error {
      display: block;
      background: #ffebee;
      color: var(--error);
      border: 1px solid #ffcdd2;
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="content">
      <!-- Header -->
      <div class="badge-wrap">
        <div class="badge">
          S‑Mom Club
          <span>Nestlé Nutrition‑S‑26</span>
        </div>
      </div>
      <h1 class="title-main">สมัครสมาชิก S‑Mom club</h1>
      <p class="title-sub">กรอกข้อมูลให้ครบถ้วนเพื่อรับสิทธิประโยชน์สำหรับคุณแม่</p>
      <div class="divider"></div>

      <!-- Form -->
      <form id="mockForm">
        <!-- Thai Name -->
        <div>
          <label for="firstName">
            ชื่อ (ภาษาไทย) <span class="required">*</span>
          </label>
          <input
            class="input-pill"
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="กรุณาระบุชื่อจริง"
          />
        </div>

        <!-- Thai Surname -->
        <div>
          <label for="lastName">
            นามสกุล (ภาษาไทย) <span class="required">*</span>
          </label>
          <input
            class="input-pill"
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="กรุณาระบุนามสกุลจริง"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email">อีเมล</label>
          <input
            class="input-pill"
            id="email"
            name="email"
            type="email"
            placeholder="emailname@mail.com"
          />
        </div>

        <!-- Due date / DOB -->
        <div>
          <label>
            วันกำหนดคลอด / วันเกิดบุตร <span class="required">*</span>
          </label>
          <div class="row">
            <select class="input-pill" name="day" required>
              <option value="">วัน</option>
              ${[...Array(31)].map((_, i) => `<option value="${i+1}">${i+1}</option>`).join('')}
            </select>
            <select class="input-pill" name="month" required>
              <option value="">เดือน</option>
              <option>ม.ค.</option><option>ก.พ.</option><option>มี.ค.</option><option>เม.ย.</option>
              <option>พ.ค.</option><option>มิ.ย.</option><option>ก.ค.</option><option>ส.ค.</option>
              <option>ก.ย.</option><option>ต.ค.</option><option>พ.ย.</option><option>ธ.ค.</option>
            </select>
            <select class="input-pill" name="year" required>
              <option value="">ปี</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
        </div>

        <!-- Hospital type -->
        <div>
          <label>
            สถานที่คลอดบุตร<br />โรงพยาบาล <span class="required">*</span>
          </label>
          <div class="chips" data-name="hospitalType">
            <button type="button" class="chip active" data-value="public">โรงพยาบาลรัฐบาล</button>
            <button type="button" class="chip" data-value="private">โรงพยาบาลเอกชน</button>
          </div>
          <input type="hidden" name="hospitalType" value="public" />
        </div>

        <!-- Birth plan -->
        <div>
          <label>
            แผนการคลอด <span class="required">*</span>
          </label>
          <div class="chips" data-name="birthPlan">
            <button type="button" class="chip active" data-value="csec">ผ่าคลอด</button>
            <button type="button" class="chip" data-value="natural">คลอดธรรมชาติ</button>
          </div>
          <input type="hidden" name="birthPlan" value="csec" />
        </div>

        <!-- Address section label -->
        <div class="section-label">ที่อยู่</div>

        <!-- Address fields (simple) -->
        <div>
          <label for="addressLine">
            ที่อยู่สำหรับจัดส่งของรางวัล <span class="required">*</span>
          </label>
          <input
            class="input-pill"
            id="addressLine"
            name="addressLine"
            type="text"
            required
            placeholder="ชื่ออาคาร / บ้านเลขที่ / ซอย / ถนน"
          />
        </div>

        <div class="row">
          <div>
            <label for="subDistrict">แขวง / ตำบล</label>
            <input
              class="input-pill"
              id="subDistrict"
              name="subDistrict"
              type="text"
              placeholder="แขวง / ตำบล"
            />
          </div>
          <div>
            <label for="district">เขต / อำเภอ</label>
            <input
              class="input-pill"
              id="district"
              name="district"
              type="text"
              placeholder="เขต / อำเภอ"
            />
          </div>
        </div>

        <div class="row">
          <div>
            <label for="province">จังหวัด</label>
            <input
              class="input-pill"
              id="province"
              name="province"
              type="text"
              placeholder="จังหวัด"
            />
          </div>
          <div>
            <label for="postcode">รหัสไปรษณีย์</label>
            <input
              class="input-pill"
              id="postcode"
              name="postcode"
              type="text"
              inputmode="numeric"
              placeholder="10240"
            />
          </div>
        </div>

        <!-- Submit -->
        <button type="submit" class="submit-btn">ยืนยันการสมัคร</button>
        <div class="note">
          ข้อมูลนี้ใช้เพื่อการสื่อสารโปรโมชั่นและสิทธิประโยชน์จาก Nestlé S‑26 เท่านั้น
        </div>

        <div id="statusBox" class="status"></div>
      </form>
    </div>
  </div>

  <script>
    // Transform chips into toggle groups
    document.querySelectorAll('.chips').forEach(group => {
      group.addEventListener('click', (e) => {
        const btn = e.target.closest('.chip');
        if (!btn) return;

        group.querySelectorAll('.chip').forEach(ch => ch.classList.remove('active'));
        btn.classList.add('active');

        const hiddenName = group.dataset.name;
        const hidden = document.querySelector('input[name="' + hiddenName + '"]');
        if (hidden) hidden.value = btn.dataset.value;
      });
    });

    // Mock submit: always success, no backend call
    const form = document.getElementById('mockForm');
    const statusBox = document.getElementById('statusBox');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      statusBox.className = 'status';
      statusBox.textContent = '';
      const btn = form.querySelector('.submit-btn');
      btn.disabled = true;
      btn.textContent = 'กำลังส่ง...';

      // Fake delay then success
      setTimeout(() => {
        statusBox.className = 'status success';
        statusBox.textContent = 'สมัครสมาชิกสำเร็จ ขอบคุณที่เข้าร่วม S‑Mom club!';
        btn.disabled = false;
        btn.textContent = 'ยืนยันการสมัคร';
        form.reset();

        // reset default chip selections
        document.querySelectorAll('.chips').forEach(group => {
          const chips = group.querySelectorAll('.chip');
          chips.forEach(ch => ch.classList.remove('active'));
          if (chips[0]) {
            chips[0].classList.add('active');
            const hidden = document.querySelector('input[name="' + group.dataset.name + '"]');
            if (hidden) hidden.value = chips[0].dataset.value;
          }
        });
      }, 1500);
    });
  </script>
</body>
</html>
