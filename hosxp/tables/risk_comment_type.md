# `risk_comment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_comment_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_comment_name | varchar(50) | YES |  | NULL |  |  |
| risk_comment_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_comment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "risk_comment_type_id": 10,
    "risk_comment_name": "ให้คำแนะนำการดูแลตนเอง และตรวจคัดกรองซ้ำทุก 1 ปี",
    "risk_comment_code": "0",
    "hos_guid": null
  },
  {
    "risk_comment_type_id": 20,
    "risk_comment_name": "ลงทะเบียนกลุ่มเสี่ยงต่อกลุ่มโรคโรค Metabolic และแน",
    "risk_comment_code": "1",
    "hos_guid": null
  },
  {
    "risk_comment_type_id": 30,
    "risk_comment_name": "ส่งต่อเพื่อรักษา",
    "risk_comment_code": "2",
    "hos_guid": null
  },
  {
    "risk_comment_type_id": 40,
    "risk_comment_name": "ติดตามการรักษาอย่างต่อเนื่อง",
    "risk_comment_code": "3",
    "hos_guid": null
  }
]
```
