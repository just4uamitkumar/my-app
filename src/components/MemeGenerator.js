import React, { Component } from 'react';

class MemeGenerator extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Meme Generator',
            topText:'',
            bottomText:'',
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)   
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes } = response.data
                this.setState({allMemeImgs : memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)       
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
        console.log(randMemeImg)
        console.log(this.state.allMemeImgs.length)
    }
    
    render(){      
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="contentBlock clearfix">
                            <h2>Meme Form</h2>

                            <form className="meme-form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input  type="text" name="topText" placeholder="Top Text"
                                        value={this.state.topText} onChange={this.handleChange}
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input  type="text" name="bottomText" placeholder="Bottom Text"
                                        value={this.state.bottomText} onChange={this.handleChange}
                                        className="form-control" />
                                </div>
                                <div className="form-group">                        
                                    <button className="btn btn-primary btnBlock">Gen</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="contentBlock clearfix">
                            <div className="meme  text-center">
                                <h2 className="top">{this.state.topText}</h2>
                                <img src={this.state.randomImg} alt="" className="imgFull" />
                                <h2 className="bottom">{this.state.bottomText}</h2>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;