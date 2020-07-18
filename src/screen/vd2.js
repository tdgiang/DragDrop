import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const {width,height}=Dimensions.get('window');

export default class index extends Component {
    
    constructor(props){
        super(props);
        this.state={
            valueTop:new Animated.Value(0),
            valueLeft:new Animated.Value(0),
            show:true
            
        }
    }
    _onPress(){
        Animated.parallel([
            Animated.timing(
                this.state.valueTop,
                {
                    toValue:height-50,
                    duration:1000,
                    useNativeDriver:false
                   
                }

            ),
            Animated.timing(
                this.state.valueLeft,
                {
                    toValue:width/2-25,
                    duration:1000,
                    useNativeDriver:false
                   
                }
            )
        ]).start(()=>this.setState({show:false}));
    }
   
    _renderCircle(){
        let temp=this.state.show?
        <TouchableOpacity
            onPress={this._onPress.bind(this)}
        >
            <Animated.View
        style={{
            width:50,
            height:50,
            backgroundColor:'aqua',
            borderRadius:25,
            left:this.state.valueLeft,
            top:this.state.valueTop
        }}
    >

    </Animated.View>
    </TouchableOpacity>:null;
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
