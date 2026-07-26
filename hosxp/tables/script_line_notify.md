# `script_line_notify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| script_code | varchar(13) | NO | PRI |  |  |  |
| script_name | varchar(100) | YES |  | NULL |  |  |
| script_datetime | datetime | YES |  | NULL |  |  |
| script_by | varchar(100) | YES |  | NULL |  |  |
| script_sql | text | YES |  | NULL |  |  |
| when_error | varchar(3) | YES |  | NULL |  |  |
| script_status | varchar(1) | YES |  | NULL |  |  |
| sort_no | int(11) | YES |  | NULL |  |  |
| result_tmp | varchar(250) | YES |  | NULL |  |  |
| script_group_code | varchar(3) | YES |  | NULL |  |  |
| todo_url | varchar(250) | YES |  | NULL |  |  |
| ts_api | varchar(150) | YES |  | NULL |  |  |
| ts_field | varchar(50) | YES |  | NULL |  |  |
| use_ts | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | script_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "script_code": "12251_0000001",
    "script_name": "จำนวนผู้ป่วยนอกรายเก่า",
    "script_datetime": "2018-08-29 11:16:00",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(ov.vn)-( select COUNT(p.hn) from patient p\r\n left outer join patient_regiment pr on pr.hn=p.hn \t\r\nwhere p.firstday =CURDATE() ) as \"visit\" \r\nFROM ovst ov LEFT JOIN vn_stat v on ov.vn=v.vn \r\nwhere ov.vstdate =CURDATE()\r\nAND ov.an is NULL",
    "when_error": null,
    "script_status": "F",
    "sort_no": 1,
    "result_tmp": null,
    "script_group_code": "002",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000002",
    "script_name": "จำนวนผู้ป่วยใหม่ในวันนี้",
    "script_datetime": "2018-08-29 15:28:31",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(cid) From patient WHERE firstday =CURDATE()",
    "when_error": null,
    "script_status": "F",
    "sort_no": 2,
    "result_tmp": null,
    "script_group_code": "002",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000003",
    "script_name": "ผู้ป่วยออทิสติก (เฉพาะ F84)",
    "script_datetime": "2018-08-29 15:38:57",
    "script_by": "tao",
    "script_sql": "SELECT sum(IF(i.code3 in (\"F84\"),1,0)) as \"ออทิสติก (เฉพาะ F84)\" \r\nFROM ovstdiag od \r\nLEFT JOIN ovst o on o.vn=od.vn\r\nLEFT JOIN icd10 i on od.icd10=i.`code` \r\nWHERE o.vstdate =CURDATE()\r\n",
    "when_error": null,
    "script_status": "F",
    "sort_no": 3,
    "result_tmp": null,
    "script_group_code": "001",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000004",
    "script_name": "จำนวนผู้ป่วย Admit ที่ยังไม่จำหน่าย",
    "script_datetime": "2018-08-30 10:22:42",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(DISTINCT ipt.an) as cc\r\nFROM   ipt\r\nLEFT OUTER JOIN spclty ON spclty.spclty = ipt.spclty\r\nLEFT OUTER JOIN iptadm ON iptadm.an = ipt.an\r\nLEFT OUTER JOIN patient ON patient.hn = ipt.hn\r\nLEFT OUTER JOIN doctor dt ON dt. CODE = ipt.admdoctor\r\nLEFT OUTER JOIN roomno ON roomno.roomno = iptadm.roomno\r\nLEFT OUTER JOIN iptdiag ON iptdiag.an = ipt.an AND iptdiag.diagtype = '1'\r\nLEFT OUTER JOIN icd101 i1 ON i1. CODE = substring(iptdiag.icd10, 1, 3)\r\nLEFT OUTER JOIN an_stat aa ON aa.an = ipt.an\r\nLEFT OUTER JOIN ward w ON w.ward = ipt.ward\r\nLEFT OUTER JOIN dchtype dc1 ON dc1.dchtype = ipt.dchtype\r\nLEFT OUTER JOIN dchstts dc2 ON dc2.dchstts = ipt.dchstts\r\nLEFT OUTER JOIN ipt_finance_status fs ON fs.an = ipt.an\r\nLEFT OUTER JOIN finance_status ft ON ft.finance_status = fs.finance_status\r\nLEFT OUTER JOIN doctor di ON di. CODE = ipt.incharge_doctor\r\nLEFT OUTER JOIN pttype ptt ON ptt.pttype = ipt.pttype\r\nWHERE\r\n   (\r\n      ipt.an IN (select an from ipt where ipt.ward IN (\"01\",\"02\",\"03\",\"04\")  and regdate =CURDATE() )\r\n      OR ipt.an IN (select an from ipt where  ipt.ward IN (\"01\",\"02\",\"03\",\"04\")  and regdate<CURDATE() )\r\n   )\r\nAND (ipt.dchdate > CURDATE()  OR ipt.dchstts IS NULL)",
    "when_error": null,
    "script_status": "F",
    "sort_no": 4,
    "result_tmp": null,
    "script_group_code": "001",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000005",
    "script_name": "จำนวนผู้ป่วยนอกที่ไม่ลง Diagnosis วันที่",
    "script_datetime": "2018-08-31 10:26:58",
    "script_by": "tao",
    "script_sql": "SELECT CONCAT(DATE_FORMAT(CURDATE(),'%d-'),DATE_FORMAT(CURDATE(),'%m-'),DATE_FORMAT(CURDATE(),'%Y')+543,\" จำนวน \",COUNT(v.vn),\" visit\") as cc\r\nFROM vn_stat v\r\nLEFT JOIN ovst o on v.vn=o.vn\r\nLEFT JOIN patient p on v.hn=p.hn\r\nLEFT JOIN doctor d on o.doctor=d.code\r\nLEFT JOIN kskdepartment dep on o.main_dep=dep.depcode\r\nWHERE v.vstdate = CURDATE()\r\nAND o.an is NULL\r\nAND v.pdx =\"\"",
    "when_error": null,
    "script_status": "F",
    "sort_no": 5,
    "result_tmp": null,
    "script_group_code": "002",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000006",
    "script_name": "จำนวนผู้ป่วย Admit ที่ยังไม่จำหน่าย IPD2",
    "script_datetime": "2018-08-30 10:27:19",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(DISTINCT ipt.an) as cc\r\nFROM   ipt\r\nLEFT OUTER JOIN spclty ON spclty.spclty = ipt.spclty\r\nLEFT OUTER JOIN iptadm ON iptadm.an = ipt.an\r\nLEFT OUTER JOIN patient ON patient.hn = ipt.hn\r\nLEFT OUTER JOIN doctor dt ON dt. CODE = ipt.admdoctor\r\nLEFT OUTER JOIN roomno ON roomno.roomno = iptadm.roomno\r\nLEFT OUTER JOIN iptdiag ON iptdiag.an = ipt.an AND iptdiag.diagtype = '1'\r\nLEFT OUTER JOIN icd101 i1 ON i1. CODE = substring(iptdiag.icd10, 1, 3)\r\nLEFT OUTER JOIN an_stat aa ON aa.an = ipt.an\r\nLEFT OUTER JOIN ward w ON w.ward = ipt.ward\r\nLEFT OUTER JOIN dchtype dc1 ON dc1.dchtype = ipt.dchtype\r\nLEFT OUTER JOIN dchstts dc2 ON dc2.dchstts = ipt.dchstts\r\nLEFT OUTER JOIN ipt_finance_status fs ON fs.an = ipt.an\r\nLEFT OUTER JOIN finance_status ft ON ft.finance_status = fs.finance_status\r\nLEFT OUTER JOIN doctor di ON di. CODE = ipt.incharge_doctor\r\nLEFT OUTER JOIN pttype ptt ON ptt.pttype = ipt.pttype\r\nWHERE\r\n   (\r\n      ipt.an IN (select an from ipt where ipt.ward IN (\"01\")  and regdate =CURDATE() )\r\n      OR ipt.an IN (select an from ipt where  ipt.ward IN (\"01\")  and regdate<CURDATE() )\r\n   )\r\nAND (ipt.dchdate > CURDATE()  OR ipt.dchstts IS NULL)",
    "when_error": null,
    "script_status": "F",
    "sort_no": 6,
    "result_tmp": null,
    "script_group_code": "001",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000007",
    "script_name": "จำนวนผู้ป่วย Admit ที่ยังไม่จำหน่าย IPD3",
    "script_datetime": "2018-08-30 10:29:18",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(DISTINCT ipt.an) as cc\r\nFROM   ipt\r\nLEFT OUTER JOIN spclty ON spclty.spclty = ipt.spclty\r\nLEFT OUTER JOIN iptadm ON iptadm.an = ipt.an\r\nLEFT OUTER JOIN patient ON patient.hn = ipt.hn\r\nLEFT OUTER JOIN doctor dt ON dt. CODE = ipt.admdoctor\r\nLEFT OUTER JOIN roomno ON roomno.roomno = iptadm.roomno\r\nLEFT OUTER JOIN iptdiag ON iptdiag.an = ipt.an AND iptdiag.diagtype = '1'\r\nLEFT OUTER JOIN icd101 i1 ON i1. CODE = substring(iptdiag.icd10, 1, 3)\r\nLEFT OUTER JOIN an_stat aa ON aa.an = ipt.an\r\nLEFT OUTER JOIN ward w ON w.ward = ipt.ward\r\nLEFT OUTER JOIN dchtype dc1 ON dc1.dchtype = ipt.dchtype\r\nLEFT OUTER JOIN dchstts dc2 ON dc2.dchstts = ipt.dchstts\r\nLEFT OUTER JOIN ipt_finance_status fs ON fs.an = ipt.an\r\nLEFT OUTER JOIN finance_status ft ON ft.finance_status = fs.finance_status\r\nLEFT OUTER JOIN doctor di ON di. CODE = ipt.incharge_doctor\r\nLEFT OUTER JOIN pttype ptt ON ptt.pttype = ipt.pttype\r\nWHERE\r\n   (\r\n      ipt.an IN (select an from ipt where ipt.ward IN (\"02\")  and regdate =CURDATE() )\r\n      OR ipt.an IN (select an from ipt where  ipt.ward IN (\"02\")  and regdate<CURDATE() )\r\n   )\r\nAND (ipt.dchdate > CURDATE()  OR ipt.dchstts IS NULL)",
    "when_error": null,
    "script_status": "F",
    "sort_no": 7,
    "result_tmp": null,
    "script_group_code": "001",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  },
  {
    "script_code": "12251_0000008",
    "script_name": "จำนวนผู้ป่วย Admit ที่ยังไม่จำหน่าย IPD4",
    "script_datetime": "2018-08-30 10:32:24",
    "script_by": "tao",
    "script_sql": "SELECT COUNT(DISTINCT ipt.an) as cc\r\nFROM   ipt\r\nLEFT OUTER JOIN spclty ON spclty.spclty = ipt.spclty\r\nLEFT OUTER JOIN iptadm ON iptadm.an = ipt.an\r\nLEFT OUTER JOIN patient ON patient.hn = ipt.hn\r\nLEFT OUTER JOIN doctor dt ON dt. CODE = ipt.admdoctor\r\nLEFT OUTER JOIN roomno ON roomno.roomno = iptadm.roomno\r\nLEFT OUTER JOIN iptdiag ON iptdiag.an = ipt.an AND iptdiag.diagtype = '1'\r\nLEFT OUTER JOIN icd101 i1 ON i1. CODE = substring(iptdiag.icd10, 1, 3)\r\nLEFT OUTER JOIN an_stat aa ON aa.an = ipt.an\r\nLEFT OUTER JOIN ward w ON w.ward = ipt.ward\r\nLEFT OUTER JOIN dchtype dc1 ON dc1.dchtype = ipt.dchtype\r\nLEFT OUTER JOIN dchstts dc2 ON dc2.dchstts = ipt.dchstts\r\nLEFT OUTER JOIN ipt_finance_status fs ON fs.an = ipt.an\r\nLEFT OUTER JOIN finance_status ft ON ft.finance_status = fs.finance_status\r\nLEFT OUTER JOIN doctor di ON di. CODE = ipt.incharge_doctor\r\nLEFT OUTER JOIN pttype ptt ON ptt.pttype = ipt.pttype\r\nWHERE\r\n   (\r\n      ipt.an IN (select an from ipt where ipt.ward IN (\"03\")  and regdate =CURDATE() )\r\n      OR ipt.an IN (select an from ipt where  ipt.ward IN (\"03\")  and regdate<CURDATE() )\r\n   )\r\nAND (ipt.dchdate > CURDATE()  OR ipt.dchstts IS NULL)",
    "when_error": null,
    "script_status": "F",
    "sort_no": 8,
    "result_tmp": null,
    "script_group_code": "001",
    "todo_url": null,
    "ts_api": null,
    "ts_field": null,
    "use_ts": null
  }
]
```
