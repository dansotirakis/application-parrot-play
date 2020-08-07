import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Parrot extends Component {

  state = {
    message : [],
  }

  constructor() {
    super();
    this.ws = new WebSocket('ws://echo.websocket.org');

  }

  componentWillMount() {
    i = 0;

    this.ws.onopen = () => {
    };
    
    this.ws.onmessage = (e) => {
        
        response =  [
          {
            _id: i++,
            text: e.data,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Parrot',
              avatar: 'https://apprecs.org/ios/images/app-icons/256/66/430152294.jpg',
            },
          },
        ],

      this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, response), 
        }))
    
    }

    this.ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);

    };

    this.ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };

  }

  onSend(messages = []) {

    mensagem = messages[messages.length - 1].text,
      
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
           
      }))
      
    this.ws.send(mensagem)

  }

  render() {

    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}
