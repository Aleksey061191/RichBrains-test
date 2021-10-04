import './App.css';
import React from "react";
import Collapse from '@mui/material/Collapse';





function App(e) {

  const [open, setOpen] = React.useState(true);

  const handleClick = (e) => {
    setOpen(!open);
    if (e.currentTarget){
      e.currentTarget.classList.toggle('navigation__item-last');
    }
    
  };

  const handleClickCard = (e) => {
    if (e.currentTarget) {
      e.currentTarget.classList.toggle('focus');
    }
    
  }

  return (
    <>
      <div className='content'>
      <div className='container'>
        <h1 className='header'>Find Your Course</h1>
        <div className='colums'>
                                        {/* Menu */}
          <div className='menu'>
            <div className='header__wrapper'>
              <div className='menu__header'>
                <img src='../img/Logo.svg' alt='logo'/>
                <h2 className='menu__title'>Careers</h2>
                <div className='menu__adaptive'>
                  <p>Choose YOUR Career</p>
                  <img src='../img/Vector.svg' alt='svg'/>
                </div>
              </div>
              <div className='menu__list'>
              <div className='menu__line'></div>
              <nuv className='navigation'>
                <ul className='navigation__ul'>
                  <li className='navigation__item'><p>Business & Management</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item'><p>Computing & IT</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item'><p>Fashion & Media</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item'><p>Finance & Accounting</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item'><p>Law & Criminology</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item'><p>Marketing & Communications</p><img src='../img/Vector.svg' alt='svg'/></li>
                  <li className='navigation__item navigation__item-last' onClick={handleClick}><p>Psychology & Social Sciences</p>{open ? <img src='../img/Vector1.svg' alt='svg'/> : <img src='../img/Vector.svg' alt='svg'/>}</li>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                  <ul className='subnav__ul'>
                    <li className='subnav__item'><button className='subnav__button'><p> Market Research Executive </p></button></li>
                    <li className='subnav__item'><button className='subnav__button'><p>Child Psychologist</p></button></li>
                    <li className='subnav__item'><button className='subnav__button'><p>Guidance Counsellor</p></button></li>
                    <li className='subnav__item'><button className='subnav__button'><p>Behaviour Analyst</p></button></li>
                    <li className='subnav__item'><button className='subnav__button'><p>Recreational Therapist</p></button></li>
                  </ul>
                  </Collapse>
                </ul>
              </nuv>
              <div className='menu__line'></div>
              <button className='show__all'><p>Show all programmes</p></button>
              </div>
            </div>
          </div>


          <div className='colum__contecst'>
          <div className='cards'>
                                                    {/* Card 1 */}
            <div className='card card1' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add' ><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Group.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>Every 12 weeks</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                                {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add'><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
                                                {/* Card 2 */}
            <div className='card card2' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add'><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Buf.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>Every 12 weeks</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                   {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add'><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
                                                          {/* Card 3 */}
            <div className='card card3' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add'><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Dan.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>Every 12 weeks</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                             {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add'><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
                                                                  {/* Card 4 */}
            <div className='card focus card4' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add'><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Buf.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>Every 12 weeks</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                               {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add'><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
                                                          {/* Card 5 */}
            <div className='card card5' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add'><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Buf.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>Every 12 weeks</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                                   {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add'><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
                                                                {/* Card 6 */}
            <div className='card card6' onClick={handleClickCard}>
              <div className='card__rectangle'></div>
              <div className='card__emblem'>
                  <button className='card__add'><img src='../img/button-media.svg' alt='svg'/></button>
                  <div className='card__emblem-img'>
                    <img src='../img/Bar.svg' alt='logo'/>
                  </div>
              </div>
              <h3 className='card__subheader'>Business & Management</h3>
              <div className='card__info'>
                <h2 className='card__info-header'>Master of Business Administration (CMI)</h2>
                <div className='card__info-list'>
                  <div className='card__info-list-item first'>
                    <div className='card__info-list-item-img'>
                      <img src='../img/vector3.svg' alt='svg'/>
                    </div>
                    <p>Postgraduate</p>
                  </div>
                  <div className='card__info-list-item'>
                    <div className='card__info-list-item-img second'>
                      <img src='../img/vector2.svg' alt='svg'/>
                    </div>
                    <p>January, April, July, October, November</p>
                  </div>
                </div>
                <div className='card__info-list-media'>
                  <p>Postgraduate</p>
                  <h2 className='card__info-header'>£12,650</h2>
                </div>
              </div>
              <button className='card__button'>More Info</button>
                                   {/* card hover */}
              <div className='hover'>
              <div className='card-hover'>
                <button className='card-hover__add' ><img src='../img/button.svg' alt='svg'/></button>
                <h3 className='card-hover__header'>MSc Data Analytics and Information Systems Management</h3>
                <div className='card-hover__info'>
                  <h4 className='card__info-header'>Duration:</h4>
                  <p>Minimum: 18 months</p>
                  <p>Maximum: 36 months</p>
                  <h4 className='card__info-header second-hover'>Start Dates:</h4>
                  <p>January, April, July, October</p>
                  <h2 className='sum'>£8,500</h2>
                </div>
                <button className='card__button card__button-hover'>More Info</button>
              </div>
              </div>
            </div>
          </div>
          <div className='more-programs'>
            <p>More programmes</p>
            <button className='more'><img src='../img/more.svg' alt='svg'/></button>
          </div>
          </div>
          
        </div>
      </div>
      </div>
    </>

  );
}

export default App;
