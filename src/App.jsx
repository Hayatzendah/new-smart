import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';

// بيانات الألوان المتاحة
const variants = [
  {
    id: 1,
    nameEn: 'Black',
    nameAr: 'أسود',
    imageSrc: '/images/Black.png',
    swatchColor: '#000000'
  },
  {
    id: 2,
    nameEn: 'Blue',
    nameAr: 'أزرق',
    imageSrc: '/images/Blue.png',
    swatchColor: '#1E88E5'
  },
  {
    id: 3,
    nameEn: 'Brown (Wood)',
    nameAr: 'بني (خشبي)',
    imageSrc: '/images/Brown.png',
    swatchColor: '#8D6E63',
    isDefault: true
  },
  {
    id: 4,
    nameEn: 'Red',
    nameAr: 'أحمر',
    imageSrc: '/images/Red.png',
    swatchColor: '#D90D10'
  },
  {
    id: 5,
    nameEn: 'White',
    nameAr: 'أبيض',
    imageSrc: '/images/White.png',
    swatchColor: '#FFFFFF'
  }
];

// بيانات المميزات
const benefits = [
  {
    id: 1,
    title: 'تصميم عصري وأنيق',
    description: 'تصميم حديث يناسب ديكور مطبخك مع خيارات ألوان متعددة',
    rating: 5
  },
  {
    id: 2,
    title: 'أداء قوي وموثوق',
    description: 'محرك قوي يضمن خلط مثالي لجميع المكونات',
    rating: 5
  },
  {
    id: 3,
    title: 'سهولة في الاستخدام',
    description: 'أزرار بديهية وتحكم سهل للاستخدام اليومي',
    rating: 4.5
  },
  {
    id: 4,
    title: 'متانة عالية',
    description: 'مصنوع من مواد عالية الجودة تضمن الاستخدام الطويل',
    rating: 4.5
  },
  {
    id: 5,
    title: 'سهل التنظيف',
    description: 'تصميم ذكي يسهل عملية التنظيف والصيانة',
    rating: 4
  },
  {
    id: 6,
    title: 'ضمان وخدمة',
    description: 'ضمان شامل مع خدمة عملاء متميزة',
    rating: 5
  }
];

// المميزات التفصيلية
const features = [
  {
    id: 1,
    icon: '⚡',
    title: 'قوة استثنائية',
    description: 'محرك قوي بقدرة 10000 وات يوفر أداء مثالي لجميع احتياجات المطبخ'
  },
  {
    id: 2,
    icon: '🎨',
    title: 'تنوع في الألوان',
    description: 'اختر من بين 5 ألوان مميزة تناسب ذوقك وديكور مطبخك'
  },
  {
    id: 3,
    icon: '🛡️',
    title: 'ضمان الجودة',
    description: 'ضمان استبدال الماتور لمدة سنتين وضمان على الدورق لمدة 10 سنوات مع خدمة ما بعد البيع'
  },
  {
    id: 4,
    icon: '🔪',
    title: 'سكينة قوية',
    description: 'سكينة ب8 شفرات من ستانلس ستيل عالي الجودة لنتائج مثالية'
  },
  {
    id: 5,
    icon: '🚚',
    title: 'توصيل مجاني',
    description: 'توصيل مجاني إلى جميع أنحاء الجمهورية مع إمكانية الدفع عند الاستلام'
  },
  {
    id: 6,
    icon: '🇪🇬',
    title: 'صنع في مصر',
    description: 'منتج مصري بجودة عالمية بخبرة بريطانية يدعم الصناعة المحلية'
  },
  {
    id: 7,
    icon: '⚡',
    title: 'التشغيل النبضي',
    description: 'خاصية التشغيل النبضي لنتائج أدق في تكسير الثلج وفرم المكونات الصلبة'
  }
];

// المواصفات
const specifications = [
  { key: 'القدرة', value: '10000 وات' },
  { key: 'الجهد الكهربائي', value: '220-240 فولت' },
  { key: 'السعة', value: '2 لتر' },
  { key: 'عدد السرعات', value: '15 سرعة' },
  { key: 'السكينة', value: '8 شفرات ستانلس ستيل' },
  { key: 'المادة', value: 'استانلس ستيل / بلاستيك عالي الجودة' },
  { key: 'ضمان الماتور', value: 'سنتين (استبدال)' },
  { key: 'ضمان الدورق', value: '10 سنوات' },
  { key: 'بلد المنشأ', value: 'مصر' },
  { key: 'التوصيل', value: 'جميع أنحاء الجمهورية مجاناً' },
  { key: 'طريقة الدفع', value: 'دفع عند الاستلام' }
];

