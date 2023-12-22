import React from 'react'

const SelectForm = (props) => {
    const { categories ,selectedCategory , setSelectedCategory } = props;
  return (
      <ul className='select-category-form'>
          <li
            className={`category-list ${selectedCategory === "" && "selected"}`}
            style={{ color: "#000" }} 
            onClick={() => setSelectedCategory("")}
          >
            All
          </li>
          {categories.map(category => {
              return (
                  <li
                    key={category}    
                    style={{ color: "#000" }} 
                    className={`category-list ${selectedCategory == category && "selected"}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
              )
          })}
    </ul>
  )
}

export default SelectForm