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
            <h1>Titulo 1</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Conteúdo 1</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Titulo 2</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Conteúdo 2</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer></Footer>
      <GithubCorner projectUrl="https://github.com/EduardoPazz"></GithubCorner>
    </QuizBackground>
  )
}
