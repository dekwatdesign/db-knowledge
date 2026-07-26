# `risk_perform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_perform_id | int(11) | NO | PRI | 0 |  |  |
| risk_perform_name | varchar(50) | YES |  | NULL |  |  |
| risk_perform_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_perform_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "risk_perform_id": 10,
    "risk_perform_name": "เคยรักษา ขณะนี้ไม่รักษา/หายาทานเอง",
    "risk_perform_code": "0",
    "hos_guid": null
  },
  {
    "risk_perform_id": 20,
    "risk_perform_name": "รับการรักษาอยู่/ปฎิบัติตามที่แพทย์แนะนำ",
    "risk_perform_code": "1",
    "hos_guid": null
  },
  {
    "risk_perform_id": 30,
    "risk_perform_name": "รับการรักษา แต่ไม่สม่ำเสมอ",
    "risk_perform_code": "2",
    "hos_guid": null
  }
]
```
