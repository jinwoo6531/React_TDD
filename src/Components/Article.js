import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { contents } from '../config';

const Article = () => {
	const [ contentList, setContentList ] = useState([]);

	useEffect(() => {
		// getContents();
		setContentList(contents);
	}, []);

	// const getContents = () => {
	// 	fetch('http://my-json-server.typicode.com/codeameba/mockdata/contents')
	// 		.then(res => res.json())
	// 		.then(res => setContentList(res));
	// };

	const subArticleItems = [ ...contentList.slice(1) ];

	return (
		<ArticleContainer data-testid='Article'>
			<section className='mainArticle' data-testid='mainArticle'>
				<div>
					<img src={{ ...contentList[0] }.img} alt='main article img' />
				</div>
				<div>
					<h2>{{ ...contentList[0] }.title}</h2>
					<p>{{ ...contentList[0] }.description}</p>
				</div>
			</section>
			<section className='subArticle' data-testid='subArticle'>
				<h3>지금 읽어야 할</h3>
				<div className='itemsContainer'>
					{subArticleItems.map((item, idx) => (
						<div key={item.title + idx}>
							<img src={item.img} alt={item.title} />
							<h4>{item.title}</h4>
						</div>
					))}
				</div>
			</section>
		</ArticleContainer>
	);
};

const ArticleContainer = styled.article`
	height: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 120px;
	.mainArticle {
		height: 70%;
		width: 90%;
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		div:first-child {
			max-width: 660px;
			max-height: 660px;
			img {
				width: 100%;
				max-height: 660px;
				object-fit: cover;
				transition: 0.3s ease-in-out;
			}
		}
		div:last-child {
			max-width: 50%;
			padding: 20px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-left: 10px;
			color: rgba(0, 0, 0, 0.8);
			h2 {
				font-weight: 600;
			}
			p {
				line-height: 28px;
				font-size: 16px;
				padding: 5% 10%;
			}
		}
	}
	.mainArticle:hover {
		h2 {
			color: #0166ff;
		}
		p {
			color: #0166ff;
		}
		img {
			transform: scale(1.05);
		}
	}
	.subArticle {
		width: 90%;
		height: 500px;
		overflow: hidden;
		cursor: pointer;
		h3 {
			margin-top: 50px;
		}
		.itemsContainer {
			display: flex;
			width: 100%;
			height: 100%;
			overflow: auto;
			padding-bottom: 20px;
			border-top: 1px solid rgba(0, 0, 0, 1);
			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 14px;
				img {
					width: 280px;
					height: 280px;
					object-fit: cover;
					margin: 0 10px;
					transition: 0.3s ease-in-out;
				}
				h4 {
					font-size: 16px;
				}
				&:hover {
					color: #0166ff;
					img {
						transform: scale(1.05);
					}
				}
			}
		}
	}
`;

export default Article;