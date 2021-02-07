import React from 'react'
import Layout from '../components/Layout'
import Books from '../components/Books'
import Contact from '../components/Contact'
import Author from '../components/Author'


const index = () => {
  return (
    <Layout>
      <div>
        <Author />
        <Books />
        <Contact />
      </div>
    </Layout>
  )
}

export default index
