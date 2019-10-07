import React from 'react'
import styled from 'styled-components'
import { shape, string } from 'prop-types'

const MenuProfile = ({ name, imgUrl }) => {
  return (
    <S.Profile>
      <S.Content>
        <S.Name>{name}</S.Name>
      </S.Content>
      <S.Image src={imgUrl} />
    </S.Profile>
  )
}

MenuProfile.propTypes = {
  name: string,
  imgUrl: string
}


export default MenuProfile

const S = {
  Profile: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
  `,
  Image: styled.img`
    width: 40px;
    border-radius: 50%;
  `,
  Content: styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    color: white;
    margin-right: 16px;
  `,
  Name: styled.div`
    margin: 0;
    line-height: 16px;
  `,
  Email: styled.div`
    margin: 0;
    line-height: 16px;
  `,
}