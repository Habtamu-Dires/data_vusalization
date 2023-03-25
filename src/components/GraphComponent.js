import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import {Cloudinary} from "@cloudinary/url-gen";

const baseUrl = process.env.REACT_APP_SERVER_URL;

function Graph(props) {

    const [graphHtml, setGraphHtml] = useState('');
    const [graphImage, setGraphImage] = useState('');

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME
        }
    });

    useEffect(()=>{
        if(props.item.file_type === 'html'){
            fetch(baseUrl+`/graphs/${props.item.id}`)
            .then(response => response.text())
            .then(response=>{
                //console.log(response)
                const element = document.createElement('div')
                element.innerHTML = response;
                var scripts = element.querySelectorAll('script');
                for(let i = 0; i < scripts.length; i++) {
                    if(scripts[i].innerText){
                        eval(scripts[i].innerText)
                    } else {
                        fetch(scripts[i].src)
                        .then(function(data){
                            data.text()
                            .then(function (r) {
                                eval(r);
                            })
                        })
                    }
                    // To not repeat the element
                    scripts[i].parentNode.removeChild(scripts[i]);
                }
                console.log('the element', element)
                setGraphHtml(element)
            }
            )
            .catch(err => console.log(err));
        } else if(props.item.file_type === 'image') {
            fetch(baseUrl+`/graphs/${props.item.id}`)
            .then(response => response.json())
            .then(response => {
                const public_id = response.public_id;
                const myImage = cld.image(public_id)
                console.log(myImage.toURL())
                const url = myImage.toURL();
                console.log(url)
                console.log(typeof url)
                setGraphImage(url);
        
            })
            .catch(err => console.log(err))
        }
        
    },[])
    if(graphHtml !== ''){
        return(
            <div className="graph">
                <div className="animate__animated animate__bounceInUp">
                <div className="row">                
                        <div className="col-12 d-flex justify-content-center">
                            {parse(graphHtml.innerHTML)}
                        </div>
                        <div className="col-12 source">
                            <p>{props.item.description}</p>
                            <p>source: {props.item.source_name} <span>{props.item.source_url}</span></p>
                        </div>
                    </div>
                </div>
            </div>  
        )               
        } else if(graphImage !== '') {
            return(
                <div className="graph">
                <div className="animate__animated animate__bounceInUp">
                <div className="row">                
                        <div className="col-12 d-flex justify-content-center">
                            <img className="graphImage img-fluid" src={graphImage} alt={props.item.title}/>
                        </div>
                        <div className="col-12 source">
                            <p>{props.item.description}</p>
                            <p>source: {props.item.source_name} <span>{props.item.source_url}</span></p>
                        </div>
                    </div>
                </div>
            </div>  
            )
        } else {
        return(
            <div className="graph">
                <div className="d-flex justify-content-center align-items-center">
                    <h4>Loading ...</h4>                        
                </div>
            </div>
        )
        
        }
}

export default Graph;