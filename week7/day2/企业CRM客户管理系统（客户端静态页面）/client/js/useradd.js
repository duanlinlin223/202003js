$(function(){
  let $submit = $(".submit");
  
	$submit.click(function(){
		let $username = $(".username").val(),
			$val=$('input:radio[name="sex"]:checked').attr('id'),
			$useremail = $(".useremail").val(),
			$userphone = $(".userphone").val(),
			$userdepartment =$(".userdepartment").val(),
			$userjob = $(".userjob").val(),
			$userdesc =$(".userdesc").val();
		if($val == "man"){
			$val=0
		}else{
			$val=1
		}
		if($username=="" || $useremail=="" || $userphone==""|| $userjob==""|| $userdesc==""){
			alert('请填写信息')
			return;
		}
		axios.post('/user/add',{
			name: $username,
			sex: $val,
			department:$userdepartment,
			job:$userjob,
			email:$useremail,
			phone:$userphone,
			desc:$userdesc
		}).then(result=>{
			//console.log(result)
			window.location.href="userlist.html"
		})  
	})

	
})