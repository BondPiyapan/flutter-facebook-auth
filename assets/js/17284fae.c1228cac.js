"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7402],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5555:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},c="Complete example",l={unversionedId:"example",id:"example",isDocsHomePage:!1,title:"Complete example",description:"",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/docs/4.x.x/example",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get the user information",permalink:"/docs/4.x.x/user-information"},next:{title:"Migration guide",permalink:"/docs/4.x.x/migration-guide"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"complete-example"},"Complete example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:convert';\nimport 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\nimport 'package:flutter_facebook_auth/flutter_facebook_auth.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nString prettyPrint(Map json) {\n  JsonEncoder encoder = const JsonEncoder.withIndent('  ');\n  String pretty = encoder.convert(json);\n  return pretty;\n}\n\nclass MyApp extends StatefulWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  _MyAppState createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n  Map<String, dynamic>? _userData;\n  AccessToken? _accessToken;\n  bool _checking = true;\n\n  @override\n  void initState() {\n    super.initState();\n    _checkIfIsLogged();\n  }\n\n  Future<void> _checkIfIsLogged() async {\n    final accessToken = await FacebookAuth.instance.accessToken;\n    setState(() {\n      _checking = false;\n    });\n    if (accessToken != null) {\n      print(\"is Logged:::: ${prettyPrint(accessToken.toJson())}\");\n      // now you can call to  FacebookAuth.instance.getUserData();\n      final userData = await FacebookAuth.instance.getUserData();\n      // final userData = await FacebookAuth.instance.getUserData(fields: \"email,birthday,friends,gender,link\");\n      _accessToken = accessToken;\n      setState(() {\n        _userData = userData;\n      });\n    }\n  }\n\n  void _printCredentials() {\n    print(\n      prettyPrint(_accessToken!.toJson()),\n    );\n  }\n\n  Future<void> _login() async {\n    final LoginResult result = await FacebookAuth.instance.login(); // by default we request the email and the public profile\n\n    // loginBehavior is only supported for Android devices, for ios it will be ignored\n    // final result = await FacebookAuth.instance.login(\n    //   permissions: ['email', 'public_profile', 'user_birthday', 'user_friends', 'user_gender', 'user_link'],\n    //   loginBehavior: LoginBehavior\n    //       .DIALOG_ONLY, // (only android) show an authentication dialog instead of redirecting to facebook app\n    // );\n\n    if (result.status == LoginStatus.success) {\n      _accessToken = result.accessToken;\n      _printCredentials();\n      // get the user data\n      // by default we get the userId, email,name and picture\n      final userData = await FacebookAuth.instance.getUserData();\n      // final userData = await FacebookAuth.instance.getUserData(fields: \"email,birthday,friends,gender,link\");\n      _userData = userData;\n    } else {\n      print(result.status);\n      print(result.message);\n    }\n\n    setState(() {\n      _checking = false;\n    });\n  }\n\n\n  Future<void> _logOut() async {\n    await FacebookAuth.instance.logOut();\n    _accessToken = null;\n    _userData = null;\n    setState(() {});\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(\n          title: const Text('Facebook Auth Example'),\n        ),\n        body: _checking\n            ? const Center(\n                child: CircularProgressIndicator(),\n              )\n            : SingleChildScrollView(\n                child: Padding(\n                  padding: const EdgeInsets.all(8.0),\n                  child: Column(\n                    crossAxisAlignment: CrossAxisAlignment.center,\n                    children: <Widget>[\n                      Text(\n                        _userData != null ? prettyPrint(_userData!) : \"NO LOGGED\",\n                      ),\n                      const SizedBox(height: 20),\n                      _accessToken != null\n                          ? Text(\n                              prettyPrint(_accessToken!.toJson()),\n                            )\n                          : Container(),\n                      const SizedBox(height: 20),\n                      CupertinoButton(\n                        color: Colors.blue,\n                        child: Text(\n                          _userData != null ? \"LOGOUT\" : \"LOGIN\",\n                          style: const TextStyle(color: Colors.white),\n                        ),\n                        onPressed: _userData != null ? _logOut : _login,\n                      ),\n                      const SizedBox(height: 50),\n                    ],\n                  ),\n                ),\n              ),\n      ),\n    );\n  }\n}\n")))}d.isMDXComponent=!0}}]);