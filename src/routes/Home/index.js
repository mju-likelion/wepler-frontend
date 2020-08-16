import React from "react";

class index extends React.Component{

render() {
    return (       
        

    <body>
    <div id="page">

        <header>
            <div id="logo">
                <h1>WEPLER</h1>
            </div>

            <div id="introduction">
                <p>abcd</p>
            </div>

            <div id="button">
                <button type="button" onclick="location.href='#'">참여하기</button>
                <button type="button" onclick="location.href='#'">더보기</button>
            </div>

            <section id="E">
              <div id="employment">
                  <h2>고용하기</h2>
              </div>

              <div id="employment_li">
                  <a href="#">고용하기</a>
              </div>

              <div id="employment_in">
                  <p>abcd</p>
              </div>
            </section>  

            <section id="R">
              <div id="review">
                  <h2>활동후기</h2>
              </div>            
              
              <div id="review_li">
                  <a href="#">더보기</a>
              </div>

              <div id="review_pic">
                  <img src="#" alt="review_pic"/>
              </div>
            </section>
        </header>

        <footer>
            <img src="./src/main.png" alt="main img"></img>
        </footer>


    </div>   
</body>

      );
    };
}
export default index;
