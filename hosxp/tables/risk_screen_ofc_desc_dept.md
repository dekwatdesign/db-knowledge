# `risk_screen_ofc_desc_dept`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dept_sid | decimal(10,0) | YES |  | NULL |  |  |
| dept_id | varchar(5) | YES |  | NULL |  |  |
| dept_idonl | char(3) | YES |  | NULL |  |  |
| dept_desc | varchar(254) | YES |  | NULL |  |  |
| last_statu | char(1) | YES |  | NULL |  |  |
| last_updat | varchar(12) | YES |  | NULL |  |  |
| curr | char(1) | YES |  | NULL |  |  |
| mins_sid | decimal(10,0) | YES |  | NULL |  |  |
| user_sid | decimal(10,0) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dept_sid": "255",
    "dept_id": "01001",
    "dept_idonl": "001",
    "dept_desc": "[MASKED_FULLNAME]",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "256",
    "dept_id": "01002",
    "dept_idonl": "002",
    "dept_desc": "กรมประชาสัมพันธ์",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "257",
    "dept_id": "01003",
    "dept_idonl": "003",
    "dept_desc": "สำนักงานคณะกรรมการคุ้มครองผู้บริโภค (สคบ.)",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "258",
    "dept_id": "01004",
    "dept_idonl": "004",
    "dept_desc": "[MASKED_FULLNAME]",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "259",
    "dept_id": "01005",
    "dept_idonl": "005",
    "dept_desc": "สำนักเลขาธิการคณะรัฐมนตรี (สลค.)",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "260",
    "dept_id": "01006",
    "dept_idonl": "006",
    "dept_desc": "สำนักข่าวกรองแห่งชาติ (สขช.)",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "261",
    "dept_id": "01007",
    "dept_idonl": "007",
    "dept_desc": "สำนักงบประมาณ (สงป.)",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dept_sid": "262",
    "dept_id": "01008",
    "dept_idonl": "008",
    "dept_desc": "สำนักงานสภาความมั่นคงแห่งชาติ (สมช.)",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "mins_sid": "1",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
