// main view screen. should arrive here if already logged in
import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const { weekly_budget, restaurants, groceries, drinks, entertainment, shopping, bills } = props.user
  const totalSpent = (restaurants + groceries + drinks + entertainment + shopping + bills).toFixed(2)
  const remaining = (weekly_budget - totalSpent).toFixed(2)
  const categories = Object.keys(props.user).filter(ele => props.user[ele] === true)
  return (
    <div>
      <header>
        <Link to="/logexpense">+</Link>
        <p>Weekly Budget</p>
        <Link to="/setbudget">Rearrange Budget?</Link>
      </header>
      <div>pig here</div>
      <div>
        { remaining >= 0 ? (
          <p>${ remaining }</p>
        ):
        (
          <p>-${ (remaining * -1).toFixed(2) }</p>
        )}
        <p>remaining</p>
        { remaining < 0 && <p> you exceeded your budget</p>}
      </div>
      <div>
        {categories.map(ele => {
          const category = ele.split('_')[0]
          const spent = props.user[category]
          const total = (props.user.weekly_budget / categories.length).toFixed(2)
          const catRemaining = total - spent
          const width = (catRemaining / total) * 100
          // const backgroundColor = (width) => {
          //   let text = '#5cdb95'
          //   let val = width >= 40
          //   switch(val) {
          //     case true:
          //       text = '#5cdb95'
          //       console.log(text)
          //       break;
          //     case false:
          //       text = '#ffdd3a'
          //       break;
          //     default:
          //     text='#5cdb95'
          //   }
          //   return text
          // }
          const backgroundColor = (function(val) {
  switch(val) {
    case true:
      return '#5cdb95';
    case false:
      return '#ffdd3a';
    default:
      return '#5cdb95'
  }
})((width>=40));
          const barStyle = {
            width: width + '%',
            backgroundColor,
          }
          return (
            <div>
              {catRemaining >= 0 && <p>${ catRemaining } of ${ total } remaining</p>}
              {catRemaining < 0 && <p>-${ catRemaining * -1} of ${ total } remaining. You exceeded your budget. </p>}
              <div className="outer-bar">
                <div className="inner-bar"
                  style={barStyle}>
                </div>
              </div>
              <p>{category.toUpperCase()}</p>
            </div>
        )})}
      </div>
    </div>
)}
