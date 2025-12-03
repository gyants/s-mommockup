'use client';

import React from 'react';

export default function FacebookPage() {
  return (
    <main
      className="bg-gray-100 flex justify-center min-h-screen"
      style={{
        backgroundColor: '#f0f2f5',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* Main Container (Mobile Width) */}
      <div className="w-full max-w-md bg-gray-200 min-h-screen relative shadow-lg">
        {/* Header */}
        <div className="bg-white sticky top-0 z-50">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
            <h1
              className="text-3xl font-bold tracking-tighter"
              style={{ color: '#1877F2' }} // Facebook blue
            >
              facebook
            </h1>
            <div className="flex space-x-3">
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="fas fa-search text-gray-600" />
              </div>
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center relative">
                <i className="fab fa-facebook-messenger text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="flex justify-between px-2 pt-2 pb-1 text-gray-500">
            <div
              className="flex-1 flex justify-center border-b-2 pb-2"
              style={{ borderColor: '#1877F2' }}
            >
              <i className="fas fa-home text-2xl" style={{ color: '#1877F2' }} />
            </div>
            <div className="flex-1 flex justify-center pb-2">
              <i className="fas fa-user-friends text-2xl" />
            </div>
            <div className="flex-1 flex justify-center pb-2 relative">
              <i className="fab fa-youtube text-2xl" />
              <span className="absolute top-0 right-8 bg-red-500 w-2 h-2 rounded-full" />
            </div>
            <div className="flex-1 flex justify-center pb-2">
              <i className="fas fa-store text-2xl" />
            </div>
            <div className="flex-1 flex justify-center pb-2">
              <i className="fas fa-bell text-2xl" />
            </div>
            <div className="flex-1 flex justify-center pb-2">
              <i className="fas fa-bars text-2xl" />
            </div>
          </div>
        </div>

        {/* Create Post Section */}
        <div className="bg-white p-4 mb-2 mt-1">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              className="w-10 h-10 rounded-full border border-gray-200"
              alt="User"
            />
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
              คุณกำลังคิดอะไรอยู่?
            </div>
            <i className="fas fa-images text-green-500 text-xl" />
          </div>
        </div>

        {/* Stories */}
        <div
          className="bg-white py-3 mb-2 overflow-x-auto"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {/* Hide scrollbar for WebKit inside this block */}
          <style>{`
            .stories-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="flex space-x-2 px-4 stories-scroll">
            {/* My Story */}
            <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                className="w-full h-full object-cover opacity-70"
                alt=""
              />
              <div className="absolute bottom-0 w-full p-2 text-center">
                <div
                  className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mx-auto -mb-4 z-10 relative"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <i className="fas fa-plus text-white text-xs" />
                </div>
              </div>
            </div>
            {/* Friend Story 1 */}
            <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                className="w-full h-full object-cover"
                alt=""
              />
              <div
                className="absolute top-2 left-2 w-8 h-8 rounded-full border-4 overflow-hidden"
                style={{ borderColor: '#1877F2' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="absolute bottom-2 left-2 text-white font-bold text-xs drop-shadow-md">
                ส้มโอ
              </p>
            </div>
            {/* Friend Story 2 */}
            <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                className="w-full h-full object-cover"
                alt=""
              />
              <div
                className="absolute top-2 left-2 w-8 h-8 rounded-full border-4 overflow-hidden"
                style={{ borderColor: '#1877F2' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="absolute bottom-2 left-2 text-white font-bold text-xs drop-shadow-md">
                แนน น.
              </p>
            </div>
          </div>
        </div>

        {/* Post 1: Organic (Thai) */}
        <div className="bg-white mb-2">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm">สมชาย ใจดี</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span>2 ชม.</span>
                  <span className="mx-1">·</span>
                  <i className="fas fa-globe-americas" />
                </div>
              </div>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500" />
          </div>
          {/* Content */}
          <div className="px-3 pb-2">
            <p className="text-sm">
              เพิ่งจัดสวนเสร็จครับ! ในที่สุดก็ได้สวนหน้าตาแบบที่อยากได้สักที 🌿🏡
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            className="w-full h-auto object-cover"
            alt=""
          />

          {/* Engagement */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
              <div
                className="text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]"
                style={{ backgroundColor: '#1877F2' }}
              >
                <i className="fas fa-thumbs-up" />
              </div>
              <span className="text-gray-500 text-sm">42</span>
            </div>
            <div className="text-gray-500 text-sm">8 ความคิดเห็น</div>
          </div>
          {/* Actions */}
          <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-thumbs-up" />
              <span className="text-sm font-semibold">ถูกใจ</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-comment-alt" />
              <span className="text-sm font-semibold">ความคิดเห็น</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="fas fa-share" />
              <span className="text-sm font-semibold">แชร์</span>
            </button>
          </div>
        </div>

        {/* Post 2: Ad (Thai) */}
        <div className="bg-white mb-2 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  className="w-10 h-10 rounded-full border border-gray-100 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">S-Mom Club Thailand</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="font-semibold">ได้รับการสนับสนุน</span>
                  <span className="mx-1">·</span>
                  <i className="fas fa-globe-americas" />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 text-gray-500">
              <i className="fas fa-ellipsis-h" />
              <i className="fas fa-times" />
            </div>
          </div>

          {/* Ad Copy */}
          <div className="px-3 pb-2">
            <p className="text-sm">
              การเป็นแม่คือการเดินทางที่เต็มไปด้วยความรักและคำถามมากมาย 🤱💖 <br />
              <br />
              มาร่วมเป็นส่วนหนึ่งกับ S-Mom Club วันนี้ รับคำแนะนำจากผู้เชี่ยวชาญ พร้อมสิทธิพิเศษมากมาย
              และสังคมคุณแม่ที่อบอุ่น <br />
              <span style={{ color: '#1877F2' }}>#มนุษย์แม่ #SMomClub #การดูแลลูกน้อย</span>
            </p>
            <p className="mt-2 text-sm font-medium">แอดไลน์ OA ของเราเพื่อรับข้อมูลเพิ่มเติม 👇</p>
          </div>

          {/* Ad Media */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              className="w-full h-64 object-cover object-center"
              alt="Mom and Baby"
            />
          </div>

          {/* CTA Strip */}
          <a
            href="https://line.me/R/ti/p/@204rnnrj"
            target="_blank"
            rel="noreferrer"
            className="block bg-gray-100 flex justify-between items-center p-3 border-b border-gray-200 active:bg-gray-200 transition"
          >
            <div className="overflow-hidden">
              <p className="text-xs text-gray-500 uppercase">line.me</p>
              <p className="font-bold text-sm truncate">
                S-Mom Club Thailand - Official Account
              </p>
            </div>
            <button className="bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded shadow-sm whitespace-nowrap">
              สมัครเลย
            </button>
          </a>

          {/* Engagement Counts */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div
                  className="text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-20 border border-white"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <i className="fas fa-thumbs-up" />
                </div>
                <div className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-10 border border-white">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <span className="text-gray-500 text-sm ml-1">1.2พัน</span>
            </div>
            <div className="text-gray-500 text-sm">156 ความคิดเห็น · 42 แชร์</div>
          </div>

          {/* Ad Actions */}
          <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-thumbs-up" />
              <span className="text-sm font-semibold">ถูกใจ</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-comment-alt" />
              <span className="text-sm font-semibold">ความคิดเห็น</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="fas fa-share" />
              <span className="text-sm font-semibold">แชร์</span>
            </button>
          </div>
        </div>

        {/* Post 3: Organic (Thai IT news) */}
        <div className="bg-white mb-2">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm">ข่าวไอทีวันนี้</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span>5 ชม.</span>
                  <span className="mx-1">·</span>
                  <i className="fas fa-globe-americas" />
                </div>
              </div>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500" />
          </div>
          {/* Content */}
          <div className="px-3 pb-2">
            <p className="text-sm">
              อัปเดตใหม่เริ่มปล่อยให้อัปโหลดแล้ววันนี้! เช็คการตั้งค่ากันได้เลยครับ 📱🚀
            </p>
          </div>
          {/* No Image */}
          <div className="h-3 bg-white" />

          {/* Engagement */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
              <div
                className="text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]"
                style={{ backgroundColor: '#1877F2' }}
              >
                <i className="fas fa-thumbs-up" />
              </div>
              <span className="text-gray-500 text-sm">203</span>
            </div>
            <div className="text-gray-500 text-sm">45 ความคิดเห็น</div>
          </div>
          {/* Actions */}
          <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-thumbs-up" />
              <span className="text-sm font-semibold">ถูกใจ</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-comment-alt" />
              <span className="text-sm font-semibold">ความคิดเห็น</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="fas fa-share" />
              <span className="text-sm font-semibold">แชร์</span>
            </button>
          </div>
        </div>

        {/* Post 4: Ad (English) */}
        <div className="bg-white mb-2 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  className="w-10 h-10 rounded-full border border-gray-100 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">S-Mom Club Thailand</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="font-semibold">Sponsored</span>
                  <span className="mx-1">·</span>
                  <i className="fas fa-globe-americas" />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 text-gray-500">
              <i className="fas fa-ellipsis-h" />
              <i className="fas fa-times" />
            </div>
          </div>

          {/* Ad Copy */}
          <div className="px-3 pb-2">
            <p className="text-sm">
              Becoming a mom is a journey filled with love and questions. 🤱💖 <br />
              <br />
              Join S-Mom Club today for expert advice, exclusive rewards, and a supportive
              community. <br />
              <span style={{ color: '#1877F2' }}>#MomLife #SMomClub #BabyCare</span>
            </p>
            <p className="mt-2 text-sm font-medium">Add our LINE OA for more info 👇</p>
          </div>

          {/* Ad Media */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              className="w-full h-64 object-cover object-center"
              alt="Mom and Baby"
            />
          </div>

          {/* CTA Strip */}
          <a
            href="https://line.me/R/ti/p/@204rnnrj"
            target="_blank"
            rel="noreferrer"
            className="block bg-gray-100 flex justify-between items-center p-3 border-b border-gray-200 active:bg-gray-200 transition"
          >
            <div className="overflow-hidden">
              <p className="text-xs text-gray-500 uppercase">line.me</p>
              <p className="font-bold text-sm truncate">
                S-Mom Club Thailand - Official Account
              </p>
            </div>
            <button className="bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded shadow-sm whitespace-nowrap">
              Sign Up
            </button>
          </a>

          {/* Engagement Counts */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div
                  className="text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-20 border border-white"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <i className="fas fa-thumbs-up" />
                </div>
                <div className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-10 border border-white">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <span className="text-gray-500 text-sm ml-1">1.2K</span>
            </div>
            <div className="text-gray-500 text-sm">156 Comments · 42 Shares</div>
          </div>

          {/* Ad Actions */}
          <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-thumbs-up" />
              <span className="text-sm font-semibold">Like</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-comment-alt" />
              <span className="text-sm font-semibold">Comment</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="fas fa-share" />
              <span className="text-sm font-semibold">Share</span>
            </button>
          </div>
        </div>

        {/* Post 5: Organic (Tech Daily) */}
        <div className="bg-white mb-2">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm">Tech Daily</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span>5 hrs</span>
                  <span className="mx-1">·</span>
                  <i className="fas fa-globe-americas" />
                </div>
              </div>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500" />
          </div>
          {/* Content */}
          <div className="px-3 pb-2">
            <p className="text-sm">
              The new update is rolling out today! Check your settings. 📱🚀
            </p>
          </div>
          {/* No Image */}
          <div className="h-3 bg-white" />

          {/* Engagement */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
              <div
                className="text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]"
                style={{ backgroundColor: '#1877F2' }}
              >
                <i className="fas fa-thumbs-up" />
              </div>
              <span className="text-gray-500 text-sm">203</span>
            </div>
            <div className="text-gray-500 text-sm">45 Comments</div>
          </div>
          {/* Actions */}
          <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-thumbs-up" />
              <span className="text-sm font-semibold">Like</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="far fa-comment-alt" />
              <span className="text-sm font-semibold">Comment</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
              <i className="fas fa-share" />
              <span className="text-sm font-semibold">Share</span>
            </button>
          </div>
        </div>

        {/* Bottom Safe Area Spacer */}
        <div className="h-12" />
      </div>
    </main>
  );
}
