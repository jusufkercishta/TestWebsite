export default function KMCModernWebsite() {
  const testimonials = [
    {
      name: 'Michael Turner',
      role: 'Operations Director',
      company: 'Detroit Manufacturing Group',
      quote:
        'KMC transformed our project management systems and leadership development processes.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'Innovate Solutions',
      quote:
        'Professional, strategic, and highly effective consulting that delivered measurable growth.',
    },
    {
      name: 'David Reynolds',
      role: 'HR Executive',
      company: 'Midwest Technologies',
      quote:
        'Their training and coaching programs elevated our entire organization.',
    },
  ];
  const services = [
    {
      title: 'Strategic Consulting',
      description:
        'Executive-level consulting focused on growth, operational efficiency, and transformation.',
    },
    {
      title: 'Project Management',
      description:
        'Structured planning and execution strategies that keep projects on time and scalable.',
    },
    {
      title: 'Professional Training',
      description:
        'Modern classroom and online learning experiences tailored for organizations and teams.',
    },
    {
      title: 'Leadership Coaching',
      description:
        'Empowering leaders and professionals through mentoring, coaching, and development.',
    },
    {
      title: 'Software & Mobility Solutions',
      description:
        'Technology-driven solutions that improve workflows, collaboration, and performance.',
    },
    {
      title: 'Business Development',
      description:
        'Innovative concept and product development services designed for long-term success.',
    },
  ];

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight">
              KMC<span className="text-cyan-400">.</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#why" className="hover:text-cyan-400 transition">
              Why KMC
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <button className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

        <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Troy, Michigan Business Consulting Firm
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              Modern
              <br />
              Business
              <br />
              Solutions.
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              KMC delivers elite consulting, professional training, strategic solutions,
              and leadership development for organizations ready to scale smarter.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition shadow-2xl shadow-cyan-500/20">
                Start Your Growth
              </button>

              <button className="border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl transition font-semibold">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl shadow-cyan-500/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 text-black">
                  <h2 className="text-5xl font-black mb-2">15+</h2>
                  <p className="font-semibold">Business Services</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h2 className="text-5xl font-black text-cyan-400 mb-2">100%</h2>
                  <p className="text-white/70">Client-Focused Solutions</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h2 className="text-5xl font-black text-cyan-400 mb-2">Modern</h2>
                  <p className="text-white/70">Training Systems</p>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8">
                  <h2 className="text-5xl font-black mb-2">Elite</h2>
                  <p className="text-white/80">Strategic Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Services
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Professional Solutions
              <br />
              For Modern Organizations
            </h2>

            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              From executive consulting to technical training and organizational strategy,
              KMC delivers premium services that drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] border border-white/10 rounded-[32px] p-8 hover:bg-white/[0.06] hover:border-cyan-400/40 transition duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-8 flex items-center justify-center text-black text-2xl font-black">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-5 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-6 bg-gradient-to-b from-transparent to-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5 font-bold">
              About KMC
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
              Strategy.
              <br />
              Leadership.
              <br />
              Innovation.
            </h2>

            <p className="text-white/65 text-xl leading-relaxed mb-8">
              KMC is a modern consulting and training firm helping businesses build
              stronger operations, develop leadership talent, and accelerate growth
              through strategic solutions and practical execution.
            </p>

            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We combine deep industry expertise with modern methodologies to create
              impactful solutions for organizations across multiple sectors.
            </p>

            <div className="flex gap-10 flex-wrap">
              <div>
                <h3 className="text-4xl font-black text-cyan-400">10+</h3>
                <p className="text-white/60 mt-2">Years of Expertise</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">500+</h3>
                <p className="text-white/60 mt-2">Professionals Trained</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
                <p className="text-white/60 mt-2">Client Support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-[32px] p-10 text-black h-72 flex flex-col justify-between">
              <div className="text-6xl font-black">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Consulting Excellence</h3>
                <p className="font-medium opacity-80">
                  Tailored business strategies designed for measurable success.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 h-72 flex flex-col justify-between mt-16">
              <div className="text-6xl font-black text-cyan-400">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Professional Training</h3>
                <p className="text-white/60">
                  High-impact classroom and online learning experiences.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 h-72 flex flex-col justify-between -mt-10">
              <div className="text-6xl font-black text-cyan-400">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Leadership Coaching</h3>
                <p className="text-white/60">
                  Developing confident, innovative, and high-performing leaders.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[32px] p-10 h-72 flex flex-col justify-between">
              <div className="text-6xl font-black">04</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Business Innovation</h3>
                <p className="text-white/80">
                  Future-ready solutions for evolving organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KMC */}
      <section id="why" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4 font-bold">
            Why Choose KMC
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-20">
            Built For Businesses
            <br />
            That Want More.
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 text-left">
            {[
              'Customized Solutions',
              'Experienced Consultants',
              'Modern Training Systems',
              'Results-Driven Approach',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 hover:border-cyan-400/40 transition"
              >
                <div className="text-cyan-400 text-6xl font-black mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{item}</h3>
                <p className="text-white/60 leading-relaxed">
                  Premium consulting and professional services designed to help
                  organizations achieve sustainable success and operational excellence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Client Success
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Trusted By Growing
              <br />
              Organizations
            </h2>

            <p className="text-white/60 text-xl max-w-3xl mx-auto">
              Businesses rely on KMC for strategic insight, operational excellence,
              and professional development solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 hover:border-cyan-400/40 transition"
              >
                <div className="flex gap-1 mb-6 text-cyan-400 text-2xl">
                  ★★★★★
                </div>

                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  “{testimonial.quote}”
                </p>

                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-white/50 mt-1">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Contact Us
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Let’s Build
              <br />
              Something Great.
            </h2>

            <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-xl">
              Connect with KMC today to discuss consulting, training, project management,
              or strategic development solutions tailored for your organization.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-white/60">Troy, Michigan</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-white/60">info@kmc-consulting.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20" />
                <div>
                  <p className="text-white font-semibold">Business Hours</p>
                  <p className="text-white/60">Monday - Friday / 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project or business goals"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 resize-none"
              />

              <button className="bg-cyan-400 text-black font-bold py-5 rounded-2xl hover:scale-[1.02] transition">
                Send Consultation Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-20 text-center text-black">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Ready To Elevate
                <br />
                Your Business?
              </h2>

              <p className="text-xl max-w-3xl mx-auto mb-12 opacity-80 leading-relaxed">
                Partner with KMC to unlock strategic growth, leadership development,
                and modern business transformation.
              </p>

              <div className="flex justify-center flex-wrap gap-5">
                <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
                  Schedule Consultation
                </button>

                <button className="bg-white/20 backdrop-blur-xl px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 transition">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-5xl font-black mb-6">
              KMC<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
              Premium business consulting, training, and strategic development
              solutions for organizations across Troy and beyond.
            </p>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10" />
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10" />
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>

            <div className="space-y-4 text-white/60">
              <p>Consulting Services</p>
              <p>Project Management</p>
              <p>Training & Coaching</p>
              <p>Strategic Solutions</p>
              <p>Software Training</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>

            <div className="space-y-4 text-white/60">
              <p>Troy, Michigan</p>
              <p>info@kmc-consulting.com</p>
              <p>(248) 555-0123</p>
              <p>Mon - Fri / 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/40 text-sm">
          <p>© 2026 KMC Consulting. All rights reserved.</p>
          <p>Designed for modern business growth.</p>
        </div>
      </footer>
    </div>
  );
}