// آراء العملاء
const testimonials = [
  {
    id: 1,
    name: 'أم محمد',
    comment: 'الخلاط ده جامد جداً والجودة عالية'
  },
  {
    id: 2,
    name: 'سارة أحمد',
    comment: 'بستخدمه كل يوم وأداؤه رائع وسهل التنظيف كمان'
  },
  {
    id: 3,
    name: 'فاطمة علي',
    comment: 'اخترت اللون الخشبي وكان اختيار حلو جداً والتصميم راقي'
  },
  {
    id: 4,
    name: 'نورا محمود',
    comment: 'الخلاط قوي وبيخلط كل حاجة بسهولة'
  },
  {
    id: 5,
    name: 'هند خالد',
    comment: 'اشتريته من فترة والليلة كلها شغال معايا ومش محتاج صيانة'
  }
];

// الأسئلة الشائعة
const faqs = [
  {
    id: 1,
    question: 'ما هي مدة الضمان على المنتج؟',
    answer: 'يأتي خلاط New Smart بضمان شامل: ضمان استبدال الماتور لمدة سنتين، وضمان على الدورق لمدة 10 سنوات.'
  },
  {
    id: 2,
    question: 'هل جميع الألوان متوفرة؟',
    answer: 'نعم، جميع الألوان الخمسة متوفرة حالياً. يمكنك اختيار اللون المفضل لديك عند الطلب.'
  },
  {
    id: 3,
    question: 'كيف يمكنني طلب المنتج؟',
    answer: 'يمكنك الطلب عبر الواتساب على الرقم 0155 063 2096 أو الاتصال على 01120037800.'
  },
  {
    id: 4,
    question: 'هل يمكن توصيل المنتج إلى المنزل؟',
    answer: 'نعم، نوفر خدمة التوصيل مجاناً إلى جميع أنحاء الجمهورية مع إمكانية الدفع عند الاستلام.'
  },
  {
    id: 5,
    question: 'هل يمكنني الاسترجاع؟',
    answer: 'نعم، خلال 14 يوم في حالة عدم الفتح.'
  }
];

