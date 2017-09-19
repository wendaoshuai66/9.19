/*
* @Author: Administrator
* @Date:   2017-09-19 18:19:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 19:04:06
*/
function getClass(classname,ranger){
		ranger=ranger ? ranger :document
		if(document.getElementsByClassName){
			return ranger.getElementsByClassName(classname);
		}else{
			 var newarr=[];
			 var all=ranger.getElementsByTagName('*')
			 for(var i=0;i<all.length;i++){
			 	if(checkClass(all[i].className,classname)){
			 		newarr.push(all[i])
			 	}
			 }
		}
		return newarr;
	}
	function checkClass(className,classname){
		var arr=className.split(' ');
		for(var i=0;i<arr.length;i++){
			if(arr[i]==classname){
				return true;
			}
		}
		return false;
	}
    function $(select){
    	var first=select.charAt(0);
    	if(first=='.'){
    		return getClass(select.substring(1));
    	}else if(first=='#'){
            return document.getElementById(select.substring(1));
    	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
    		return document.getElementsByTagName(select)
    	}
    } 
