import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export const HomeWrap = styled.div`
  display:flex;
  height:100%
`
export const SiderWrap = styled(Sider)`
    .list-a{
        margin-top: -40px;
        margin-left: 30px;
    }
`;
export const ContentWrap = styled(Content)`
    /* background: rgb(255, 255, 255); */
`;
export const FooterWrap = styled(Footer)`
`;
export const HeaderWrap = styled(Header)`
    background: rgb(255, 255, 255);
    display:flex;
    align-items:center;
    justify-content : flex-end;
`;
export const Logo = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;

export const InputVal = styled.div`
    width:350px;
    height:150px;
`
