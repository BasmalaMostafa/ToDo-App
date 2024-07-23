

import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import CheckBox from 'react-native-check-box';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [error, setValidation] = useState('');

    const addTask = () => {
        if(newTask.length===0){
            setValidation('Empty Task!');
        }else if(newTask.length<4){
            setValidation('min characters must be more than 3 chars!')
        }else{
            setTasks([...tasks, { name: newTask, completed: false,deleted:false }]);
            setNewTask('');
            setValidation('');
        }
    };

    const completeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const renderTaskItem = ({ item, index }) => (
        <View style={styles.taskContainer}>
            <Text style={[styles.checkTxt, item.completed && styles.completedText]}>{item.name}</Text>
            <View style={styles.checkView}>
            <CheckBox
            style={styles.Check}
                isChecked={item.completed}
                onClick={()=>completeTask(index)}
                checkBoxColor='red'
            />
            <Text 
            style={styles.checkTxt}>
                Done
            </Text>
            </View>
            <View style={styles.checkView}>
            <CheckBox
            style={styles.Check}
            isChecked={item.deleted}
                onClick={()=>deleteTask(index)}
                checkBoxColor='red'
            />
            <Text style={styles.checkTxt}>Delete</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My ToDo List</Text>
            <View style={styles.AddingTaskContainer}>
            <TextInput 
                style={styles.input} 
                value={newTask}
                onChangeText={setNewTask}
            />

            <TouchableOpacity activeOpacity={0.7} onPress={addTask}>
                <Text style={styles.btn}>Add</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.txt}>{tasks.filter(task => task.completed).length} done of {tasks.length} tasks</Text>
        <FlatList
                data={tasks}
                renderItem={renderTaskItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
    },
    header:{
        color:'white',
        textAlign:'center',
        backgroundColor:'red',
        fontSize:22,
        paddingVertical:18,
        marginBottom: 20,
    },
    input: {
        borderColor: 'red',
        borderBottomWidth: 1, 
        borderTopWidth: 0, 
        borderLeftWidth: 0, 
        borderRightWidth: 0,
        color: 'white',
        padding: 5,
        marginRight:10,
        flex:1
    },
    btn:{
        backgroundColor:'red',
        borderRadius:10,
        padding:10,
        fontSize:18,
        paddingHorizontal:15
    },
    AddingTaskContainer:{
        flexDirection:'row',
        marginHorizontal:10
    },
    txt:{
        fontSize:18,
        textAlign:'center',
        marginTop:'20%',
        color:'white'
    },
    checkTxt:{
        fontSize:16,
    },
    checkView:{
        flexDirection:'row'
    },
    taskContainer:{
        marginTop:10,
        backgroundColor:'white',
        padding:20,
        borderRadius:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    error:{
        color:'white',
        marginLeft:10
    }
});

export default ToDo;
