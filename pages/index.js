import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>VOA SÍNTESEEEE</h1>
          </Widget.Header>
          <Widget.Content>
            <img src="https://i.imgur.com/MVOaIa2.png" width="100" height="100"></img>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer></Footer>
      <GithubCorner projectUrl="https://github.com/EduardoPazz/javaquiz"></GithubCorner>
    </QuizBackground>
  )
}
