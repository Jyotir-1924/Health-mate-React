import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function createposts() {

  const [title, setTitle] = useState('')
  const [category, setCartegory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbImage, setThumbImage] = useState('')

  const postcategories = [
    'Happiness','Motivation','Peace','Ideas','Thoughts','Positive'
  ];

  const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6,false]}],
      ['bold','italic','underline','strike'],
      [{'list' : 'ordered'},{'list' : 'bullet'},{'indent':'+1'},{'indent':'-1'}],
      ['link','image'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold','italic','underline','strike',
    'list','bullet','indent',
    'link','image'
  ]

  return (
    <section className="createPosts">
      <div className="container form-container createPost-container">
      <h2>Create Post</h2>
          <form action="" className="form createPost-form">
              <p className="form-message">Invalid message !</p>
              <input type="text" name="title" placeholder="Title" value={title} onChange={tag => setTitle(tag.target.value) } autoFocus />
              <select name="category" value={category} id="" onChange={tag => setCartegory(tag.target.value) }>
                {
                  postcategories.map(cat => <option key={cat}>{cat}</option>)
                }
              </select>
              <ReactQuill modules={modules} formats={formats} value={description} onChange={tag => setDescription(tag.target.value)}></ReactQuill>
              <input type="file" value={thumbImage} onChange={tag => setThumbImage(tag.target.value)} accept='png, jpg, jpeg' />
              <button type='submit' className='btn btn-primary'>Create</button>
          </form>
    </div>
    </section>
  )
}
