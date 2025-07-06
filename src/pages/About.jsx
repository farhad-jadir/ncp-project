import React from "react";

function AboutHeader() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
        জাতীয় নাগরিক পার্টি (NCP) সম্পর্কে
      </h1>
    </header>
  );
}

function AboutValues() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
        আমাদের মূল্যবোধ
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>ন্যায্যতা ও সাম্য প্রতিষ্ঠা করা</li>
        <li>জনগণের মৌলিক অধিকার রক্ষা করা</li>
        <li>স্বচ্ছতা ও জবাবদিহিতা বজায় রাখা</li>
        <li>শান্তি ও সাম্প্রদায়িক সম্প্রীতি উন্নয়ন করা</li>
      </ul>
    </section>
  );
}

function AboutPurpose() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
        আমাদের উদ্দেশ্য
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
        আমরা বিশ্বাস করি, দেশ ও সমাজের উন্নয়ন শুধু সরকার নয়, সবার সম্মিলিত প্রচেষ্টায় সম্ভব।
        তাই আমরা স্থানীয় জনগণের অংশগ্রহণ ও সচেতনতা বৃদ্ধির মাধ্যমে একটি সমৃদ্ধ বাংলাদেশ গড়তে প্রতিশ্রুতিবদ্ধ।
      </p>
    </section>
  );
}

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <AboutHeader />
      <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
        জাতীয় নাগরিক পার্টি (NCP) হলো বাঘারপাড়া উপজেলার একটি জাতীয় রাজনৈতিক দল,
        যার মূল লক্ষ্য হলো দেশের জনগণের সেবায় নিবেদিত হওয়া এবং উন্নয়নমূলক কাজ করা।
        আমরা সমাজের সকল শ্রেণির মানুষের কল্যাণে কাজ করি, বিশেষ করে দরিদ্র ও সুবিধাবঞ্চিত
        জনগোষ্ঠীর জন্য।
      </p>
      <AboutValues />
      <AboutPurpose />
    </main>
  );
}
