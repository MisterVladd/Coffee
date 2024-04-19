import { useState } from 'react';
import './HomeTabs.scss';
import { coffeeData, RobustaData } from './HomeTabs.json';
import { Link } from 'react-router-dom';




export const HomeTabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  const selectTab = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
  <div className='home-tabs'>
    <ul className="tabs">
      <li className={selectedTab === 'tab1' ? 'active' : ''} onClick={() => selectTab('tab1')}>All<span></span></li>
      <li className={selectedTab === 'tab2' ? 'active' : ''} onClick={() => selectTab('tab2')}>Cappuccino<span></span></li>
      <li className={selectedTab === 'tab3' ? 'active' : ''} onClick={() => selectTab('tab3')}>Espresso<span></span></li>
      <li className={selectedTab === 'tab4' ? 'active' : ''} onClick={() => selectTab('tab4')}>Americano<span></span></li>
      <li className={selectedTab === 'tab5' ? 'active' : ''} onClick={() => selectTab('tab5')}>Macchiato<span></span></li>
    </ul>

    <div className="tab-content">
      {selectedTab === 'tab1' && <div>
      <div className="list">
        {coffeeData.map((item) => (
          <Link to={`/product/${item.id}`} className="item" key={item.id}>
            <div>
            <div className="img">
              <img src={item.image} alt="Cappuccino" />
              <div className="star"><span className="icon-star"></span> {item.star}</div>
            </div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
            </div>
            <div className="price-cart">
              <div className="price">
                <span className="dollar">&#36;</span>
                <div className="cost">{item.cost}</div>
              </div>
              <div className="plus"><span className="icon-plus"></span></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="title-coffee">Coffee beans</div>
      <div className="list">
        {RobustaData.map((item) => (
          <Link to={`/robusta/${item.id}`} className="item" key={item.id}>
           <div>
           <div className="img"><img src={item.image} alt="Cappuccino" /></div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
           </div>
            <div className="price-cart">
              <div className="price">
                <span className="dollar">&#36;</span>
                <div className="cost">{item.cost}</div>
              </div>
              <div className="plus"><span className="icon-plus"></span></div>
            </div>
          </Link>
        ))}
      </div>

        </div>}
      {selectedTab === 'tab2' && <div>
      <div className="list">
        {coffeeData.map((item) => (
          <Link to={`/product/${item.id}`} className="item" key={item.id}>
            <div>
            <div className="img">
              <img src={item.image} alt="Cappuccino" />
              <div className="star"><span className="icon-star"></span> {item.star}</div>
            </div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
            </div>
            <div className="price-cart">
              <div className="price">
                <span className="dollar">&#36;</span>
                <div className="cost">{item.cost}</div>
              </div>
              <div className="plus"><span className="icon-plus"></span></div>
            </div>
          </Link>
        ))}
      </div>
        </div>}

        {selectedTab === 'tab3' && <div>
        <div className="title-coffee">Coffee beans</div>
        <div className="list">
        {RobustaData.map((item) => (
          <Link to={`/robusta/${item.id}`} className="item" key={item.id}>
           <div>
           <div className="img"><img src={item.image} alt="Cappuccino" /></div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
           </div>
            <div className="price-cart">
              <div className="price">
                <span className="dollar">&#36;</span>
                <div className="cost">{item.cost}</div>
              </div>
              <div className="plus"><span className="icon-plus"></span></div>
            </div>
          </Link>
        ))}
      </div>
          </div>}
        {selectedTab === 'tab4' && <div>Content for Tab 4</div>}
        {selectedTab === 'tab5' && <div>Content for Tab 5</div>}
    </div>
  </div>
//     <div className='home-tabs'>
//       <div>
//   <ul className="tabs">
//     <li className={selectedTab === 'tab1' ? 'active' : ''} onClick={() => selectTab('tab1')}">All<span></span></li>
//     <li className={selectedTab === 'tab2' ? 'active' : ''} onClick={() => selectTab('tab2')}">Cappuccino<span></span></li>
//     <li className={selectedTab === 'tab3' ? 'active' : ''} onClick={() => selectTab('tab3')}">Espresso<span></span></li>
//     <li className={selectedTab === 'tab4' ? 'active' : ''} onClick={() => selectTab('tab4')}">Americano<span></span></li>
//     <li className={selectedTab === 'tab5' ? 'active' : ''} onClick={() => selectTab('tab5')}">Macchiato<span></span></li>
//   </ul>

//   <div className="tab-content">
//     {selectedTab === 'tab1' && <div>
//       <div className="list">
//         {/* <a [routerLink]="'/product/' + item.id" className="item" *ngFor="let item of coffeeData"> */}
//           <div className="img">
//             <img src="src/assets/cappuccino/cappuccino-1.jpg" alt="Cappuccino">
//             <div className="star"> <span className="icon-star"></span> {{item.star}}</div>
//           </div>
//           {/* <div className="title">{{item.title}}</div> */}
//           <div className="desc">{{item.desc}}</div>
//           <div className="price-cart">
//             <div className="price">
//               <span className="dollar">&#36;</span>
//               <div className="cost">{{item.cost}}</div>
//             </div>
//             <div className="plus"><span className="icon-plus"></span></div>
//           </div>
//         </a>
//       </div>  
//       <div className="title-coffee">Coffee beans</div>
//       <div className="list">
//         <a [routerLink]="'/robusta/' + item.id" className="item" *ngFor="let item of RobustaData">
//           <div className="img"><img src="src/assets/robusta/robusta-1.jpg" alt="Cappuccino"></div>
//           <div className="title">{{item.title}}</div>
//           <div className="desc">{{item.desc}}</div>
//           <div className="price-cart">
//             <div className="price">
//               <span className="dollar">&#36;</span>
//               <div className="cost">{{item.cost}}</div>
//             </div>
//             <div className="plus"><span className="icon-plus"></span></div>
//           </div>
//         </a>
//       </div>  
//     </div>}
//     {selectedTab === 'tab2' && <div>
//       <div className="list">
//         <a [routerLink]="'/product/' + item.id" className="item" *ngFor="let item of coffeeData">
//           <div className="img">
//             <img src="src/assets/cappuccino/cappuccino-1.jpg" alt="Cappuccino">
//             <div className="star"> <span className="icon-star"></span> {{item.star}}</div>
//           </div>
//           <div className="title">{{item.title}}</div>
//           <div className="desc">{{item.desc}}</div>
//           <div className="price-cart">
//             <div className="price">
//               <span className="dollar">&#36;</span>
//               <div className="cost">{{item.cost}}</div>
//             </div>
//             <div className="plus"><span className="icon-plus"></span></div>
//           </div>
//         </a>
//       </div>  
//     </div>}
//     {selectedTab === 'tab3' && <div><div className="list">
//       <div className="list">
//         <a [routerLink]="'/robusta/' + item.id" className="item" *ngFor="let item of RobustaData">
//           <div className="img"><img src="src/assets/robusta/robusta-1.jpg" alt="Cappuccino"></div>
//           <div className="title">{{item.title}}</div>
//           <div className="desc">{{item.desc}}</div>
//           <div className="price-cart">
//             <div className="price">
//               <span className="dollar">&#36;</span>
//               <div className="cost">{{item.cost}}</div>
//             </div>
//             <div className="plus"><span className="icon-plus"></span></div>
//           </div>
//         </a>
//       </div>  
//     </div>  </div>}
//     {selectedTab === 'tab4' && <div>
//      <div className="list">
//       <a [routerLink]="'/latte/' + item.id" className="item" *ngFor="let item of LatteData">
//         {{item.title}}
//         {{item.id}}
//       </a>
//      </div>
//   </div>}
//     {selectedTab === 'tab5' && <div>Content for Tab 5</div>}
//   </div>
// </div>
//     </div>
  )
}
