var express = require('express');
var router = express.Router();


// 채팅방 정보 관리 라우팅 기능 제공


/*
-채팅방 정보 리스트 페이지 호출
호출 주소 : http://localhost:3001/channel/list
GET
*/
router.get('/list',async(req,res)=>{

  var channel = [
    {
      title:"채팅방 제목1",
      members:["A", "B"],
      id:1
    },
    {
      title:"채팅방 제목2",
      members:["A", "B", "C"],
      id:2
    },
    {
      title:"채팅방 제목3",
      members:["B", "C"],
      id:3
    }
  ]

  res.render('channel/list',{channel});
});


/*
-채팅방 정보 생성 페이지 호출
호출 주소 : http://localhost:3001/channel/create
GET
*/
router.get('/create',function(req,res){
  res.render('channel/create');
});


/*
-채팅방 정보 생성 페이지 채팅방 데이터 요청과 호출
호출 주소 : http://localhost:3001/channel/create
POST
*/
router.post('/create',function(req,res){
  // chatRoomTitle, chatRoomMembers, chatRoomId


  res.redirect('/channel/list');
});


/*
-채팅방 정보 수정 페이지 호출
호출 주소 : http://localhost:3001/channel/modify
GET
*/
router.get('/modify/:chId',async(req,res)=>{

  var channel = {
    title:"채팅방 제목1",
    members:["A", "B"],
    id:1
  }


  res.render('channel/modify', {channel});
});



/*
-채팅방 정보 수정 페이지 채팅방 정보 수정 데이터 요청과 응답 메소드
호출 주소 : http://localhost:3001/channel/modify
POST
*/
router.post('/modify/:chId',async(req,res)=>{
  // chatRoomTitle, chatRoomMembers, chatRoomId


  res.redirect('/channel/list');
});


/*
-채팅방 정보 리스트 삭제 요청과 호출 메소드
호출 주소 : http://localhost:3001/channel/delete
GET
*/
router.get('/delete',function(req,res){
  // chatRoomId


  res.redirect('/channel/list');
});



module.exports = router;
