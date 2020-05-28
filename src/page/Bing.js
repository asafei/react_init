import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css'

function Bing(){
	const [bg,setBg]=useState('');
	useEffect(()=>{
		setBg("https://open.saintic.com/api/bingPic/");//https://open.saintic.com/openapi#Bing今日美图
		//或者https://blog.csdn.net/mayuko2012/article/details/47430473
	});
	return (
		<div id="bg_bing" className="bing">
			<img src={bg} className="bingPic"/>
		</div>
		);
}

export { Bing };