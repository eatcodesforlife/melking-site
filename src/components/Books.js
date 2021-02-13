import React from 'react'
import Image from 'gatsby-image'
import { booksSection, bookImg, bookstore, logo, bookTitle, bookBlurb } from './books.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import { useStaticQuery, graphql } from 'gatsby'
  
SwiperCore.use([ Navigation, Pagination, Autoplay ])
const queryData = graphql`{
  books: allBooksDataJson {
    edges {
      node {
        title
        subtitle
        blurb
        bookImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
        bookstoreLinks {
          bookstoreName
          url
          bookstoreLogo {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

const Books = () => {

    const data = useStaticQuery(queryData)  
    
    

    return (
      <section className={booksSection}>
        <Swiper 
          grabCursor={true}
          navigation 
          pagination 
          loop 
          spaceBetween={100}
          autoplay={{
            delay:5000
          }}
        >
          {
            data.books.edges.map( ({ node }) => {

              const { title, id, bookstoreLinks, subtitle, blurb, bookImage } = node

              return <SwiperSlide key={id} >
                <div className={bookTitle}>
                    <h1>{title}</h1>
                    <span>{subtitle}</span>
                </div>
                <aside className={bookImg}>
                  <Image fluid={bookImage.childImageSharp.fluid} alt={`${title} by Mel King`}/>
                </aside>
                <div className={bookBlurb}>
                  <p>{blurb}</p>
                </div>
                <h3>Buy the book:</h3>
                <div className={bookstore}>
                  {
                    bookstoreLinks.map(({ url, bookstoreLogo, bookstoreName }) => {
                      
                      const { childImageSharp, id } = bookstoreLogo

                      return <a href={url} key={id} className={logo}>
                        <Image fluid={childImageSharp.fluid} alt={bookstoreName}/>
                      </a>
                    })
                  }
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>
      </section>
    )
}

export default Books
