import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';

const {width,height}=Dimensions.get('window');

export default class index extends Component {
    
    constructor(props){
        super(props);
        this.state={
            valueTop:0,
            valueLeft:0,
            show:true
            
        }
    }

    _panResponder=PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onMoveShouldSetPanResponder:()=>true,
        onPanResponderMove:this._panResponderMove.bind(this),
         
    })

    _panResponderMove(event,gestureState){
        if(gestureState.moveY>height-100 && gestureState.moveX  >(width/2)-30 && gestureState.moveX <(width/2)+30)
            this.setState({
                show:false
            })
        this.setState({
            valueTop:gestureState.moveY,
            valueLeft:gestureState.moveX
        })
    }
    _renderCircle(){
        let temp=this.state.show?<View
        {...this._panResponder.panHandlers}
        style={{
            width:50,
            height:50,
            backgroundColor:'aqua',
            borderRadius:25,
            left:this.state.valueLeft,
            top:this.state.valueTop
        }}
    >

    </View>:null;
    return temp;
    }



    render() {
        return (
            <View style={{flex:1}}>
                {this._renderCircle()}
                <View  
                    style={{
                        width:50,
                        height:50,
                        position:'absolute',
                        bottom:10,
                        left:(width/2)-25,
                        borderWidth:1,

                    }}
                >
                </View>   

            </View>            
        );
    }
}
