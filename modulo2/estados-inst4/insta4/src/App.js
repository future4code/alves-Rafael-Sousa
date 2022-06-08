import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/post2'
import Post3 from './components/Post/post3';


const PostContainer =styled.div`
display: flex;
justify-content: space-evenly;
`


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
    <PostContainer>
    <MainContainer>
        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/149'}
        />
      </MainContainer>,

<MainContainer>
<Post2
  nomeUsuario={'Rafael'}
  fotoUsuario={'https://picsum.photos/50/60'}
  fotoPost={'https://picsum.photos/200/150'}
/>
</MainContainer>,

<MainContainer>
<Post3
  nomeUsuario={'Michelle'}
  fotoUsuario={'https://picsum.photos/50/50'}
  fotoPost={'https://picsum.photos/200/148'}
/>
</MainContainer>
</PostContainer>
    );
}
}

export default App;
