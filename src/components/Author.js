import React from 'react'
import Image from 'gatsby-image'
import { author, authorImg, authorCenter, authorInfo, title } from './author.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`{
  file(relativePath: {eq: "melkingportrait.JPG"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
` 



const Author = () => {

    const authorImage = useStaticQuery(getImage)
    return (
        <section className={author}>
            <div className={authorCenter}>
              <h1 className={title}>about mel</h1>
              <span className={authorImg}>
                <Image fluid={authorImage.file.childImageSharp.fluid} alt='mel king'/>
              </span>
              <article className={authorInfo}>
                <p>
                  The world should be safe for diversity; however, there are a lot of things the world should be but is not. Over time, many variances that caused gaps among many parties have been spanned, but in the corporate world race still caused a disconnection. Author Mel King shares the many gaps he experienced through his novel entitled Uncommon.
                </p>
                <p>
                  Mel King opens his life to the public as he shares his uncommon experiences. Growing up, people would always consider him as someone different. Being a Black American, and exhibiting early leadership ability, often times would provoke unfettered jealousy. In high school, he held an elected office, made the honor roll, lettered in sports and wrote for the school newspaper – all while working a part-time job to contribute to his family’s household. He, undoubtedly, was making the effort to be successful more than many others – color was not a reason for defeat for him. When Mel King entered the Air Force, at his various assignments such as Thailand, Vietnam, and New Jersey, he continued to break grounds for people of color. At every assignment, in some form or fashion, he had been recognized for performance, dedication and leadership ability.
                </p>
                <p>
                  The author has been praised and criticized by many people – those who have witnessed his determination to defy racism in the corporate world in the United States of America. He consistently made efforts to show that reaching success had nothing to do with color. He appreciates his experiences, the good and the bad, as these experiences paved the way to his writing of Uncommon, which documents the challenges that Black Americans have in Corporate America. As readers get to know the author’s many challenges that he faced in his career, they will recognize the importance of just going forward and doing one’s best, independent of the environment.
                </p>
              </article>
            </div>
        </section>
    )
}

export default Author
