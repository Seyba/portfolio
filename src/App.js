import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage} from './pages/ContactPage'
import { WorksPage} from './pages/WorksPage'
import { BlogPage } from './pages/BlogPage'
import './App.css'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="container mx-auto ">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/works" element={<WorksPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* <SideNav/> */}
      {/* <HeroSection/> */}
      {/* <Panel/> */}
      
      <div className="container bg-slate-400 px-4">
        <h2>Hello</h2>
        <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
      </div>
      <div className="container bg-slate-100">
        <div className="container bg-slate-200">
          <h2>Hello</h2>
          <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
        </div>
        <div className="container bg-slate-400">
          <h2>Hello</h2>
          <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
        </div>
      </div>

      {/* <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/posts/:id' element={<PostPage />}/>
        <Route path='/posts/edit/:id' element={<EditPostPage />}/>

        <Route path='*' element={<NotFound />}/>

      </Routes> */}
    </div>
  );
}

export default App;