function App() {
  const [selectedVariant, setSelectedVariant] = useState(
    variants.find(v => v.isDefault) || variants[2]
  );
  const [openFaqId, setOpenFaqId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [filteredColorId, setFilteredColorId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Structured Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "خلاط New Smart متعدد الألوان",
    "description": "خلاط New Smart عالي الجودة متوفر بخمسة ألوان مميزة لتناسب ديكور مطبخك",
    "brand": {
      "@type": "Brand",
      "name": "New Smart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EGP"
    },
    "image": selectedVariant.imageSrc
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <HelmetProvider>
      <div className="app" dir="rtl" lang="ar">
        <Helmet>
          <title>خلاط New Smart متعدد الألوان - اختر اللون المناسب لمطبخك</title>
          <meta
            name="description"
            content="خلاط New Smart عالي الجودة متوفر بخمسة ألوان مميزة. تصميم عصري، أداء قوي، وضمان شامل. اطلب الآن واحصل على توصيل سريع."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://yourwebsite.com" />

          <meta property="og:type" content="product" />
          <meta property="og:title" content="خلاط New Smart متعدد الألوان" />
          <meta property="og:description" content="خلاط عالي الجودة بخمسة ألوان مميزة لمطبخك العصري" />
          <meta property="og:image" content={selectedVariant.imageSrc} />
          <meta property="og:url" content="https://yourwebsite.com" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="خلاط New Smart متعدد الألوان" />
          <meta name="twitter:description" content="خلاط عالي الجودة بخمسة ألوان مميزة" />
          <meta name="twitter:image" content={selectedVariant.imageSrc} />

          <script type="application/ld+json">
            {JSON.stringify(productSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>

        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <img src="/images/logo.png" alt="New Smart Logo" width="120" height="40" />
              </div>
              <nav className="nav">
                <a href="#features">المميزات</a>
                <a href="#colors">الألوان</a>
                <a href="#specs">المواصفات</a>
                <a href="#testimonials">آراء العملاء</a>
                <a href="#faq">الأسئلة الشائعة</a>
              </nav>
              <div className="header-actions">
                <a href="#order" className="btn btn-primary">اطلب الآن</a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>خلاط New Smart متعدد الألوان — اختر اللون المناسب لمطبخك</h1>
                  <p>
                    اكتشف الجودة والتميز مع خلاط New Smart المتوفر بخمسة ألوان رائعة.
                    تصميم عصري، أداء قوي، وسهولة استخدام تجعل منه الخيار الأمثل لكل مطبخ.
                  </p>
                  <div className="hero-actions">
                    <a href="#order" className="btn btn-primary btn-large">اطلب الآن</a>
                    <a href="https://wa.me/201550632096" className="btn btn-secondary btn-large">
                      تواصل واتساب
                    </a>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="product-image-wrapper">
                    {selectedVariant.badge && (
                      <span className="product-badge">{selectedVariant.badge}</span>
                    )}
                    <img
                      src={selectedVariant.imageSrc}
                      alt={`خلاط New Smart - ${selectedVariant.nameAr}`}
                      width="800"
                      height="800"
                      className="product-image"
                    />
                  </div>
                </div>
              </div>

              {/* Trust Bar */}
              <div className="trust-bar">
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span>ضمان الماتور سنتين والدورق 10 سنوات</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">🚚</span>
                  <span>توصيل مجاني لجميع أنحاء الجمهورية</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">💳</span>
                  <span>دفع عند الاستلام</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon egypt-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="#242249"/>
                      <path d="M12 7l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L12 16l-3.5 2.5 1.5-4.5-3.5-2.5h4.5L12 7z" fill="#FFFFFF"/>
                    </svg>
                  </span>
                  <span>صنع في مصر</span>
                </div>
              </div>
            </div>
          </section>

          {/* Color Picker Section */}
          <section id="colors" className="section colors-section">
            <div className="container">
              <h2 className="section-title">اختر لونك المفضل</h2>
              <p className="section-subtitle">
                خمسة ألوان مميزة تناسب جميع الأذواق وتتماشى مع ديكور مطبخك
              </p>

              {/* Color Swatches */}
              <div className="color-picker">
                {variants.map(variant => (
                  <div
                    key={variant.id}
                    className={`color-option ${selectedVariant.id === variant.id ? 'active' : ''} ${filteredColorId === variant.id ? 'filtered' : ''}`}
                    onClick={() => {
                      setSelectedVariant(variant);
                      // Toggle filter: if same color clicked, remove filter; otherwise apply filter
                      setFilteredColorId(filteredColorId === variant.id ? null : variant.id);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        setSelectedVariant(variant);
                        setFilteredColorId(filteredColorId === variant.id ? null : variant.id);
                      }
                    }}
                    aria-label={`اختر اللون ${variant.nameAr}`}
                  >
                    <div className="color-swatch-wrapper">
                      <div
                        className="color-swatch"
                        style={{ backgroundColor: variant.swatchColor }}
                      >
                      </div>
                    </div>
                    <span className="color-name">{variant.nameAr}</span>
                  </div>
                ))}
              </div>

              {/* Products Images Grid */}
              <div className="products-images-grid">
                {(filteredColorId 
                  ? variants.filter(v => v.id === filteredColorId)
                  : variants
                ).map(variant => (
                  <div
                    key={variant.id}
                    className={`product-image-card ${selectedVariant.id === variant.id ? 'selected' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setSelectedVariant(variant)}
                  >
                    <div className="product-image-card-wrapper">
                      <img
                        src={variant.imageSrc}
                        alt={`خلاط New Smart - ${variant.nameAr}`}
                        className="product-image-card-img"
                      />
                    </div>
                    <div className="product-image-card-info">
                      <h3>{variant.nameAr}</h3>
                      <div
                        className="product-color-indicator"
                        style={{ backgroundColor: variant.swatchColor }}
                      ></div>
                      <a 
                        href={`https://wa.me/201550632096?text=أريد طلب خلاط New Smart - ${variant.nameAr}`}
                        className="product-order-btn"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        اطلب الآن
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section benefits-section">
            <div className="container">
              <h2 className="section-title">لماذا خلاط New Smart؟</h2>
              <div className="benefits-grid">
                {benefits.map(benefit => (
                  <div key={benefit.id} className="benefit-card">
                    <div className="benefit-rating">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        const rating = benefit.rating;
                        const isFullStar = starValue <= Math.floor(rating);
                        const isHalfStar = rating % 1 !== 0 && starValue === Math.ceil(rating) && !isFullStar;
                        
                        return (
                          <span key={index} className="star-wrapper">
                            {isFullStar ? (
                              <span className="star star-full">★</span>
                            ) : isHalfStar ? (
                              <span className="star star-half">★</span>
                            ) : (
                              <span className="star star-empty">☆</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="section features-section">
            <div className="container">
              <h2 className="section-title">مميزات تفصيلية</h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={feature.id} className="feature-block">
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Accessories Section */}
          <section className="section accessories-section">
            <div className="container">
              <h2 className="section-title">الإكسسوارات المرفقة</h2>
              <div className="accessories-content">
                <div className="accessories-image">
                  <img 
                    src="/images/full.png" 
                    alt="خلاط New Smart مع الإكسسوارات" 
                    className="accessories-main-image"
                  />
                </div>
                <div className="accessories-info">
                  <div className="accessory-item">
                    <h3>الكَبّة</h3>
                    <p>هذا الوعاء الصغير على اليسار</p>
                    <div className="accessory-benefits">
                      <h4>فائدتها:</h4>
                      <ul>
                        <li>فرم حاجات صغيرة بسرعة</li>
                        <li>مثل: بصل، ثوم، مكسرات، لحمة مفرومة، أعشاب</li>
                        <li>عملية جدًا عندما تكون الكمية قليلة ولا تحتاج لتشغيل الخلاط الكبير</li>
                        <li>تعني اختصار وقت ومجهود</li>
                      </ul>
                      <p className="accessory-capacity">السعة: 600 مل</p>
                    </div>
                  </div>
                  
                  <div className="accessory-item">
                    <h3>العصاية</h3>
                    <p>هذه العصاية السوداء على اليمين</p>
                    <div className="accessory-benefits">
                      <h4>فائدتها:</h4>
                      <ul>
                        <li>تساعد في إنزال المكونات إلى الأسفل ناحية السكينة</li>
                        <li>مفيدة جدًا مع الأشياء الثقيلة أو المثلجة</li>
                        <li>مثل: الفراولة المثلجة، الثلج، السموذي الثقيل</li>
                        <li>تجعل الخلط يتم بسلاسة دون أن تبقى المكونات معلقة في الأعلى</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="section video-section">
            <div className="container">
              <h2 className="section-title">شاهد خلاط New Smart في العمل</h2>
              <div className="video-wrapper">
                <video 
                  className="product-video"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/full.png"
                >
                  <source src="/videos/blender-video.mp4" type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>
          </section>

          {/* Specifications Section */}
          <section id="specs" className="section specs-section">
            <div className="container">
              <h2 className="section-title">المواصفات التقنية</h2>
              <div className="specs-table">
                {specifications.map((spec, index) => (
                  <div key={index} className="spec-row">
                    <div className="spec-key">{spec.key}</div>
                    <div className="spec-value">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="section testimonials-section">
            <div className="container">
              <h2 className="section-title">آراء عملائنا</h2>
              <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="testimonial-card">
                    <p className="testimonial-comment">"{testimonial.comment}"</p>
                    <p className="testimonial-author">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="section faq-section">
            <div className="container">
              <h2 className="section-title">الأسئلة الشائعة</h2>
              <div className="faq-list">
                {faqs.map(faq => (
                  <div key={faq.id} className="faq-item">
                    <button
                      className={`faq-question ${openFaqId === faq.id ? 'active' : ''}`}
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={openFaqId === faq.id}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon">{openFaqId === faq.id ? '−' : '+'}</span>
                    </button>
                    {openFaqId === faq.id && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="order" className="section cta-section">
            <div className="container">
              <h2 className="section-title">اطلب خلاط New Smart الآن</h2>
              <p className="section-subtitle">
                انضم لآلاف العملاء الراضين واستمتع بتجربة طهي استثنائية
              </p>
              <div className="cta-actions">
                <a href="https://wa.me/201550632096" className="btn btn-primary btn-large">
                  اطلب عبر واتساب
                </a>
                <a href="tel:+201120037800" className="btn btn-secondary btn-large">
                  اتصل الآن
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section footer-logo-section">
                <img src="/images/logo.png" alt="New Smart Logo" className="footer-logo" />
              </div>

              <div className="footer-section">
                <h3>تواصل معنا</h3>
                <div className="contact-links">
                  <a href="tel:+201120037800">
                    📞 01120037800
                  </a>
                  <a href="https://wa.me/201550632096" className="whatsapp-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>01550632096</span>
                  </a>
                </div>
              </div>

              <div className="footer-section">
                <h3>تابعنا</h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=61585240442692" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/new.samrt?igsh=MTgxM3l0NTN2OHV4dA==" target="_blank" rel="noopener noreferrer" aria-label="انستجرام">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@newsmart.appliances?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="تيك توك">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              <p>
                &copy; 2025 New Smart. جميع الحقوق محفوظة. | 
                {' '}طور بواسطة{' '}
                <a href="https://www.brightc0de.com" target="_blank" rel="noopener noreferrer" className="brightcode-link">
                  برايت كود
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky Bottom Bar (Mobile) */}
        <div className="sticky-bottom-bar">
          <a href="tel:+201120037800" className="sticky-btn" aria-label="اتصل الآن">
            📞
          </a>
          <a href="https://wa.me/201550632096" className="sticky-btn whatsapp" aria-label="واتساب">
            💬
          </a>
          <a href="#order" className="sticky-btn order" aria-label="اطلب الآن">
            اطلب الآن
          </a>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="العودة للأعلى"
          >
            ↑
          </button>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
