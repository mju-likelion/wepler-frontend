import React from "react";
import styled from "styled-components";
import Footer from "components/Footer/Footer.js";


const Container = styled.div`
    padding: 50px 0px;
    font-size:20px;
`;

const Head = styled.div`
    font-size:35px;
    padding: 30px 0px;
    text-align: center;
`;

const Body = styled.div`
    font-size:23px;
    padding: 30px 100px;
    line-height: 1.5;   
`;



const Terms = () => (
    <>
        <Container>
            <Head>
                <h2>회원 정책</h2>  
            </Head>
            <Body>
                <h3>제1조(목적)<br />
                이 약관은 위플러가 운영하는 홈페이지에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 위플러와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.<br />
                ※ 「PC통신 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」<br />


                제2조(정의)<br />
                ① "홈페이지" 이란 사업자가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 홈페이지를 운영하는 사업자의 의미로도 사용합니다.<br />

                ② "이용자"란 "홈페이지"에 접속하여 이 약관에 따라 "홈페이지"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.<br />

                ③ "회원"이라 함은 "홈페이지"에 개인정보를 제공하여 회원등록을 한 자로서, "홈페이지"의 정보를 지속적으로 제공받으며, "홈페이지"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.<br />

                ④ "비회원"이라 함은 회원에 가입하지 않고 "홈페이지"이 제공하는 서비스를 이용하는 자를 말합니다.<br />


                제6조(회원가입)<br />
                ① 이용자는 "홈페이지"가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.<br />

                ② "홈페이지"는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.<br />
                1. 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 "홈페이지"의 회원재가입 승낙을 얻은 경우에는 예외로 한다.<br />
                2. 등록 내용에 허위, 기재누락, 오기가 있는 경우<br />
                3. 기타 회원으로 등록하는 것이 "홈페이지"의 기술상 현저히 지장이 있다고 판단되는 경우<br />

                ③ 회원가입계약의 성립 시기는 "홈페이지"의 승낙이 회원에게 도달한 시점으로 합니다.<br />

                ④ 회원은 제15조 제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편 기타 방법으로 "홈페이지"에 대하여 그 변경사항을 알려야 합니다.<br />


                제7조(회원 탈퇴 및 자격 상실 등)<br />
                ① 회원은 "홈페이지"에 언제든지 탈퇴를 요청할 수 있으며 "홈페이지"은 즉시 회원탈퇴를 처리합니다.<br />

                ② 회원이 다음 각 호의 사유에 해당하는 경우, "홈페이지"은 회원자격을 제한 및 정지시킬 수 있습니다.<br />
                1. 가입 신청 시에 허위 내용을 등록한 경우<br />
                2. "홈페이지"을 이용하여 구입한 재화·용역 등의 대금, 기타 "홈페이지" 이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우<br />
                3. 다른 사람의 "홈페이지" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우<br />
                4. "홈페이지을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우<br />

                ③ "쇼핑몰"이 회원 자격을 제한·정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 "쇼핑몰"은 회원자격을 상실시킬 수 있습니다.<br />

                ④ "홈페이지"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 소명할 기회를 부여합니다.<br />
                </h3>       
            </Body>
        </Container>
        <Footer />
        
    </>
)

export default Terms;
