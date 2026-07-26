# `sql4dataaudit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| GroupID | int(10) | NO | PRI | 0 |  |  |
| ReportID | int(10) | NO | PRI | 0 |  |  |
| Name | varchar(100) | YES |  | NULL |  |  |
| Detail | varchar(200) | YES |  | NULL |  |  |
| Action | varchar(60) | YES |  | NULL |  |  |
| Color | varchar(20) | YES |  | NULL |  |  |
| cmd | mediumtext | YES |  | NULL |  |  |
| Title | text | YES |  | NULL |  |  |
| width | text | YES |  | NULL |  |  |
| record | int(11) | YES |  | NULL |  |  |
| cmd4update | mediumtext | YES |  | NULL |  |  |
| Flag | varchar(1) | YES |  | NULL |  |  |
| Active | varchar(1) | YES |  | NULL |  |  |
| Master | varchar(1) | YES |  | NULL |  |  |
| LastDate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | GroupID | yes | 1 |
| PRIMARY | ReportID | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "GroupID": 0,
    "ReportID": 0,
    "Name": null,
    "Detail": "เวชระเบียน (Patient)",
    "Action": "Group",
    "Color": null,
    "cmd": "",
    "Title": "",
    "width": null,
    "record": 0,
    "cmd4update": null,
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 1,
    "Name": null,
    "Detail": "00-ตรวจสอบคนที่มารับบริการ (Patient) แต่ยังไม่มีชื่อในบัญชี1 (Person) เฉพาะมีที่อยู่ในเขต (เลือกช่วง)",
    "Action": "REPORT",
    "Color": null,
    "cmd": "UPDATE person SET death='N' WHERE death=\" \" or death is null;\r\n\r\nSELECT o.vstdate,p.hn,p.cid,pname,fname,lname,CONCAT(substr(birthday,9,2),\"-\",substr(birthday,6,2),\"-\",substr(birthday,1,4)+543) birthday ,\r\np.bloodgrp blood_group,e.name education,CONCAT(p.father_cid,' ',p.fathername,' ',p.fatherlname) father,CONCAT(p.mother_cid,' ',p.mathername,' ',p.motherlname) mother,\r\np.addrpart,p.moopart,t.full_name,p.type_area ,pl.staff,d2.name staff_name,p.pttype,y.name pttype_name,n.hospmain,n.hospsub\r\nFROM patient p \r\njoin ovst o on o.hn=p.hn\r\nleft join patient_log pl on pl.hn=p.hn\r\nLEFT JOIN education e on e.education=p.educate\r\nleft join pttypeno n on n.hn=p.hn \r\nleft join pttype y on y.pttype=p.pttype\r\nleft  join opduser d2 on d2.loginname = pl.staff\r\nLEFT JOIN thaiaddress t on t.addressid=CONCAT(p.chwpart,p.amppart,p.tmbpart)\r\nWHERE p.cid not in(SELECT cid FROM person) and (death=\"N\" or death is NULL or death=\" \") \r\n  and nationality=\"99\" and (p.cid<>\" \" and p.cid is not null) and o.vstdate BETWEEN @ds1 and @ds2\r\nand (CONCAT(p.chwpart,p.amppart,p.tmbpart,LPAD(p.moopart,2,0)) in(SELECT village_code FROM village) \r\nand (CONCAT(p.chwpart,p.amppart)=(SELECT concat(p.chwpart,p.amppart) FROM hospcode WHERE hospcode in(SELECT hospitalcode from opdconfig)))) \r\ngroup by o.hn\r\nORDER BY t.addressid\r\nlimit 5000;\r\n\r\n\r\n",
    "Title": "",
    "width": null,
    "record": 0,
    "cmd4update": "",
    "Flag": "Y",
    "Active": null,
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 2,
    "Name": null,
    "Detail": "01-ผู้ป่วยสัญชาติไทย ในเวชระเบียน patient แต่ไม่มีในบัญชี1 person                                                                                                                                       ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "##run:_color=[rgb(128,255,0)];\r\n##run:_risk='Nation';\r\nselect pt.hn,pt.cid,concat(pt.pname,pt.fname,\" \",pt.lname) ptname \r\n,seekname(pt.sex,\"sex\") sex\r\n,ce2be(birthday) birthday,thaiage(pt.birthday,now()) age\r\n,seekname(pt.marrystatus,\"marry\") marry\r\n,seekname(pt.nationality,\"nation\") nation\r\n,seekname(pt.occupation,\"occupation\") occupation\r\n,pt.death\r\n,pt.type_area\r\n,address(pt.hn) address\r\nfrom patient pt \r\nwhere pt.cid not in (select cid from person)\r\nand (pt.death=\"\" or pt.death=\"N\" or pt.death is null) \r\nand pt.nationality=99\r\nand checkcid(pt.cid)<>0\r\n\r\n#and pt.cid not like \"0%\"\r\n#and pt.cid<>\"\"\r\n#and pt.cid is not null \r\n#and pt.cid not like\"111111111%\"\r\n\r\n",
    "Title": "",
    "width": "",
    "record": 0,
    "cmd4update": "",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 3,
    "Name": null,
    "Detail": "02-ตายในสถานพยาบาล PDeath=1 แต่ไม่ระบุโรงพยาบาลที่ตาย HospDeath (HDC)                                                                                                                                   ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "##run:_color=[icase(death_hospcode=\" \",rgb(255,0,0),rgb(255,255,255))];\r\n##run:_risk='death_hospcode:color';\r\nselect pt.hn,pt.cid,concat(pt.pname,pt.fname,\" \",pt.lname) ptname \r\n,seekname(pt.sex,\"sex\") sex\r\n,ce2be(birthday) birthday,thaiage(pt.birthday,now()) age\r\n,seekname(pt.marrystatus,\"marry\") marry\r\n,seekname(pt.nationality,\"nation\") nation\r\n,seekname(pt.occupation,\"occupation\") occupation\r\n,death_place_name\r\n,pt.type_area\r\n,ce2be(d.death_date) death_date\r\n,death_diag_1,s.death_source_name,d.death_hospcode\r\nfrom patient pt\r\njoin death d on d.hn=pt.hn\r\nleft join death_source s on s.death_source_id=d.death_source\r\nleft join death_place dp on dp.death_place_id=d.death_place\r\nwhere d.death_place=\"1\"\r\nand d.death_hospcode<>?myhospcode\r\n#and (d.death_hospcode is null or d.death_hospcode=\"\")",
    "Title": "",
    "width": null,
    "record": 0,
    "cmd4update": "",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 4,
    "Name": null,
    "Detail": "03-เลขบัตรประชาชนผิด ไม่ถูกต้องตาม MOD11                                                                                                                                                                ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "##run:formwidth=800;\r\nselect pt.cid,pt.hn,concat(pt.pname,pt.fname,\" \",pt.lname) ptname\r\n,seekname(pt.nationality,\"nation\") nation\r\n,pt.death\r\n,case\r\nwhen pt.cid like concat('0',?myhospcode,'%') then 'Gen CID'\r\nwhen pt.cid like concat(hn,'%') then 'Gen by HN'\r\nwhen pt.cid like concat('%',hn) then 'Gen by HN'\r\nelse 'Error' end Error\r\n,ce2be(pt.last_update) last_update\r\nfrom patient pt\r\n#where  (!checkcid(pt.cid) or pt.cid like concat('0',?myhospcode,'%'))\r\nwhere  checkcid(pt.cid)=0\r\nand (death=\"N\" or death is null or death=\"\")\r\nand pt.nationality='99'\r\norder by hn\r\n",
    "Title": "",
    "width": null,
    "record": 0,
    "cmd4update": "",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 5,
    "Name": null,
    "Detail": "04-ประชากรไทยที่มีที่อยู่ในแฟ้ม Address ที่ระบุเป็นไม่ระบุ(999999)                                                                                                                                      ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "SELECT pt.hn,p.person_id,pt.cid,CONCAT(p.pname,p.fname,\" \",p.lname) ptname,p.house_regist_type_id type_Area,cast(concat(\"หมู่ \",a.moopart,\" \",t.full_name) as char(100)) person_address,\r\npt.chwpart,pt.amppart,pt.tmbpart,pt.moopart,\"ส่งออกจะได้ 99999900\" Address_send\r\nFROM person p\r\nJOIN patient pt on pt.cid=p.cid\r\nLEFT JOIN person_address a on a.person_id=p.person_id\r\nLEFT JOIN thaiaddress t on t.addressid=CONCAT(a.chwpart,a.amppart,a.tmbpart)\r\nWHERE (pt.chwpart=\" \" or pt.chwpart is NULL)\r\nand p.person_discharge_id=9\r\norder by type_Area;\r\n\r\n\r\n",
    "Title": "x|x|x|x|x|ที่อยู่นอกเขต|patient_chwpart|patient_amppart|patient_tmbpart|patient_moopart|Address",
    "width": null,
    "record": 0,
    "cmd4update": "UPDATE person p\r\nJOIN patient pt on pt.cid=p.cid\r\nJOIN person_address a on a.person_id=p.person_id\r\nSET pt.chwpart=a.chwpart,pt.amppart=a.amppart,pt.tmbpart=a.tmbpart,pt.moopart=a.moopart,pt.addrpart=\"-\"\r\nWHERE (pt.chwpart=\" \" or pt.chwpart is NULL) and p.house_regist_type_id in(3,4) \r\nand p.person_discharge_id=9;\r\n\r\nUPDATE person p\r\nJOIN patient pt on pt.cid=p.cid\r\nSET pt.chwpart=(SELECT chwpart FROM hospcode WHERE hospcode in(SELECT hospitalcode from opdconfig))\r\n,pt.amppart=(SELECT amppart FROM hospcode WHERE hospcode in(SELECT hospitalcode from opdconfig))\r\n,pt.tmbpart=(SELECT tmbpart FROM hospcode WHERE hospcode in(SELECT hospitalcode from opdconfig))\r\n,pt.moopart=\"99\"\r\n,pt.addrpart=\"-\"\r\nWHERE (pt.chwpart=\" \" or pt.chwpart is NULL) and p.house_regist_type_id in(3,4) \r\nand p.person_discharge_id=9;",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 6,
    "Name": null,
    "Detail": "05-ตรวจสอบเลขบัตรประชาชนซ้ำซ้อนทั้งหมด ในเวชระเบียน                                                                                                                                                     ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "##Run:FormWidth=900;\r\n##Run:_Width='x|60|x|x|200';\r\nselect group_concat(distinct cid) cid\r\n,count(*) amount\r\n,group_concat(distinct fname) fname\r\n,group_concat(distinct lname) lname\r\n,group_concat(distinct hn) hn\r\n,\"กรุณาตรวจสอบ\" note\r\nfrom patient pt\r\nwhere cid is not null\r\nand cid<>''\r\nand cid not regexp '00000|11111|22222|99999'\r\ngroup by pt.cid\r\nhaving amount>1\r\n\r\n\r\n",
    "Title": "",
    "width": "",
    "record": 0,
    "cmd4update": "",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  },
  {
    "GroupID": 0,
    "ReportID": 7,
    "Name": null,
    "Detail": "เวชระเบียนมีเลขบัตรประชาชนว่างและไม่มีประวัติรับบริการ                                                                                                                                                  ",
    "Action": "REPORT                                                      ",
    "Color": null,
    "cmd": "##run:_color=[rgb(128,255,0)];\r\n##run:_risk='CID';\r\nselect pt.hn,pt.cid,concat(pt.pname,pt.fname,\" \",pt.lname) ptname \r\n,seekname(pt.sex,\"sex\") sex\r\n,ce2be(birthday) birthday,thaiage(pt.birthday,now()) age\r\n,seekname(pt.marrystatus,\"marry\") marry\r\n,seekname(pt.nationality,\"nation\") nation\r\n,seekname(pt.occupation,\"occupation\") occupation\r\n,pt.death\r\n,pt.type_area\r\n,address(pt.hn) address\r\n,ce2be(pt.firstday) firstdate\r\nfrom patient pt \r\nwhere (cid is null or cid=\"\")\r\nand hn not in (select hn from ovst)\r\n",
    "Title": "",
    "width": "",
    "record": 0,
    "cmd4update": "delete from\r\npatient \r\nwhere (cid is null or cid=\"\")\r\nand hn not in (select hn from ovst)",
    "Flag": "Y",
    "Active": "Y",
    "Master": "N",
    "LastDate": null
  }
]
```
