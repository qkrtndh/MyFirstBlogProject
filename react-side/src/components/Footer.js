import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성함. 재사용이 가능하다.
//styled-component는 js와 css가 하나의 파일로 묶여서 관리가 편하다.
const FooterList = styled.div`
  border: 1px solid black;
  height: 150px;
  background-color: gray;
`;

const LiList = styled.li`
  margin-top: 5px;
  font-size: 20px;
  list-style-type: none;
`;

const Footer = () => {
  return (
    <FooterList>
      <center>
        <ul>
          <LiList>🏢오시는길: 경기도 LA시 로마동 B-17길 77번지</LiList>
          <LiList>📱전화번호: 010-0000-0101</LiList>
          <LiList>📧E-mail: email@some.where</LiList>
          <a href="https://github.com/qkrtndh" target="_blank" rel="noreferrer">
            <LiList>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="25px"
                alt="github"
              />
              Git-Hub
            </LiList>
          </a>
        </ul>
      </center>
    </FooterList>
  );
};

export default Footer;
