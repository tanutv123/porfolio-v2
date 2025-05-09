"use client"
import React, {useState} from "react"
// import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import emailjs from "emailjs-com";


// export const metadata: Metadata = {
//   title: "Vo Tan Tai - Software Developer",
//   description: "Portfolio of Vo Tan Tai, a Backend Developer specializing in C#, .NET, React, and cloud technologies.",
// }

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });
  // cmt
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
        .sendForm(
            "service_q1p1zlw",
            "template_cz4yfqy",
            e.target,
            "DdhznJ8uj5x1jjiy9"
        )
        .then((result) => {
          alert("Message Sent!");
          setFormData({ name: "", email: "", message: "", subject: "" });
          setLoading(false);
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container px-4 sm:px-6 flex h-16 items-center justify-between max-w-7xl mx-auto">
            <div className="font-bold text-xl">Tanu</div>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
                Education
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeProvider />
              <Button>Porfolio</Button>
            </div>
          </div>
        </header>

        <main className="container px-4 sm:px-6 py-6 md:py-8 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="py-8 md:py-16 lg:py-20 flex flex-col items-center text-center animate-fade-in">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 overflow-hidden rounded-full border-4 border-background shadow-xl">
              <Image src="/avatarresume.jpg?height=128&width=128" alt="John Doe" fill className="object-cover" priority />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Vo Tan Tai</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Software Developer</h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-4 w-4" />
              <span>Binh Thanh District, Ho Chi Minh City</span>
            </div>
            <p className="max-w-[42rem] text-muted-foreground mb-8 leading-normal sm:text-xl sm:leading-8">
              I’m a software developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm a recent graduate experienced in building web applications. I specialize in C#/.NET,
                  ReactJS, Angular, and cloud technologies, with a focus on creating performant applications and accessible user interfaces.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  My journey in software development began during my Information Technology studies, where I discovered my
                  passion for creating solutions that solve real-world problems. Since then, I've constantly trying new things with .NET and
                  related technologies to deliver high-quality software products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me petting a cat, reading tech blogs, or contributing to open-source
                  projects. I'm always eager to learn new technologies and improve my skills.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                    src="/porfoliocat.jpg?height=400&width=600"
                    alt="John working on a project"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-8 md:py-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Education</h2>
            <div className="space-y-8">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">Bachelor's Degree in Software Engineering</h3>
                    <div className="text-muted-foreground">2022 - 2025</div>
                  </div>
                  <p className="text-muted-foreground">FPT University, Ho Chi Minh City</p>
                  <ul>
                    <li className={'mt-4'}>
                      GPA: 3.5/4.0
                    </li>
                    <li className={'mt-4'}>
                        Relevant Coursework: OOP, Web Development, Web Design, Data structures and Algorithms, OS, Networking, etc.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">Student Achievement Awards for Excellent Student</h3>
                      <Badge className="whitespace-nowrap">Fall 2022 - Spring 2023</Badge>
                    </div>
                    <p className="text-muted-foreground">FPT University</p>
                    <p className="mt-2">
                      University-Wide Academic Excellence Award presented to students with top academic performance across all fields of study
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">Honorable Students</h3>
                      <Badge>Fall 2024 - Summer 2024 - Sring 2024</Badge>
                    </div>
                    <p className="text-muted-foreground">FPT University</p>
                    <p className="mt-2">
                      Recognized for academic excellence by maintaining a GPA above 3.2 for semesters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Work Experience</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Intern Software Developer</h3>
                  <div className="flex items-center gap-2">
                    FPT Software
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">08/2023 - 02/2024</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Started as an intern. Worked on fullstack development in Agile Environment.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li> Learn the knowledge about C#, .NET and related technologies (Angular).
                  </li>
                  <li>
                    Learn and develop software development skills.
                  </li>
                  <li>
                    Build a demo web application using ASP.NET Core + Angular.
                  </li>
                  <li>
                    Developed new features and maintained AMS web application using C# Webform, ADO.NET, SQL Server
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C#</Badge>
                    <Badge>.NET</Badge>
                    <Badge>ASP.NET Core</Badge>
                    <Badge>.NET Core</Badge>
                    <Badge>Python</Badge>
                    <Badge>REST</Badge>
                    <Badge>MSSQL</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>SQLite</Badge>
                    <Badge>Microservices</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Angular</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Redux</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub Actions</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Vercel</Badge>
                    <Badge>Azure</Badge>
                    <Badge>Vite</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>English (TOEIC L&R: 970 | S&W: 320)</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-[200px]">
                  <Image
                      src="/reactivities.png?height=200&width=400"
                      alt="E-commerce Platform"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Event management Platform - Reactivities</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/Reactivities" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="http://ec2-54-153-171-0.ap-southeast-2.compute.amazonaws.com:8080/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Plan and manage events effortlessly!
                    This app lets users create, organize, and track events seamlessly, built with .NET + React for a smooth experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">.NET 8</Badge>
                    <Badge variant="secondary">SignalR</Badge>
                    <Badge variant="secondary">JWT Authentication & Authorization</Badge>
                    <Badge variant="secondary">OAuth 2.0</Badge>
                    <Badge variant="secondary">ReactJS</Badge>
                    <Badge variant="secondary">Semantic UI</Badge>
                    <Badge variant="secondary">MobX</Badge>
                    <Badge variant="secondary">Axios</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Azure</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-[200px]">
                  <Image
                      src="/DatingApp.png?height=200&width=400"
                      alt="Task Management App"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Dating & Social Connection App</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/DatingApp" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="http://ec2-54-153-171-0.ap-southeast-2.compute.amazonaws.com:8081/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A modern and engaging platform designed to connect like-minded individuals effortlessly. This application provides a seamless user
                    experience with interactive features for chatting, matching, and social engagement.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">.NET 7</Badge>
                    <Badge variant="secondary">SignalR</Badge>
                    <Badge variant="secondary">ASP.NET Identity</Badge>
                    <Badge variant="secondary">Angular 16</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS(EC2)</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Design Projects Section */}
          <section className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Featured Design Projects(heavily focus on UI)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-[200px]">
                  <Image
                      src="/tictactoe.png?height=200&width=400"
                      alt="E-commerce Platform"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Tic Tac Toe</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/tic-tac-toe" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://tic-tac-toe-orcin-xi-52.vercel.app/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A simple application for two-player tic-tac-toe game.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-[200px]">
                  <Image
                      src="/investment.png?height=200&width=400"
                      alt="Task Management App"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">InvestiMate</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/react-investment-calculator" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://react-investment-calculator-delta.vercel.app/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A simple calculator for your investment
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-[200px]">
                  <Image
                      src="/placepicker.png?height=200&width=400"
                      alt="Task Management App"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Travel Book</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/react-placepicker" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://react-placepicker-lac.vercel.app/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A simple application that lets you add travelling places to your wishlists.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-[200px]">
                  <Image
                      src="/timer.png?height=200&width=400"
                      alt="Task Management App"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Beast Instinct</h3>
                    <div className="flex gap-2">
                      <a href="https://github.com/tanutv123/react-timer-countdown" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://react-timer-countdown.vercel.app/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A simple application to test your timer ability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>


          {/* Contact Section */}
          <section id="contact" className="py-8 md:py-16 scroll-mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  Feel free to reach out to me using the contact information below or the form on this page.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a
                        href="mailto:taitanvo2309@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      taitanvo2309@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                        href="https://linkedin.com/in/tanutv1204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      linkedin.com/in/tanutv1204
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <a
                        href="https://github.com/tanutv123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      github.com/tanutv123
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                          type="text"
                          id="from_name"
                          name="from_name"
                          required
                          value={formData.name}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John Doe"
                          onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                          }
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john.doe@example.com"
                          onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                          }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                        id="subject"
                        name='subject'
                        value={formData.subject}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Project Inquiry"
                        onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                        }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your Message..."
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                    />
                  </div>
                  <Button className="w-full" type={'submit'}>{loading ? "Loading..." : "Send Message"}</Button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-0">
          <div className="container px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 max-w-7xl mx-auto">
            <p className="text-center md:text-left text-sm leading-loose text-muted-foreground">
              © 2024 Vo Tan Tai. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                  href="https://github.com/tanutv123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                  href="https://linkedin.com/in/tanutv1204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                  href="mailto:taitanvo2309@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
  )
}

