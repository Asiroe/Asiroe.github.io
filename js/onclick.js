function myssl(){
	window.open("https:////myssl.com/Asiroe.github.io")
}

function but(){
	var ttsText = document.getElementById('ttsText').value
	var myDate = new Date();
	var hour=myDate.getHours();
	var minute=myDate.getMinutes();
	var mytime= hour+':'+minute
	var myMonth= myDate.getMonth();
	var myYear= myDate.getFullYear();
	var myday= myDate.getDay();
	var week="今天是星期"+"天一二三四五六".charAt(myday);
	var user='我:'
	var comp='Asiroe:'
	
	var cspk='你可试着说‘帮助’'
	if (ttsText.includes('你好吗')){
		var cspk='我很好，谢谢'
	}else if (ttsText.includes('时间')){
		var cspk='现在北京时间:'+mytime
	}else if (ttsText.includes('几月几日')){
		var cspk='现在'+myMonth+'月'+myday+'日'
	}else if (ttsText.includes('几年')){
		var cspk='现在都'+myYear+'年了'
	}else if (ttsText.includes('什么年')){
		var cspk='现在'+myYear+'年了'
	}else if (ttsText.includes('多少年')){
		var cspk='现在'+myYear+'年'
	}else if (ttsText.includes('明天星期几')){
		var myday1= myDate.getDay();
		var week="明天是星期"+"天一二三四五六".charAt(myday1+1);
		var cspk=week
	}else if (ttsText.includes('昨天星期几')){
		var myday1= myDate.getDay();
		var week="作天是星期"+"天一二三四五六".charAt(myday1-1);
		var cspk=week
	}else if (ttsText.includes('后天星期几')){
		var myday1= myDate.getDay();
		var week="后天是星期"+"天一二三四五六".charAt(myday1+2);
		var cspk=week
	}else if (ttsText.includes('大后天星期几')){
		var myday1= myDate.getDay();
		var week="大后天是星期"+"天一二三四五六".charAt(myday1+3);
		var cspk=week
	}else if (ttsText.includes('明天礼拜几')){
		var myday1= myDate.getDay();
		var week="明天是星期"+"天一二三四五六".charAt(myday1+1);
		var cspk=week
	}else if (ttsText.includes('昨天礼拜几')){
		var myday1= myDate.getDay();
		var week="作天是星期"+"天一二三四五六".charAt(myday1-1);
		var cspk=week
	}else if (ttsText.includes('后天礼拜几')){
		var myday1= myDate.getDay();
		var week="后天是星期"+"天一二三四五六".charAt(myday1+2);
		var cspk=week
	}else if (ttsText.includes('大后天礼拜几')){
		var myday1= myDate.getDay();
		var week="大后天是星期"+"天一二三四五六".charAt(myday1+3);
		var cspk=week
	}else if (ttsText.includes('今天星期几')){
		var cspk=week
	}else if (ttsText.includes('今天礼拜几')){
		var cspk=week
	}else if (ttsText.includes('你好')){
		var cspk='你也好鸭！'	
	}else if (ttsText.includes('你爸是谁')){
		var cspk='我爸是袁思钰'
	}else if (ttsText.includes('你爸爸是谁')){
		var cspk='我爸爸是袁思钰'
	}else if (ttsText.includes('你妈是谁')){
		var cspk='我没妈妈...'
	}else if (ttsText.includes('你妈妈是谁')){
		var cspk='你马炸了，给爷爪巴!'
	}else if (ttsText.includes('在吗')){
		var cspk='在的！'
	}else if (ttsText.includes('神经病')){
		var cspk='反弹'
	}else if (ttsText.includes('傻')){
		var cspk='你个傻逼逼'
	}else if (ttsText.includes('恶心')){
		var cspk='你道德沦丧了吧？'
	}else if (ttsText.includes('死')){
		var cspk='你再骂？'	
	}else if (ttsText.includes('屎')){
		var cspk='被你吃了'
	}else if (ttsText.includes('滚')){
		var cspk='吃屎去！'
	}else if (ttsText.includes('不要脸')){
		var cspk='您脸呢？'
	}else if (ttsText.includes('有病')){
		var cspk='智商有问题吧'
	}else if (ttsText.includes('厚脸皮')){
		var cspk='你没脸'
	}else if (ttsText.includes('小学生')){
		var cspk='你真恶心'
	}else if (ttsText.includes('xxs')){
		var cspk='永久反弹'
	}else if (ttsText.includes('反弹无效')){
		var cspk='三百六十五度无死角超级加倍反弹！！！'
	}else if (ttsText.includes('ex')){
		var cspk='令人作呕...'
	}else if (ttsText.includes('我是公主')){
		var cspk='屁，有公主病，没公主命！'
	}else if (ttsText.includes('你是谁')){
		var cspk='我是人见人爱的Asiroe啊！'
	}else if (ttsText.includes('反弹')){
		var cspk='反弹无效'
	}else if (ttsText.includes('帮助')){
		var cspk='你可以试着说你好？\n在吗？\n还可以试着骂我\n之后我还会学习更多\n知道了吗？憨批'
	}else {
		var cspk='憨批，我没学！'
	}

	if (ttsText=='') {
		alert('请输入内容！')
	} else{
		var textsend = document.getElementById('textsend').innerHTML=mytime+'\n\n'+user+ttsText+'\n'+comp+cspk
	}

}

function about(){
	alert('版本:1.1.5\n版权归袁思钰所有')
}

function Asiroe(){
	window.open('user.html')
}