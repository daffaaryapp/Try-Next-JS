import React from 'react';
import styles from './postPage.module.css';
import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';
const base_url = 'https://jsonplaceholder.typicode.com/posts'


//untuk validasi
interface Iposts {
  userId: number,
  id:number,
  title: string,
  body: string
}

const Posts = async() => {
  
  const response = await fetch(base_url, {
    cache: 'no-store'
  })
  const posts:Iposts[] = await response.json()


  return (
    <>
      <h1 className='bg-fuchsia-300'>
        Postingan Pages
      </h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {posts.map((post)=>{
        return (
          <CardList key={post.id}>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <ViewUserButton userId={post.userId}/>
      </CardList>
        )
      })}
      
    </>
  )
}

export default Posts
