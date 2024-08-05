import { useEffect, useState } from 'react';
import mockData from '../mockData/mockTestingData.json'

const TestingPage = () => {

    const [lastScrollY, setLastScrollY] = useState(0);



    useEffect(() => {
        console.log(lastScrollY)
    }, [lastScrollY])

    return <div className='t-area'>
        <div className='t-contianer' >
            <div className='test-body' onScroll={(e)=>setLastScrollY(e.target.scrollTop)}>
                <h3 className='title'>{mockData.title}</h3>
                <div className='discription'>{mockData.discription}</div>
            </div>
        </div>
        <p>Scroll direction: {lastScrollY}</p>
    </div>
}

export default TestingPage;

