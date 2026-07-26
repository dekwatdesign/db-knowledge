# `autopsy_death_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| autopsy_death_type_id | int(11) | NO | PRI | 0 |  |  |
| autopsy_death_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_autopsy_death_type_name | autopsy_death_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | autopsy_death_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "autopsy_death_type_id": 1,
    "autopsy_death_type_name": "ฆ่าตัวตาย",
    "hos_guid": null
  },
  {
    "autopsy_death_type_id": 2,
    "autopsy_death_type_name": "ถูกผู้อื่นทำให้ตาย",
    "hos_guid": null
  },
  {
    "autopsy_death_type_id": 3,
    "autopsy_death_type_name": "ถูกสัตว์ทำร้ายตาย",
    "hos_guid": null
  },
  {
    "autopsy_death_type_id": 4,
    "autopsy_death_type_name": "ตายโดยอุบัติเหตุ",
    "hos_guid": null
  },
  {
    "autopsy_death_type_id": 5,
    "autopsy_death_type_name": "ตายโดยยังมิปรากฎเหตุ",
    "hos_guid": null
  }
]
```
