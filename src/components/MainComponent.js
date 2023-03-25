import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './HomeComponent';
import {Cloudinary} from "@cloudinary/url-gen";

const public_id = 'visualize-ethiopia/visualize-ethiopia-background-image';

function Main() {

    // cover photo
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME
        }
    });
    const myImage = cld.image(public_id)
    console.log(myImage.toURL())
    const url = myImage.toURL();
    
    const HomeComp = () =>(
        <div className='main-component' 
            style={{backgroundImage: `linear-gradient(to bottom, rgba(204, 230, 204, 0) 20%, rgba(14, 14, 13, 0.8) 80%),url(${url})`}}
        >
            <Home />
        </div>
    )

    return(
            <Routes>
                <Route path='/home' element={<HomeComp />}></Route>
                <Route path="*"  element= {
                    <Navigate to="/home" replace={true} />
                }/>
            </Routes>
    )
}

export default Main;