import React from "react"
import styled from 'styled-components'


const Ul = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
  width: 100%;
`

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;

`

const Div = styled.div`
  width: 80%;
`

const Label = styled.span`
  width: 12rem;
  min-width: 12rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 12rem;
  overflow: hidden;
  margin-right: 1rem;
`
const Progress = styled.div`
  display: flex;
  height: .25rem;
  overflow: hidden;
  background-color: #edeaea;
  border-radius: .25rem;
  width: 100%;
  margin-bottom: .25rem;

  .inner {
    background-color: #0af!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width .6s ease;
  }
`

const Revealing = (props) => {
  const revealing = props.revealing.payload
  return (
    <div className="card jobDetails" style={{marginTop: '1rem'}}>
      <h3 style={{marginBottom: '1rem'}}>Thématiques</h3>
      <Ul>
        {
          revealing.map((item, index) => (
            <Li key={`revealin-${index}`}>
                <Div>
                  <Progress>
                    <div
                      className="inner"
                      style={{ width: `${Math.round(item[1]*100)}%`}}
                    > 
                    </div>
                  </Progress>
                  <Label>{item[0]}</Label>
                </Div>
                <span>{Math.round(item[1]*100)}%</span>
            </Li>
            )
          )
        }
      </Ul>
  </div>
  )
}

export default Revealing;