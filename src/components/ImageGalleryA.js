import React, { Component } from 'react';
import AnimalCard from './AnimalCard';
import NatureCard from './NatureCard';

class ImageGalleryA extends Component{

    constructor(props){
        super(props )        
        this.state = {
           title : 'First Gallery' ,
           titleA : 'Animal Gallery',
           titleB : 'Nature Gallery'
        }       
    }

    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock clearfix">
                    <h2>{this.state.titleA} </h2> 

                    <div className="gallery row">
                        <AnimalCard
                            name="Mr. Whiskerson" 
                            imgUrl="../images/animal-1.jpg"
                            phone="(212) 555-1234"
                            email="mr.whiskaz@catnap.meow"
                        />
                        <AnimalCard
                            name="Fluffykins" 
                            imgUrl="../images/animal-2.jpg"
                            phone="(212) 555-2345"
                            email="fluff@me.com"
                        />
                        <AnimalCard
                            name="Destroyer" 
                            imgUrl="../images/animal-3.jpg"
                            phone="(212) 555-3456"
                            email="ofworlds@yahoo.com"
                        />
                        <AnimalCard
                            name="Felix" 
                            imgUrl="../images/animal-4.jpg"
                            phone="(212) 555-1234"
                            email="thecat@hotmail.com"
                        />
                    </div>
                </div>

                <div className="contentBlock clearfix">
                    <h2>{this.state.titleB} </h2> 

                    <div className="gallery row">
                        <NatureCard
                            contact={{ name:"Sun Rise", imgUrl:"../images/nature1.jpg", 
                            phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow" } }                          
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
            </div>
        )
    }
}

export default ImageGalleryA;