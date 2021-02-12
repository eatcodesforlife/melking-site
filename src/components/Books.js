import React from 'react'
import Image from 'gatsby-image'
import { books, bookImg, bookstore, bookstoreLogo, bookTitle } from './books.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'
import { useStaticQuery, graphql } from 'gatsby'
  // allFile(
  //     filter: {
  //       extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //       relativeDirectory: { eq: "bookstores" }
  //     }
  //   ) {
  //     edges {
  //       node {
  //         uid
  //         base
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   },
  //   file(relativePath: {eq: "bookmockup.png"}){
	// 	childImageSharp{
	// 		fluid{
	// 		...GatsbyImageSharpFluid
  //     }
  //   }
  // }
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
            bookstoreImg {
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

    // const onlineBookstore = {
    //   "amazon": "https://www.amazon.com/Uncommon-Black-Journey-Mel-King/dp/1643670956/ref=sr_1_1?dchild=1&keywords=uncommon+by+mel+king&qid=1612682910&sr=8-1",
    //   "bam": "https://www.booksamillion.com/p/Uncommon/Mel-King/9781643670959?id=8126181266996",
    //   "b&n": "https://www.barnesandnoble.com/w/uncommon-mel-king/1129802360?ean=9781643670959"
    // }


    return (
        <section className={books}>
          <Swiper>
            {
              data.books.edges.map( ({ node }) => {
                const { title, id, bookstoreLinks, subtitle, blurb, bookImage } = node
                return <SwiperSlide key={id}>
                  <div className={bookTitle}>
                      <h1>{title}</h1>
                      <span>{subtitle}</span>
                  </div>
                  <aside className={bookImg}>
                    <Image fluid={bookImage.childImageSharp.fluid} alt={`${title} by Mel King`}/>
                  </aside>
                  <div className="blurb">
                    <p>{blurb}</p>
                  </div>
                  <h3>Buy the book:</h3>
                  <div className={bookstore}>
                    {
                      bookstoreLinks.map(({ url, bookstoreImg, bookstoreName }) => {
                        const { childImageSharp, id } = bookstoreImg

                        return <a href={url} key={id} className={bookstoreLogo}>
                          <Image fluid={childImageSharp.fluid} alt={bookstoreName}/>
                        </a>
                      })
                    }
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
           {/* <article className="books-center">
              <aside className={bookTitle}>
                <h1>uncommon</h1>
                <span>A BLACK MAN'S JOURNEY</span>
              </aside>
              <div className={bookImg}>
                <Image fluid={data.file.childImageSharp.fluid} alt='book'/>
              </div>
              <div className="blurb">
                <p>
                  As the title suggest, Mel King has had many “uncommon” experiences and this book only begins to document the beginning of them. In high school, he held an elected office, made the honor roll, lettered in sports, and wrote for the school newspaper—all while having a part time job and contributing to the family household. He is a Black American and in high school, his friends didn’t use the word, “uncommon,” but often said that he was different. Growing up in center city Los Angeles, he didn’t smoke, drink, or take drugs, yet he was frequently asked to go out with “the gang.”As Mel entered the Air Force, a Vietnam Vet, he continued to break grounds for people of color. At every assignment, in some form or fashion, he had been recognized for performance, dedication and leadership ability.
                </p>
                <h3>Buy the book:</h3>
                <div className={bookstore}>
                  {
                      data.allFile.edges.map((logo) => (
                          <a href={onlineBookstore[logo.node.base.split(".")[0]]} className={bookstoreLogo} key={logo.node.base.split(".")[0]}>
                              <Image 
                                  fluid={logo.node.childImageSharp.fluid} 
                                  alt={logo.node.base.split(".")[0]}
                              />
                          </a>
                      ))
                  }
                </div>
              </div>
            </article> */}
        </section>
    )
}

export default Books
