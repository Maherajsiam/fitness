//firebase connect to react

import React, {useState} from 'react'

import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import { getFirestore } from 'firebase/firestore'


const firebaseDb = () => {

  const db = getFirestore()
  console.log(db)
  const ref = query(collection(db, 'school'))
  console.log(ref)

  return (
    <div>firebaseDb</div>
  )
}

export default firebaseDb