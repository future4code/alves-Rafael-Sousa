import React from "react"
import {useState, useEffect} from "react"
import Axios from "axios"

const [arrayLike, setArrayLike]= useState([])
const [LikeId, setLikeId]= useState("")

useEffect(()=>{
    setArrayLike()
})