import Experience from '../components/ui/Experience';
import About from '../components/ui/About';
import './pagesStyles.css';
import { Projects } from '../components/ui/Projects';
import PageLayout from '../layouts/PageLayout';


export const MainPage = () => {

  return (
    <PageLayout
      children={
        <>
          <About/>
          <Experience/>
          <Projects/>
        </>}
    />
    
  )
}




