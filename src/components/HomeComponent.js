import Select from 'react-select'
import {Search} from 'react-bootstrap-icons'


function Home() {
    
    let optionss = ['volvo', 'Tesla', 'Nisan Deasel']

    const lists = optionss.map(op => {
        return(
                <option key={op} value={op}>
                    {op}
                </option>
        )
    })
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "inherit",
          borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
          boxShadow: null,
          borderStyle: 'none',
          "&:hover": {
            borderColor: state.isFocused ? null : null
          }
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "30px",
          marginTop: 0,
          
        }),
        menuList: (base) => ({
          ...base,
          padding: 0,
          borderRadius: '30px'
        })
      };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    const MyComponent = () => (
        <Select options={options} className='col-11'
            styles={customStyles}
            />
    )
     
    return(
        <div className="home-body d-flex align-items-center">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1>Visualize Ethiopia</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <p>See different facts about Ethiopia using graphs</p>
                </div>                
                <div className="d-flex justify-content-center">
                    <div className='select-field row'>
                        <Search className='col-1 mt-2' size={23}/>
                        <MyComponent />
                    </div>
                                  
                </div>
                
                <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="search-button">Show Graph</button>
                </div>  
            
            </div>         
        </div>
    )
}

export default Home;

/*
<Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" tag='div'
            className="search-field d-flex justify-content-center">
    <DropdownToggle caret tag='div' className="dropdown-toggle">
        please choose your interest 
    </DropdownToggle>
    <DropdownMenu tag='div' className="dropdown-menu" >
        <DropdownItem tag='div' className="dropdown-item">Header</DropdownItem>
        <DropdownItem tag='div' className="dropdown-item">Some Action</DropdownItem>
    </DropdownMenu>
</Dropdown>

<select className="select-field d-flex justify-content-center" name='interest' id='select-interest'>
                        <option value="" hidden >Please select your interest</option>
                        {lists}
                    </select> 
*/