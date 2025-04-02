$(document).ready(
    function(){

        // 点击“+”按钮，数量增加时
        $(".addBtn").click(
            function(){

                // 获得与+在同一个td单元格中的数量值
                var span_tempNum = $(this).parent().find("span");
                var tempNum = span_tempNum.text();
                
                // 修改数量（+1）
                var new_num = Number(tempNum) + 1;
                span_tempNum.text(new_num);

                // 如果数量>1,“-”按钮可用
                if(new_num > 1){
                    $(this).parent().find(".minusBtn").prop("disabled", false);
                }

                // 获得单价的文本
                var span_unitPrice = $(this).parent().parent().find(".unitPrice");

                // 将单价的文本转换为数值
                var unitPrice = Number(span_unitPrice.text());

                // 获得小计的文本
                var span_tempPrice = $(this).parent().parent().find(".tempPrice");

                // 修改小计（增加一个商品的单价）
                var tempPrice = Number(span_tempPrice.text()) + unitPrice;
                span_tempPrice.text(tempPrice);

                // 获得合计
                var span_totalPrice = $(".totalPrice");
                // 将文本转换成数值
                var totalPrice = Number(span_totalPrice.text());

                // 修改合计
                if ($(this).parent().parent().find("input[name='ch']").is(":checked")) {
                    totalPrice += unitPrice;
                }
                span_totalPrice.text(totalPrice);

        })

        // 点击“-”按钮，数量减少时
        $(".minusBtn").click(
            function() {

                // 获得与-在同一个td单元格中的数量值
                var span_tempNum = $(this).parent().find("span");
                var tempNum = span_tempNum.text();

                // 如果数量=1,“-”按钮不可用
                if (tempNum == "1") {
                    $(this).prop("disabled", true);
                } else {

                    // 修改数量（-1）
                    var new_num = Number(tempNum) - 1;
                    span_tempNum.text(new_num);

                    // 获得单价的文本
                    var span_unitPrice = $(this).parent().parent().find(".unitPrice");

                    // 将单价文本转换成数值
                    var unitPrice = Number(span_unitPrice.text());

                    // 获得小计
                    var span_tempPrice = $(this).parent().parent().find(".tempPrice");

                    // 修改小计（减少一个商品的单价）
                    var tempPrice = Number(span_tempPrice.text()) - unitPrice;
                    span_tempPrice.text(tempPrice);

                    // 获得合计
                    var span_totalPrice = $(".totalPrice");
                    var totalPrice = Number(span_totalPrice.text());

                    // 修改合计
                    if($(this).parent().parent().find("input[name='ch']").is(":checked")) {
                        totalPrice -= unitPrice;
                    }
                    span_totalPrice.text(totalPrice);
                }
                
            })

        // 点击“全选”复选框
        $("input[name='checkAll']").click(
            function() {

                // 选中表格数据行中的全部复选框
                var checklist = $("input[name='ch']");
                checklist.prop("checked", $(this).prop("checked"));

                // 统计已选商品数量的合计 
                var span_totalNum = $(".totalNum");
                var span_totalPrice = $(".totalPrice");

                // “全选”复选框被选中时
                if ($(this).is(":checked")) {

                    // 已选商品数目为表格数据行中复选框的长度
                    span_totalNum.text(checklist.length); 
                    var totalPrice = 0;

                    // 统计已选商品数量的合计
                    checklist.each (
                        function() {
                            // 每个被选中的商品都进行累计
                            var span_tempPrice = $(this).parent().parent().find(".tempPrice");
                            var tempPrice = Number(span_tempPrice.text());
                            totalPrice += tempPrice;
                        }
                    )
                    span_totalPrice.text(totalPrice);   // 修改合计
                } else {
                    span_totalNum.text(0);      // 修改已选商品种类的数量
                    span_totalPrice.text(0);    // 修改合计
                }
            }
        )

        // 选择表格数据行中的复选框时
        $("input[name='ch']").click (
            function() {

                // 获得当前商品小计
                var span_tempPrice = $(this).parent().parent().find(".tempPrice");
                var tempPrice = Number(span_tempPrice.text());

                // 获得合计和已选商品种类数量
                var span_totalPrice = $(".totalPrice");
                var totalPrice = Number(span_totalPrice.text());
                var span_totalNum = $(".totalNum");
                var totalNum = Number(span_totalNum.text());

                // 表格数据行中的复选框被选中时
                if ($(this).is(":checked")) {
                    totalPrice += tempPrice;
                    totalNum ++;
                } else {
                    totalPrice -= tempPrice;
                    totalNum --;
                }
                span_totalPrice.text(totalPrice);   // 修改合计
                span_totalNum.text(totalNum);       // 修改数量

                // 如果选中商品类型的数量和表格中数据行的复选框长度相等
                var checklist = $("input[name='ch']");
                if (totalNum == checklist.length) {

                    // “全选”复选框显示“选中”状态
                    $("input[name='checkAll']").prop("checked", true);
                } else {

                    // “全选”复选框显示“未选中”状态
                    $("input[name='checkAll']").prop("checked", false);
                }
            }
        )

        // 点击“删除”按钮时
        $(".deleteBtn").click(
            function() {               

                // 获取选中商品类型的数量
                var span_totalNum = $(".totalNum");
                var totalNum = Number(span_totalNum.text());
                
                // 当“删除”按钮所在行的复选框被选中时
                var item_checkbox = $(this).parent().parent().find("input[name='ch']"); 
                if (item_checkbox.is(":checked")) {

                     // 修改合计
                    var span_tempPrice = $(this).parent().parent().find(".tempPrice");
                    var tempPrice = Number(span_tempPrice.text());
                    var span_totalPrice = $(".totalPrice");
                    var totalPrice = Number(span_totalPrice.text());
                    totalPrice -= tempPrice;
                    span_totalPrice.text(totalPrice); 

                    // 修改已选商品类型的数量                                    
                    totalNum--;
                    span_totalNum.text(totalNum);
                }

                // 删除所在行
                $(this).parent().parent().remove();

                // 设置“全选”复选框的状态
                var checklist = $("input[name='ch']");
                if (totalNum == checklist.length && totalNum != 0) {
                    $("input[name='checkAll']").prop("checked", true);
                } else {
                    $("input[name='checkAll']").prop("checked", false);
                }
            }
        )
    }
)