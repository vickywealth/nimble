import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTA from './components/ui/FloatingCTA'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./components/Home'))
const AboutPage = lazy(() => import('./components/About'))
const ServicesPage = lazy(() => import('./components/Services'))
const ChecklistPage = lazy(() => import('./components/Checklist'))
const BookPage = lazy(() => import('./components/Book'))
const ContactPage = lazy(() => import('./components/Contact'))
const TestimonialsPage = lazy(() => import('./components/Testimonials'))
const BlogPage = lazy(() => import('./components/Blog'))
const BlogPostPage = lazy(() => import('./components/Blog').then(module => ({ default: module.BlogPostPage })))
const ResourcesPage = lazy(() => import('./components/Resources').then(module => ({ default: module.ResourcesPage })))
const ResourceDownloadPage = lazy(() => import('./components/Resources').then(module => ({ default: module.ResourceDownloadPage })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <div className="flex-1">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<ResourceDownloadPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        </div>
      </Suspense>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}
