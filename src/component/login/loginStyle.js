import { StyleSheet,Dimensions, Image } from "react-native";

export default StyleSheet.create({
    container:{
        margin:Dimensions.get("window").width/4,
    },
    Image:{
        width:Dimensions.get("window").width/2,
        height:Dimensions.get("window").width/2,
        backgroundColor:"black",
    },
    input:{
        padding:2,
        marginTop:2,
        borderBottomColor:"gray",
        borderBottomWidth:1,
        fontSize:12,
    },
    input_placeholder:{
        padding:2,
        marginTop:2,
        borderBottomColor:"gray",
        borderBottomWidth:1,             
        fontSize:8,
    },
    button_container:{
        marginTop:10,
        
    },
    button:{
      
    }


});