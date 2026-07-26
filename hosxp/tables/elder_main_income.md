# `elder_main_income`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_main_income_id | int(11) | NO | PRI | 0 |  |  |
| elder_main_income_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_main_income_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "elder_main_income_id": 1,
    "elder_main_income_name": "บำนาญ",
    "hos_guid": null
  },
  {
    "elder_main_income_id": 2,
    "elder_main_income_name": "ทำงาน",
    "hos_guid": null
  },
  {
    "elder_main_income_id": 3,
    "elder_main_income_name": "บุตร/หลาน/ญาติ",
    "hos_guid": null
  },
  {
    "elder_main_income_id": 4,
    "elder_main_income_name": "ดอกเบี้ย/ค่าเช่า",
    "hos_guid": null
  },
  {
    "elder_main_income_id": 5,
    "elder_main_income_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
