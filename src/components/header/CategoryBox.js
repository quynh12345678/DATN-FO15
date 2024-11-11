import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services";

const CategoryBox = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getCategories({ status: 1 }, setCategories);
	}, [])
	return (
		<div className="menuBox" id="menuBox">
			<div className="container">
				<ul className="menuMain">
					{categories?.length > 0 && categories.map((item, key) => {
						return <li className='list mnNews' key={key}>
							<a href={`/shop?category_id=${item.c_slug}`} title={`${item?.c_name} `}>
								{item?.c_name}
							</a>
						</li>
					})
					}
				</ul>
			</div>
		</div>
	);
};

export default CategoryBox;
