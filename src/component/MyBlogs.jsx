import './css/ownBlogs.css'

const MyBlogs = () => {
  const blogs = [
      {title:'title 1', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlemcontent klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
      {title:'title 2', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
      {title:'title 3', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
      {title:'title 4', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
      {title:'title 5', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
      {title:'title 5', content:'content klnshvhlaekf;wmcnkhv cemc dhkc  bkcnlem'},
  ]


  return (
    <div className={'all-blogs'}>
      <h1>YOUR ALL BLOGS</h1>
      {blogs.map((blog, i) => (
          <div key={i} className={'blog-item'}>
            <span>{blog.title}</span>
            <hr/>
            <div>{blog.content}</div>
          </div>
      ))}
    </div>
  )
}

export default MyBlogs