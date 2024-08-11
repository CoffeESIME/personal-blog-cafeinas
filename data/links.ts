import {
    BookOpen,
    Code,
    Layers,
    Linkedin,
    Mail,
    Scroll,
    User,
    GitBranch,
    InspectIcon,
    ScrollIcon,
    MailIcon
  } from 'lucide-react'
  
  export const generalLinks = [
    {
      href: '/',
      label: 'Home',
      icon: ScrollIcon,
    },
    {
      href: '/about',
      label: 'About',
      icon: User,
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: BookOpen,
    },
    {
      href: '/proyects',
      label: 'Proyectos',
      icon: Code,
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: MailIcon,
    },
  ]
  
  export const linksSocial = [
    {
      href: 'https://instagram.com/edui_design/',
      icon: InspectIcon,
      label: 'Seguir en Instagram',
      outline: true,
    },
    {
      href: 'https://github.com/educlopez',
      icon: GitBranch,
      label: 'Seguir en GitHub',
      outline: true,
    },
    {
      href: 'https://linkedin.com/in/educlopez',
      icon: Linkedin,
      label: 'Seguir en LinkedIn',
      outline: true,
    },
    {
      href: 'https://read.cv/educlopez',
      icon: Scroll,
      label: 'Read.cv',
      outline: true,
    },
    {
      href: 'mailto:educalvolopez@gmail.com',
      icon: Mail,
      label: 'Enviar Correo',
      outline: true,
    },
  ]