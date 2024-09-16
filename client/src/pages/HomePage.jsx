
import Header from '../components/Header'
import MessageContainer from '../components/MessageContainer'
import SideBar from '../components/SideBar'

const HomePage = () => {

    

    return (
        <>
            <Header />
            <div className=' flex sm:space-x-[260px]'>
                <SideBar />
                <MessageContainer />
            </div>
        </>
    )
}

export default HomePage