"use client";
import {useEffect,useState} from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
export default function Home(){const [tasks,setTasks]=useState<any[]>([]);useEffect(()=>{const d=localStorage.getItem('tasks');if(d)setTasks(JSON.parse(d));},[]);useEffect(()=>{localStorage.setItem('tasks',JSON.stringify(tasks));},[tasks]);return <main style={{padding:20}}><h1>Task Manager</h1><TaskForm addTask={(t:any)=>setTasks([...tasks,t])}/><TaskList tasks={tasks} setTasks={setTasks}/></main>}