# `risk_doctor_opinion_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_doctor_opinion_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_doctor_opinion_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_doctor_opinion_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "risk_doctor_opinion_type_id": 10,
    "risk_doctor_opinion_name": "กรณีเสี่ยงต่อโรค (ไม่ต้องกรอก)",
    "hos_guid": null
  },
  {
    "risk_doctor_opinion_type_id": 20,
    "risk_doctor_opinion_name": "ป่วยด้วยโรคเรื้อรัง",
    "hos_guid": null
  }
]
```
