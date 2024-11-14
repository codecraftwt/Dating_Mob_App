import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';
  import React, { useState, useEffect, useRef } from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { lightTheme } from '../assets/themes';
  import { horizontalScale } from '../utils/Responsive';
  
  const boy = require('../assets/images/new-boy.jpg');
  
  const Chat = ({ navigation }) => {
    const [isOnline, setIsonline] = useState(false);
    const [messages, setMessages] = useState([
      { id: 1, text: 'Hello!', sender: 'user' },
      { id: 2, text: 'Hi there!', sender: 'me' },
      { id: 3, text: 'How are you?', sender: 'user' },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const scrollViewRef = useRef();
  
    const sendMessage = () => {
      if (inputMessage.trim()) {
        setMessages([
          ...messages,
          { id: messages.length + 1, text: inputMessage, sender: 'me' },
        ]);
        setInputMessage('');
      }
    };

    useEffect(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Image source={boy} style={styles.profilePicture} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>User Name</Text>
              <Text style={styles.userStatus}>
                {isOnline ? 'Online' : 'Offline'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => alert('Options pressed')}
            style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
  
        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={{ paddingBottom: 20 }}
          ref={scrollViewRef}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageBubble,
                message.sender === 'me'
                  ? styles.messageBubbleRight
                  : styles.messageBubbleLeft,
              ]}>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Type a message"
            multiline={true}
            scrollEnabled={false}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Chat;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    chatContainer: {
      flex: 1,
      padding: 10,
    },
    messageBubble: {
      maxWidth: '70%',
      padding: 10,
      borderRadius: 8,
      marginVertical: 5,
    },
    messageBubbleLeft: {
      alignSelf: 'flex-start',
      backgroundColor: '#e1ffc7',
    },
    messageBubbleRight: {
      alignSelf: 'flex-end',
      backgroundColor: '#dcf8c6',
    },
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
      textAlignVertical: 'top',
      height:40
    },
    sendButton: {
      marginLeft: 10,
      backgroundColor: '#075E54',
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: lightTheme.appColor,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profilePicture: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginHorizontal: horizontalScale(8),
    },
    userName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    userStatus: {
      color: lightTheme.facebookColor,
      fontSize: 14,
    },
    iconButton: {
      padding: 5,
    },
  });
  