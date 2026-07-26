# `accident_drug_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_drug_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_drug_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_drug_type_name | accident_drug_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | accident_drug_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "accident_drug_type_id": 1,
    "accident_drug_type_name": "ใช้",
    "hos_guid": null
  },
  {
    "accident_drug_type_id": 2,
    "accident_drug_type_name": "ไม่ใช้",
    "hos_guid": null
  },
  {
    "accident_drug_type_id": 9,
    "accident_drug_type_name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
