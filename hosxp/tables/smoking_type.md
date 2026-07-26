# `smoking_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| smoking_type_id | int(11) | NO | PRI | 0 |  |  |
| smoking_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| nhso_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_smoking_type_name | smoking_type_name | yes | 1 |
| PRIMARY | smoking_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "smoking_type_id": 1,
    "smoking_type_name": "ไม่เคยสูบ",
    "hos_guid": "{15070179-F023-11E2-A10B-00FF8C046E8A}",
    "nhso_code": "0"
  },
  {
    "smoking_type_id": 2,
    "smoking_type_name": "ยังสูบอยู่ หรือเลิกสูบได้ยังไม่ถึง 1 เดือน",
    "hos_guid": "{150706FD-F023-11E2-A10B-00FF8C046E8A}",
    "nhso_code": "2"
  },
  {
    "smoking_type_id": 3,
    "smoking_type_name": "เลิกสูบแล้วอย่างน้อย 1 เดือน",
    "hos_guid": "{15070975-F023-11E2-A10B-00FF8C046E8A}",
    "nhso_code": "1"
  },
  {
    "smoking_type_id": 4,
    "smoking_type_name": "ไม่ได้ซัก",
    "hos_guid": "{15070AEF-F023-11E2-A10B-00FF8C046E8A}",
    "nhso_code": "N"
  }
]
```
