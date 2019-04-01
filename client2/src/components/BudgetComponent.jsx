import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';

export default (props) => {
  const { weekly_budget, restaurants, groceries, drinks, entertainment, shopping, bills } = props.user
  const totalSpent = (restaurants + groceries + drinks + entertainment + shopping + bills).toFixed(2)
  const remaining = (weekly_budget - totalSpent).toFixed(2)
  const categories = Object.keys(props.user).filter(ele => props.user[ele] === true)
  let pigHeight = remaining / weekly_budget * 100
  let pigColor = (function(val) {
    switch(val) {
      case true:
        return '#5cdb95';
      case false:
        return '#ffdd3a';
      default:
        return '#5cdb95';
    }
  })((pigHeight>=40));
  let pigColorReverse = '#f4fbea';
  remaining <= 0 ? pigColorReverse = '#f1655a' : pigColorReverse = pigColorReverse ;
  return (
    <div>
      <Header handleLogout={props.handleLogout} />
      <div className="categoriesContainer">
          <div className="log-header">Weekly Budget</div>
          <div style={{height:'15em', backgroundColor: pigColor, overflow: 'hidden'}}>
            <div className="pig-background" style={{height: `${100 - pigHeight}%`, backgroundColor: pigColorReverse}}>
              <div className="pig" style={{backgroundImage: "url(/media/main_pig.png)"}}/>
            </div>
          </div>
          <div>
          { remaining >= 0 ? (
            <div className="budg-nums">${ remaining }</div>
          ):
          (
            <div className="budg-nums">-${ (remaining * -1).toFixed(2) }</div>
          )}
          <div className="budg-nums">remaining</div>
          { remaining < 0 && <div className="budg-nums"> You exceeded your budget</div>}
          </div>

          <div className="budg-nav">
          <div className="plus-links">
          <Link className="plus" to="/logexpense">+</Link>
          <Link className="update-link" to="/logexpense">Add Expenses</Link>
          </div>

          <div className="star-links">
          <Link className="star" to="/setbudget">*</Link>
          <Link className="rearrange" to="/setbudget">Update Budget</Link>
          </div>
          </div>

          <div className="budg-container">
          {categories.map(ele => {
            const category = ele.split('_')[0]
            const spent = props.user[category]
            const total = (props.user.weekly_budget / categories.length).toFixed(2)
            const catRemaining = (total - spent).toFixed(2)
            const width = (catRemaining / total) * 100

            let backgroundColor = (function(val) {
              switch(val) {
                case true:
                  return '#5cdb95';
                case false:
                  return '#ffdd3a';
                default:
                  return '#5cdb95';
              }
            })((width>=40));

            width < 0 ? backgroundColor = '#f1655a' : backgroundColor = backgroundColor ;
            const barStyle = {
              width: width + '%',
              backgroundColor,
              }

            return (
             <div className="budg-block">

              <div
              className="log-img"
               style={{backgroundImage: "url(/media/"+ category + ".png)"}} />

               <div className="budg-input">
               {catRemaining >= 0 && <div className="log-label">${ catRemaining } of ${ total } remaining</div>}
               {catRemaining < 0 && <div className="log-label">-${ catRemaining * -1} of ${ total } remaining. You exceeded your budget. </div>}
               <div className="outer-bar">
                 <div className="inner-bar"
                   style={barStyle}>
                 </div>
               </div>
               <div className="log-label">{category.toUpperCase()}</div>
              </div>
             </div>


          )})}
        </div>

      </div>
    </div>
)}
