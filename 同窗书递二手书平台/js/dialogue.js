/* 收藏 */
function collet() {

    /* 确认对话框：“确定”返回true，“取消”返回false。 */ 
    var value = confirm("你确定要收藏吗？");
    if (value == true) {
                
        // 警告对话框
        alert("收藏成功");
    }			
}

/* 删除 */
function remove() {
    
     /* 确认对话框：“确定”返回true，“取消”返回false。 */  
     var value = confirm("你确定要删除吗？");
     if (value == true) {
                 
         // 警告对话框
         alert("删除成功！");
     }
}
