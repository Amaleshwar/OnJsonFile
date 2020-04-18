import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


var chatdata=''

var viewjson =[];



class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  messages:  tempdata,
                       // torender: false,
                        message: '',
                        author:'',
                        Reciver:'Select User',
                        errormessage:'',
                        userList:[],
                        inputtype:'text',
         }
   
           
    }


  updatetojson(){
    let formdata =new FormData();
    formdata.append('statusvalue','0');
    axios.post("http://192.168.0.5:8000/updatejson",formdata)
        .then(res=>{  
                        chatdata =  res.data;
        })
  }
  
  viewtojson(){
    axios.post("http://192.168.0.5:8000/viewjson",)
        .then(res=>{  
                        viewjson =  res.data;
                var count=0;
                console.log("result2",viewjson.Employee) 
        })
  }
  addtojson(){
    let formdata =new FormData();
    var te= { id: '4', ReceiverId: 'amal', SenderId: 'vamsi', Status: '1' };
    var validJson = JSON.stringify(te) 
    formdata.append('addvalue',validJson);
    axios.post("http://192.168.0.5:8000/addjson",formdata)
        .then(res=>{  

                        chatdata =  res.data;

        })
  }
  deletetojson(){
    let formdata =new FormData();
    var te= { id: '4', ReceiverId: 'amal', SenderId: 'vamsi', Status: '1' };
    var validJson = JSON.stringify(te) 
    formdata.append('addvalue',validJson);
    axios.post("http://192.168.0.5:8000/deletejson",formdata)
        .then(res=>{  

                        chatdata =  res.data;
  
        })
  }

    render() { 
        return ( 
            <div className="">
               
                <button className="add" onClick={()=>this.viewtojson()}>View</button>
                <button className="add" onClick={()=>this.addtojson()}>Add</button>
                <button className="delete" onClick={()=>this.deletetojson()}>delete</button>
                <button className="update" onClick={()=>this.updatetojson()}>update</button>

        </div> 
        );
    }
}
 
export default ChatBox;