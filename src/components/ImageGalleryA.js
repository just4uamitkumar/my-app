import React, { Component } from 'react';
import AnimalCard from './subComp/AnimalCard';
import NatureCard from './subComp/NatureCard';
import CameraCard from './subComp/CameraCard';
import axios from 'axios';

class ImageGalleryA extends Component{

    constructor(props){
        super(props )        
        this.state = {
           title : 'Image Gallery',
           titleA : 'Animal',
           titleB : 'Nature',
           titleC : 'Camera',
           cameras:[],
        }       
    }

    componentDidMount() {
        axios.get(`./gallery.json`)
          .then(res => {
            const cameras = res.data;
            this.setState({ cameras });
          });
    }

    render(){
        const { cameras } = this.state
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock clearfix">
                    <h2>{this.state.titleA} </h2> 

                    <div className="gallery row">
                        <AnimalCard name="Mr. Whiskerson" imgUrl="../images/animal-1.jpg"
                            phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
                        <AnimalCard name="Fluffykins" imgUrl="../images/animal-2.jpg"
                            phone="(212) 555-2345" email="fluff@me.com" />
                        <AnimalCard name="Destroyer" imgUrl="../images/animal-3.jpg"
                            phone="(212) 555-3456" email="ofworlds@yahoo.com" />
                        <AnimalCard name="Felix" imgUrl="../images/animal-4.jpg"
                            phone="(212) 555-1234" email="thecat@hotmail.com"/>
                    </div>
                </div>

                <div className="contentBlock clearfix">
                    <h2>{this.state.titleB} </h2> 

                    <div className="gallery row">
                        <NatureCard
                            contact={{ name:"Sun Rise", imgUrl:"../images/nature1.jpg", 
                            phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow"}}                          
                        />
                        <NatureCard
                            contact={{ name:"White Bus", imgUrl:"../images/nature2.jpg", 
                            phone:"(212) 555-2345", email:"fluff@me.com"}}                          
                        />
                        <NatureCard
                            contact={{ name:"Sun Set", imgUrl:"../images/nature3.jpg", 
                            phone:"(212) 555-3456", email:"ofworlds@yahoo.com"}}                          
                        />
                        <NatureCard
                            contact={{ name:"Sea", imgUrl:"../images/nature4.jpg", 
                            phone:"(212) 555-1234", email:"thecat@hotmail.com"}}                          
                        />
                    </div>
                </div>

                <div className="contentBlock clearfix">
                    <h2>{this.state.titleC} </h2>
                    <div className="gallery row">                    
                       {
                            cameras.map((e, index) => {
                            return <CameraCard key={e.name} index={index}
                                name={e.name} imgSrc={e.imgSrc} resolution={e.resolution}  
                                displaySize={e.displaySize} price={e.price}                    
                            />
                            }) 
                        }                     
                    </div>
                </div>

            </div>
        )
    }
}

export default ImageGalleryA;
