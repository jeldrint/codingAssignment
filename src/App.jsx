import Intro from './components/1_Intro';
import Description from './components/2_Description';
import Features from './components/3_Features';
import Tours from './components/4_Tours';
import Feedback from './components/5_Feedback';
import BookNow from './components/6_Booknow';
import Links from './components/7_Links';
import MenuIcon from './components/MenuIcon';

const App = () => {
    return (        
        <div className='min-h-screen lg:p-7 font-lato'>
            <MenuIcon />
            <div className='w-full bg-[#F7F7F7] text-[#777777]'>
                <Intro />
                <Description />
                <Features />
                <Tours />
                <Feedback />
                <BookNow />
                <Links />
            </div>
        </div>

    )
}

export default App;