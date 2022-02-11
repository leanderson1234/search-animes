import {Wrapper,Link,Content,Title,ContentBlock2,Rating} from './style.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardSearch = ({animes}) =>{
  
  const YOUTUBE = 'https://www.youtube.com/watch?v='
  return(
    <Wrapper>
    {animes.data && animes.data.length > 0 ? animes.data.map((data)=>{
      return (
        <Link href={`${YOUTUBE}${data.attributes.youtubeVideoId}`} key={data.id} target="_blank">
          <Content >
            <div>
              <img src={data.attributes.posterImage.tiny}/>
              <Title>{data.attributes.canonicalTitle}</Title>
              <ContentBlock2>
                <Rating>
                  <span>{`${Math.trunc(Number(data.attributes.averageRating))}`}
                  <FontAwesomeIcon icon={faStar} /></span>
                </Rating>
              </ContentBlock2>
            </div>
          </Content>
        </Link>
      )
    }):''}
  </Wrapper>
  )
}

export default CardSearch