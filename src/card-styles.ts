import {css} from 'lit';
export  const cardStyles = css`
.wrapper{
    font-family: 'Manrope', sans-serif;
    /* width: 100%; */
    border: 2px solid #E8E9ED;
    border-radius: 16px;
    padding: 20px;
    transition: all ease 0.5s;
    position:relative;
}
.arrow-up-svg{
    /* visibility: hidden; */
    /* display:none; */
    opacity:0;
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 5px;
    transition: all ease 0.5s;
}
.display-show{
    display:block;
}
.display-none{
    display: none;
}
.wrapper:hover{
    border: 2px solid #4378FE;
    cursor: pointer;
}
.wrapper:hover .arrow-up-svg{
    display:block;
    opacity:1;
}
.features-wrapper{
    display: flex;
    justify-content: space-between;
}
.features{
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}
.rating-star{
    font-size: 20px;
}
.features > div {
    background-color: #F2F3F3;
    border-radius: 40px;
    padding: 4px;
    /* align-items: center; */
    /* align-content:center; */
    align-self: center;
}
.card-article{
font-family: 'Manrope', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 44px;
/* color: #070C19;
flex: none;
order: 0;
flex-grow: 1; */
margin: 20px 0;
}
.lesson-property{
font-family: 'Manrope', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.5px;
color: #9C9EA3;
margin-top: 10px;
}
.property-value{
font-family: 'Manrope', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.5px;
color: #070C19;
}
.card-footer{
    display: flex;
    align-items: end;
    justify-content: space-between;
}
.svg-container{
display: flex;
gap: 10px;
}
`