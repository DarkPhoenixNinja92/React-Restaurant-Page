const Menu = () => {
    return(
        <div className='Menu-div'>
            <h1>Menu</h1>
                <div className="drink-menu">
                    <h2>Beverages</h2>
                    <h3>Soft Drinks</h3>
                    <ul>
                        <li>Coke - $1.49</li>
                        <li>Diet Coke - $1.49</li>
                        <li>Pepsi - $1.49</li>
                        <li>Diet Pepsi - $1.49</li>
                        <li>Sprite - $1.49</li>
                        <li>Ginger Ale - $1.49</li>
                        <li>Root Beer - $2.49</li>
                    </ul>
                    <p>*Note: Root beer and ginger ale do not include free refills</p>
                    <h3>Hot Drinks</h3>
                    <ul>
                        <li>Tea (List of teas available on request) - $1.99</li>
                        <li>Decaffinated Tea - $1.99</li>
                        <li>Coffee - $3.55</li>
                        <li>Decaf Coffee - $3.55</li>
                        <li>Hot Toddy - $5.60</li>
                    </ul>
                    <h4>List of Wine and Beer options available on request</h4>
                </div>
        </div>
    )
}

export default Menu