import './HomeFind.scss';

export const HomeFind = () => {
  return (
    <div className='home-find'>
        <div className="title">Find the best
        coffee for you</div>
        <form className="form">
            <a className="form__btn"><span className="icon-search"></span></a>
            <input type="search" placeholder="Find Your Coffee..." className="form__input"/>
        </form>
    </div>
  )
}
