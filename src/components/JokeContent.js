import React, { Component } from 'react';
import Joke from './subComp/Joke';
import JokeCondition from './subComp/JokeCondition';

class JokeContent extends Component{

    constructor(props){
        super(props )        
        this.state = {
           title : 'Joke Content' ,
           titleA : 'Joke Content without condition',
           titleB : 'Joke Content with condition'
        }
    }

    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="contentBlock clearfix">
                            <h2>{this.state.titleA} </h2>
                            <Joke question="What's the best thing about Switzerland?"
                                punchLine="I don't know, but the flag is a big plus!"/>
                            <Joke question="Did you hear about the mathematician who's afraid of negative numbers?"
                                punchLine="He'll stop at nothing to avoid them!"/>
                            <Joke question="Hear about the new restaurant called Karma?"
                                punchLine="There’s no menu: You get what you deserve."/>
                            <Joke question="Did you hear about the actor who fell through the floorboards?"
                                punchLine="He was just going through a stage."/>
                            <Joke question="Did you hear about the claustrophobic astronaut?"
                                punchLine="He just needed a little space."/>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="contentBlock clearfix">
                            <h2>{this.state.titleA} </h2>
                            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
                            <Joke question="Did you hear about the mathematician who's afraid of negative numbers?"
                                punchLine="He'll stop at nothing to avoid them!"/>
                            <Joke question="Hear about the new restaurant called Karma?"
                                punchLine="There’s no menu: You get what you deserve."/>
                            <Joke question="Did you hear about the actor who fell through the floorboards?"
                                punchLine="He was just going through a stage."/>
                            <Joke question="Did you hear about the claustrophobic astronaut?"
                                punchLine="He just needed a little space."/>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="contentBlock clearfix">
                            <h2>{this.state.titleB} </h2>
                            <JokeCondition punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
                            <JokeCondition question="What's the best thing about Switzerland?"
                                punchLine="I don't know, but the flag is a big plus!"/>
                            <JokeCondition question="Did you hear about the mathematician who's afraid of negative numbers?"
                                punchLine="He'll stop at nothing to avoid them!"/>
                            <JokeCondition question="Hear about the new restaurant called Karma?"
                                punchLine="There’s no menu: You get what you deserve."/>
                            <JokeCondition question="Did you hear about the actor who fell through the floorboards?"
                                punchLine="He was just going through a stage."/>
                            <JokeCondition question="Did you hear about the claustrophobic astronaut?"
                                punchLine="He just needed a little space."/>
                        </div>
                    </div> 
                </div>
                              
            </div>
        )
    }
}

export default JokeContent;