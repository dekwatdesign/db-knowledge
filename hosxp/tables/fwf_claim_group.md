# `fwf_claim_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fwf_claim_group_id | int(11) | NO | PRI | 0 |  |  |
| fwf_claim_group_name | varchar(200) | YES | UNI | NULL |  |  |
| fwf_claim_group_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fwf_claim_group_name | fwf_claim_group_name | yes | 1 |
| PRIMARY | fwf_claim_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "fwf_claim_group_id": 1,
    "fwf_claim_group_name": "กรณีการบริการผู้ป่วยในที่มีราคาสูง (RW>=4.0) (1)",
    "fwf_claim_group_code": "1"
  },
  {
    "fwf_claim_group_id": 2,
    "fwf_claim_group_name": "กรณีการบริการผู้ป่วยในที่มีราคาสูง (RW>=4.0) (1.1)",
    "fwf_claim_group_code": "1.1"
  },
  {
    "fwf_claim_group_id": 3,
    "fwf_claim_group_name": "กรณีการบริการค่าใช้จ่ายสูงเฉพาะบางโรค (RW<4.0) (1.2)",
    "fwf_claim_group_code": "1.2"
  },
  {
    "fwf_claim_group_id": 4,
    "fwf_claim_group_name": "รายการที่เป็นส่วนหนึ่งของการบริการรักษาผู้ป่วย (2)",
    "fwf_claim_group_code": "2"
  },
  {
    "fwf_claim_group_id": 5,
    "fwf_claim_group_name": "รายการที่เป็นอุปกรณ์/อวัยวะเทียมในการบำบัดโรค (3)",
    "fwf_claim_group_code": "3"
  },
  {
    "fwf_claim_group_id": 6,
    "fwf_claim_group_name": "กลุ่มเคลมยา ARV (4)",
    "fwf_claim_group_code": "4"
  },
  {
    "fwf_claim_group_id": 7,
    "fwf_claim_group_name": "กลุ่มเคลมแล็ป ARV (5)",
    "fwf_claim_group_code": "5"
  },
  {
    "fwf_claim_group_id": 8,
    "fwf_claim_group_name": "กลุ่มวัคซีน (6)",
    "fwf_claim_group_code": "6"
  }
]
```
