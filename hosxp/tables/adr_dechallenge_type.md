# `adr_dechallenge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_dechallenge_type_id | int(11) | NO | PRI | 0 |  |  |
| adr_dechallenge_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_dechallenge_type_name | adr_dechallenge_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_dechallenge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "adr_dechallenge_type_id": 1,
    "adr_dechallenge_type_name": "อาการดีขึ้นอย่างชัดเจน (Definite improvement)",
    "hos_guid": null
  },
  {
    "adr_dechallenge_type_id": 2,
    "adr_dechallenge_type_name": "อาการไม่ดีขึ้น (No improvement)",
    "hos_guid": null
  },
  {
    "adr_dechallenge_type_id": 3,
    "adr_dechallenge_type_name": "ไม่ทราบ (Unknown)",
    "hos_guid": null
  }
]
```
