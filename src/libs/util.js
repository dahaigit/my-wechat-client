export default {
  /**
   * 获取url中的某个参数
   * @param name 参数名称
   * @returns {string}
   * @constructor
   */
  getQueryString:function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
      context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
  }

}
