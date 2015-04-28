test("add()测试",function(){
	equal(add(1,2),true,"add(1,2)");
});

test("reduc()测试",function(){
	equal(reduc(1,2),false,"reduc(1,2)");
	equal(reduc(2,1),true,"reduc(1,2)");
});
//jscoverage E:\HBulider_InstallPath\qunitExample\code E:\HBulider_InstallPath\qunitExample\jsCoverage