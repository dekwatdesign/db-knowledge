# `nhso_eligible_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_eligible_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_eligible_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_eligible_type_name | nhso_eligible_type_name | yes | 1 |
| PRIMARY | nhso_eligible_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_eligible_type_id": 1,
    "nhso_eligible_type_name": "DM HbA1c ปีละ 2 ครั้ง"
  },
  {
    "nhso_eligible_type_id": 2,
    "nhso_eligible_type_name": "HT รายใหม่"
  },
  {
    "nhso_eligible_type_id": 3,
    "nhso_eligible_type_name": "EPI"
  },
  {
    "nhso_eligible_type_id": 4,
    "nhso_eligible_type_name": "dT บริการวัคซีนคอตีบ-บาดทะยัก (dT) ในผู้ใหญ่"
  },
  {
    "nhso_eligible_type_id": 5,
    "nhso_eligible_type_name": "บริการการตรวจคัดกรองมะเร็งปากมดลูก"
  },
  {
    "nhso_eligible_type_id": 6,
    "nhso_eligible_type_name": "บริการฝากครรภ์"
  },
  {
    "nhso_eligible_type_id": 7,
    "nhso_eligible_type_name": "บริการการป้องกันและควบคุมโรคโลหิตจางธาลัสซีเมียในหญิงตั้งครรภ์"
  },
  {
    "nhso_eligible_type_id": 8,
    "nhso_eligible_type_name": "บริการการคัดกรองธาลัสซีเมียและการคัดกรองซิฟิลิสในสามีหรือคู่ของหญิงตั้งครรภ์"
  }
]
```
