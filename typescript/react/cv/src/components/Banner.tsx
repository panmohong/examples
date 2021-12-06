import React, { useState } from 'react';
import * as S from './Banner.styles';

const initialState = {
  name: 'Mike Pan',
  email: 'mohong.pan@gmail.com',
  location: 'Shanghai, China',
  github: 'https://github.com/panmohong',
  linkedin: 'https://www.linkedin.com/in/mohong-pan',
};

const Banner = () => {
  const [state] = useState(() => initialState);

  return (
    <S.Banner>
      <S.Layout>{state.name}</S.Layout>
      <S.Layout>
        <S.Row>
          <a href={`mailto:${state.email}`} target={'_blank'}>
            {state.email}
          </a>
          <S.Icon />
        </S.Row>
        <S.Row>
          <a href={state.linkedin} target={'_blank'}>
            {state.linkedin.split('/').pop()}
          </a>
          <S.Icon />
        </S.Row>
        <S.Row>
          <a href={state.github} target={'_blank'}>
            {state.github.split('/').pop()}
          </a>
          <S.Icon />
        </S.Row>
        <S.Row>
          <div>{state.location}</div>
          <S.Icon />
        </S.Row>
      </S.Layout>
    </S.Banner>
  );
};

export default Banner;
