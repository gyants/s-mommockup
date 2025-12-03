import React from 'react';

// Define constants for custom styling to keep the look consistent with the Facebook theme.
const FB_BLUE_HEX = '#1877F2';
const FB_BLUE_TEXT = `text-[${FB_BLUE_HEX}]`;
const FB_BLUE_BG = `bg-[${FB_BLUE_HEX}]`;

// Define utility components for posts to improve readability, even in a single file.
const PostHeader = ({ name, time, isSponsored = false, profileUrl }: { name: string, time: string, isSponsored?: boolean, profileUrl: string }) => (
    <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
            <img src={profileUrl} className="w-10 h-10 rounded-full object-cover" alt={`${name} profile`} />
            <div>
                <p className="font-bold text-sm leading-tight">{name}</p>
                <div className="flex items-center text-gray-500 text-xs">
                    <span className="font-semibold">{isSponsored ? 'ได้รับการสนับสนุน' : time}</span>
                    <span className="mx-1">·</span>
                    <i className="fas fa-globe-americas"></i>
                </div>
            </div>
        </div>
        <div className="flex space-x-3 text-gray-500">
            <i className="fas fa-ellipsis-h"></i>
            {isSponsored && <i className="fas fa-times"></i>}
        </div>
    </div>
);

const PostActions = ({ likes, comments, shares }: { likes: string, comments: string, shares?: string }) => (
    <>
        {/* Engagement Counts */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-1">
                {/* Simplified like icon grouping for visual mock */}
                <div className={`${FB_BLUE_BG} text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]`}>
                    <i className="fas fa-thumbs-up"></i>
                </div>
                <span className="text-gray-500 text-sm">{likes}</span>
            </div>
            <div className="text-gray-500 text-sm">{comments} {shares ? `· ${shares}` : ''}</div>
        </div>
        {/* Actions Bar */}
        <div className="flex justify-between px-2 py-1">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                <i className="far fa-thumbs-up"></i>
                <span className="text-sm font-semibold">ถูกใจ</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                <i className="far fa-comment-alt"></i>
                <span className="text-sm font-semibold">ความคิดเห็น</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                <i className="fas fa-share"></i>
                <span className="text-sm font-semibold">แชร์</span>
            </button>
        </div>
    </>
);

const App: React.FC = () => {
    return (
        <div className="bg-gray-100 flex justify-center min-h-screen">
            {/* Custom CSS for hiding scrollbar, necessary as Tailwind doesn't always handle vendor prefixes universally */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }
            `}</style>
            
            {/* Main Container (Mobile Width) */}
            <div className="w-full max-w-md bg-gray-200 min-h-screen relative shadow-lg">

                {/* Header */}
                <div className="bg-white sticky top-0 z-50">
                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
                        <h1 className={`${FB_BLUE_TEXT} text-3xl font-bold tracking-tighter`}>facebook</h1>
                        <div className="flex space-x-3">
                            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                                <i className="fas fa-search text-gray-600"></i>
                            </div>
                            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center relative">
                                <i className="fab fa-facebook-messenger text-gray-600"></i>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1 rounded-full">2</span>
                            </div>
                        </div>
                    </div>

                    {/* Nav Tabs */}
                    <div className="flex justify-between px-2 pt-2 pb-1 text-gray-500">
                        <div className={`flex-1 flex justify-center border-b-2 border-[#1877F2] pb-2`}>
                            <i className={`fas fa-home text-2xl ${FB_BLUE_TEXT}`}></i>
                        </div>
                        <div className="flex-1 flex justify-center pb-2">
                            <i className="fas fa-user-friends text-2xl"></i>
                        </div>
                        <div className="flex-1 flex justify-center pb-2 relative">
                            <i className="fab fa-youtube text-2xl"></i>
                            <span className="absolute top-0 right-8 bg-red-500 w-2 h-2 rounded-full"></span>
                        </div>
                        <div className="flex-1 flex justify-center pb-2">
                            <i className="fas fa-store text-2xl"></i>
                        </div>
                        <div className="flex-1 flex justify-center pb-2">
                            <i className="fas fa-bell text-2xl"></i>
                        </div>
                        <div className="flex-1 flex justify-center pb-2">
                            <i className="fas fa-bars text-2xl"></i>
                        </div>
                    </div>
                </div>

                {/* Create Post Section */}
                <div className="bg-white p-4 mb-2 mt-1">
                    <div className="flex items-center space-x-3 mb-3">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border border-gray-200" alt="User" />
                        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
                            คุณกำลังคิดอะไรอยู่?
                        </div>
                        <i className="fas fa-images text-green-500 text-xl"></i>
                    </div>
                </div>

                {/* Stories (Visual Filler) */}
                <div className="bg-white py-3 mb-2 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-2 px-4">
                        {/* My Story */}
                        <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-800">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover opacity-70" alt="My Story" />
                            <div className="absolute bottom-0 w-full p-2 text-center">
                                <div className={`w-8 h-8 ${FB_BLUE_BG} border-2 border-white rounded-full flex items-center justify-center mx-auto -mb-4 z-10 relative`}>
                                    <i className="fas fa-plus text-white text-xs"></i>
                                </div>
                            </div>
                        </div>
                        {/* Friend Story 1 */}
                        <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" alt="Sarah J. Story" />
                            <div className={`absolute top-2 left-2 w-8 h-8 rounded-full border-4 border-[#1877F2] overflow-hidden`}>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="Story Profile" />
                            </div>
                            <p className="absolute bottom-2 left-2 text-white font-bold text-xs shadow-black drop-shadow-md">ส้มโอ</p>
                        </div>
                        {/* Friend Story 2 */}
                        <div className="flex-shrink-0 w-24 h-40 rounded-xl relative overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" alt="Emily R. Story" />
                            <div className={`absolute top-2 left-2 w-8 h-8 rounded-full border-4 border-[#1877F2] overflow-hidden`}>
                                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="Story Profile" />
                            </div>
                            <p className="absolute bottom-2 left-2 text-white font-bold text-xs shadow-black drop-shadow-md">แนน น.</p>
                        </div>
                    </div>
                </div>

                {/* Post 1: Organic */}
                <div className="bg-white mb-2">
                    <PostHeader
                        name="สมชาย ใจดี"
                        time="2 ชม."
                        profileUrl="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    />
                    <div className="px-3 pb-2">
                        <p className="text-sm">เพิ่งจัดสวนเสร็จครับ! ในที่สุดก็ได้สวนหน้าตาแบบที่อยากได้สักที 🌿🏡</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-auto object-cover" alt="Garden Post" />
                    <PostActions likes="42" comments="8 ความคิดเห็น" />
                </div>

                {/* Post 2: ADVERTISEMENT (The Focus) */}
                <div className="bg-white mb-2 shadow-sm">
                    <PostHeader
                        name="S-Mom Club Thailand"
                        time="Sponsored"
                        isSponsored={true}
                        profileUrl="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    />
                    
                    {/* Ad Copy */}
                    <div className="px-3 pb-2">
                        <p className="text-sm">
                            การเป็นแม่คือการเดินทางที่เต็มไปด้วยความรักและคำถามมากมาย 🤱💖 <br/><br/>
                            มาร่วมเป็นส่วนหนึ่งกับ S-Mom Club วันนี้ รับคำแนะนำจากผู้เชี่ยวชาญ พร้อมสิทธิพิเศษมากมาย และสังคมคุณแม่ที่อบอุ่น <br/>
                            <span className={FB_BLUE_TEXT}>#มนุษย์แม่ #SMomClub #การดูแลลูกน้อย</span>
                        </p>
                        <p className="mt-2 text-sm font-medium">แอดไลน์ OA ของเราเพื่อรับข้อมูลเพิ่มเติม 👇</p>
                    </div>

                    {/* Ad Media */}
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-64 object-cover object-center" alt="Mom and Baby" />
                    </div>

                    {/* CTA Strip */}
                    <a href="https://line.me/R/ti/p/@204rnnrj" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 flex justify-between items-center p-3 border-b border-gray-200 active:bg-gray-200 transition">
                        <div className="overflow-hidden">
                            <p className="text-xs text-gray-500 uppercase">line.me</p>
                            <p className="font-bold text-sm truncate">S-Mom Club Thailand - Official Account</p>
                        </div>
                        <button className="bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded shadow-sm whitespace-nowrap">
                            สมัครเลย
                        </button>
                    </a>

                    {/* Engagement Counts (Ad Specific) */}
                    <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
                        <div className="flex items-center space-x-1">
                            <div className="flex -space-x-1">
                                <div className={`${FB_BLUE_BG} text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-20 border border-white`}><i className="fas fa-thumbs-up"></i></div>
                                <div className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px] z-10 border border-white"><i className="fas fa-heart"></i></div>
                            </div>
                            <span className="text-gray-500 text-sm ml-1">1.2พัน</span>
                        </div>
                        <div className="text-gray-500 text-sm">156 ความคิดเห็น · 42 แชร์</div>
                    </div>

                    {/* Ad Actions (Repeated for clarity) */}
                    <div className="flex justify-between px-2 py-1">
                        <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                            <i className="far fa-thumbs-up"></i>
                            <span className="text-sm font-semibold">ถูกใจ</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                            <i className="far fa-comment-alt"></i>
                            <span className="text-sm font-semibold">ความคิดเห็น</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-2 py-2 active:bg-gray-100 rounded text-gray-600">
                            <i className="fas fa-share"></i>
                            <span className="text-sm font-semibold">แชร์</span>
                        </button>
                    </div>
                </div>

                {/* Post 3: Organic */}
                <div className="bg-white mb-2">
                    <PostHeader
                        name="ข่าวไอทีวันนี้"
                        time="5 ชม."
                        profileUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    />
                    <div className="px-3 pb-2">
                        <p className="text-sm">อัปเดตใหม่เริ่มปล่อยให้อัปโหลดแล้ววันนี้! เช็คการตั้งค่ากันได้เลยครับ 📱🚀</p>
                    </div>
                    {/* No Image Post Type */}
                    <div className="h-3 bg-white"></div> 

                    <PostActions likes="203" comments="45 ความคิดเห็น" />
                </div>
                
                {/* Bottom Safe Area Spacer */}
                <div className="h-12"></div>

            </div>
        </div>
    );
};

export default App;
