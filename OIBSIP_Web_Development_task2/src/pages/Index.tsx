
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed'
    });

    // Loading Animation
    const tl = gsap.timeline();
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    }).to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
        // Start main animations
        initMainAnimations();
      }
    });

    const initMainAnimations = () => {
      // Hero animations
      gsap.fromTo(".hero-title", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      }, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out"
      });
      gsap.fromTo(".hero-subtitle", {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      });
      gsap.fromTo(".hero-cta", {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)"
      });
      gsap.fromTo(".spline-container", {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out"
      });

      // Floating orbs animation
      gsap.to(".glow-orb", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // ScrollTrigger animations
      gsap.fromTo(".about-image", {
        opacity: 0,
        x: -50,
        filter: "blur(5px)"
      }, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%"
        }
      });
      gsap.fromTo(".about-content", {
        opacity: 0,
        x: 50
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%"
        }
      });
      gsap.fromTo(".skill-icon", {
        opacity: 0,
        y: 30,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%"
        }
      });
      gsap.fromTo(".project-card", {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%"
        }
      });
      gsap.fromTo(".contact-form", {
        opacity: 0,
        x: -50
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%"
        }
      });
      gsap.fromTo(".contact-info", {
        opacity: 0,
        x: 50
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%"
        }
      });
    };

    return () => {
      scroll.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [{
    title: "Food Delivery Website",
    description: "Interactive dashboard for machine learning model insights",
    tech: ["React", "D3.js", "Python"],
    image: "/lovable-uploads/89542fba-6a99-4e31-b896-1f221476d1e1.png"
  }, {
    title: "3D Portfolio Platform",
    description: "Immersive 3D portfolio builder with WebGL",
    tech: ["Three.js", "React", "GSAP"],
    image: "/lovable-uploads/915a1070-2760-467c-90dc-21d9daf04f6c.png"
  }, {
    title: "Gaming UI Framework",
    description: "Next-gen gaming interface components",
    tech: ["React", "TypeScript", "CSS3"],
    image: "/lovable-uploads/d72d1fcb-0c06-4e34-a6c9-10e8b7d824ea.png"
  }, {
    title: "Responsive Design System",
    description: "Cross-platform design components",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/lovable-uploads/0ffd39c5-bf1e-4899-aed7-8e7362be659b.png"
  }, {
    title: "Creative Gaming Portal",
    description: "Immersive gaming experience platform",
    tech: ["React", "WebGL", "Node.js"],
    image: "/lovable-uploads/55a7056b-c0a6-4f80-b157-f0e3313e04c1.png"
  }, {
    title: "Professional Builder",
    description: "Advanced website building platform",
    tech: ["React", "TypeScript", "SASS"],
    image: "/lovable-uploads/4bc0ed8a-dfdb-4afd-a2da-a323e865c883.png"
  }];

  return <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      {/* Preloader */}
      <div ref={preloaderRef} className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center">
        <div className="text-4xl font-light text-white mb-8 tracking-wider">ANJALI</div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div ref={progressBarRef} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 w-0 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-400 mt-4">Loading Experience...</div>
      </div>

      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-orb absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute top-1/3 right-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-1/4 left-1/4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-20 right-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-light text-white tracking-wider">ANJALI</div>
          <div className="hidden md:flex space-x-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 spline-container">
          <iframe src='https://my.spline.design/aidatamodelinteraction-CqfWtjRnzmGkqhdW6AdsL2I1/' frameBorder='0' width='100%' height='100%' className="opacity-60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">ANJALI SHRIVASTAV</span>
          </h1>
          <p className="hero-subtitle md:text-2xl text-gray-300 mb-8 font-light text-6xl">CSE (AI/ML) Student </p>
          <button className="hero-cta group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section min-h-screen py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="about-image">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
              <img src="/lovable-uploads/ec2439d5-74c4-46ef-8729-7dda2630417c.png" alt="Anjali" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20" />
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="text-4xl font-light text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm a passionate Computer Science student specializing in AI/ML with a love for creating 
              immersive digital experiences. I combine cutting-edge technology with creative design 
              to build applications that push the boundaries of what's possible.
            </p>
            
            <div className="skills-grid grid grid-cols-4 gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'AI/ML', 'GSAP', 'Node.js'].map((skill, index) => <div key={skill} className="skill-icon group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="text-cyan-400 text-2xl mb-2">⚡</div>
                    <div className="text-white text-sm">{skill}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-white text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <div key={index} className="project-card group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {tech}
                      </span>)}
                  </div>
                  
                  <button className="flex items-center text-cyan-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section min-h-screen py-20 px-6 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="contact-form">
            <h2 className="text-4xl font-light text-white mb-8">Let's Connect</h2>
            
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all" />
              </div>
              
              <div>
                <input type="email" placeholder="Your Email" className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all" />
              </div>
              
              <div>
                <textarea rows={6} placeholder="Your Message" className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none"></textarea>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3 className="text-2xl font-light text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-4 text-cyan-400" />
                <span>shrivastav24anjali@gmail.com</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-4 text-cyan-400" />
                <span>+91 9876543210</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-4 text-cyan-400" />
                <span>Kolkata | India</span>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-12">
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300 group">
                <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 mb-4">
            © 2025 Anjali. Crafted with passion and powered by innovation.
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
