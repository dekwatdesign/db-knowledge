# `adr_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_cause_id | int(11) | NO | PRI | 0 |  |  |
| adr_cause_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_cause_name | adr_cause_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "adr_cause_id": 1,
    "adr_cause_name": "ADR",
    "hos_guid": null
  },
  {
    "adr_cause_id": 2,
    "adr_cause_name": "อุบัติเหตุ/ฆ่าตัวตาย",
    "hos_guid": null
  },
  {
    "adr_cause_id": 3,
    "adr_cause_name": "ใช้ในทางที่ผิด",
    "hos_guid": null
  },
  {
    "adr_cause_id": 4,
    "adr_cause_name": "ความบกพร่องของผลิตภัณฑ์สุขภาพ",
    "hos_guid": null
  },
  {
    "adr_cause_id": 5,
    "adr_cause_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
