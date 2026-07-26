# `anc_risk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_risk_id | int(11) | NO | PRI | 0 |  |  |
| anc_risk_name | varchar(200) | YES |  | NULL |  |  |
| anc_risk_fatal | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_risk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "anc_risk_id": 1,
    "anc_risk_name": "ตั้งครรภ์อายุน้อยกว่า 17 ปี หรือมากกว่า 35 ปี",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 2,
    "anc_risk_name": "ประวัติคลอดก่อนกำหนด (คลอดก่อน 37 สัปดาห์)",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 3,
    "anc_risk_name": "ครรภ์แรกหรือครรภ์ที่ 4 ขึ้นไป",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 4,
    "anc_risk_name": "เคยคลอดลูกน้ำหนักน้อยกว่า 2,500 กรัม หรือมากกว่า 4,000 กรัมขึ้นไป",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 5,
    "anc_risk_name": "เคยผ่าตัดที่มดลูก",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 6,
    "anc_risk_name": "มีประวัติเป็นโรคหัวใจ",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 7,
    "anc_risk_name": "เคยมีประวัติแท้งตั้งแต่ 3 ครั้งขึ้นไป",
    "anc_risk_fatal": "Y",
    "hos_guid": null
  },
  {
    "anc_risk_id": 8,
    "anc_risk_name": "เป็นโรคโลหิตจาง (Hb < 11 gms. หรือ Hct. < 33%)",
    "anc_risk_fatal": "N",
    "hos_guid": null
  }
]
```
