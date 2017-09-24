/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .config(config);

  /** @ngInject */
  //$provide服务提供了在服务实例创建时对其进行拦截的功能，可以对服务进行扩展，或者用另外的内容完全代替它,这就是装饰器
  //装饰器是非常强大的，它不仅可以应用在我们自己的服务上，也可以对AngularJS的核心服务进行拦截、中断甚至替换功能的操作
  //事实上AngularJS中很多功能的测试就是借助$provide.decorator()建立的。对服务进行装饰的场景有很多，比如对服务进行扩展，
  // 将外部数据缓存进localStorage的功能，或者对服务进行封装以便在开发中进行调试和跟踪等。
  //$provide.decorator有两个参数
  //1.name（字符串）将要拦截的服务名称。
  //2.decoratorFn（函数）
  //在服务实例化时调用该函数，这个函数由injector.invoke调用，可以将服务注入这个函数中。

  function config(baConfigProvider, colorHelper, $provide) {
    $provide.decorator('$uiViewScroll', uiViewScrollDecorator);
    //baConfigProvider.changeTheme({blur: true});
    //
    //baConfigProvider.changeColors({
    //  default: 'rgba(#000000, 0.2)',
    //  defaultText: '#ffffff',
    //  dashboard: {
    //    white: '#ffffff',
    //  },
    //});
  }

  /** @ngInject */
  function uiViewScrollDecorator($delegate, $anchorScroll, baUtil) {
    return function (uiViewElement) {
      if (baUtil.hasAttr(uiViewElement, "autoscroll-body-top")) {
        $anchorScroll();
      } else {
        $delegate(uiViewElement);
      }
    };
  }
})();
