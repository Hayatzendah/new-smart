# New Smart Landing Page - صفحة هبوط خلاط New Smart

صفحة هبوط احترافية لمنتج خلاط New Smart متعدد الألوان، مصممة بتقنية React مع تحسين كامل للسيو والأداء.

## المميزات

- ✅ تصميم RTL كامل للغة العربية
- ✅ Mobile-First Responsive Design
- ✅ تحسين السيو (SEO) الكامل مع Structured Data
- ✅ 6 ألوان قابلة للاختيار مع معاينة فورية
- ✅ أداء عالي مع lazy loading للصور
- ✅ إمكانية الوصول (Accessibility) كاملة
- ✅ تكامل مع وسائل التواصل الاجتماعي

## البدء

### المتطلبات
- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn

### التثبيت

1. تثبيت المكتبات:
\`\`\`bash
npm install
\`\`\`

2. إضافة الصور:
ضع صور المنتج في مجلد \`public/images/\`:
- Black.png
- Blue.png
- Brown.png
- full.png
- Red.png
- White.png
- logo.jpg (اللوجو)

3. تشغيل المشروع:
\`\`\`bash
npm start
\`\`\`

المشروع سيعمل على: http://localhost:3000

### البناء للإنتاج

\`\`\`bash
npm run build
\`\`\`

## هيكل المشروع

\`\`\`
new-smart/
├── public/
│   ├── images/          # صور المنتج
│   │   ├── Black.png
│   │   ├── Blue.png
│   │   ├── Brown.png
│   │   ├── full.png
│   │   ├── Red.png
│   │   ├── White.png
│   │   └── logo.jpg
│   └── index.html
├── src/
│   ├── App.jsx         # المكون الرئيسي
│   ├── App.css         # التنسيقات
│   └── index.js        # نقطة الدخول
└── package.json
\`\`\`

## التخصيص

### تعديل البيانات

جميع البيانات موجودة في ملف \`App.jsx\` كمصفوفات قابلة للتعديل:
- \`variants\`: ألوان المنتج
- \`benefits\`: المميزات
- \`features\`: المميزات التفصيلية
- \`specifications\`: المواصفات التقنية
- \`testimonials\`: آراء العملاء
- \`faqs\`: الأسئلة الشائعة

### تعديل الألوان

الألوان موجودة كمتغيرات CSS في ملف \`App.css\`:
\`\`\`css
:root {
  --ns-red: #D90D10;
  --ns-navy: #242249;
  --ns-maroon: #7C050B;
  --ns-gray: #2F3339;
  --ns-black: #000000;
  --ns-white: #FFFFFF;
}
\`\`\`

## معلومات الاتصال المدمجة

- واتساب: 015506322096
- هاتف: 01120037800
- فيسبوك: [New Smart](https://www.facebook.com/profile.php?id=61585240442692)
- إنستجرام: [new.samrt](https://www.instagram.com/new.samrt)
- تيك توك: [@newsmart.appliances](https://www.tiktok.com/@newsmart.appliances)

## تحسين السيو

الصفحة تتضمن:
- Meta tags كاملة
- Open Graph tags
- Twitter Cards
- Structured Data (Product + FAQPage schema)
- Semantic HTML
- تحسين الصور

## المتصفحات المدعومة

- Chrome (آخر إصدارين)
- Firefox (آخر إصدارين)
- Safari (آخر إصدارين)
- Edge (آخر إصدارين)
- الأجهزة المحمولة (iOS Safari, Chrome Mobile)

## الترخيص

© 2025 New Smart. جميع الحقوق محفوظة.
