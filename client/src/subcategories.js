import React from 'react'
import Category from './categories'
import {Link} from 'react-router-dom'

export default function subcategories() {

    if (!categories) return null
    return (
        <ul>
            {
                categories.map((category) =>  (
                    <li key={category.slug}>
                        <Link to={`/categories/${categories.slug}`}>
                            <Category {...category}/>
                        </Link>
                    </li>
                    )
                )
            }
            
        </ul>    
    );
}
