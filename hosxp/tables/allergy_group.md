# `allergy_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| allergy_group_id | int(11) | NO | PRI | 0 |  |  |
| allergy_group_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_allergy_group_name | allergy_group_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | allergy_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "allergy_group_id": 1,
    "allergy_group_name": "Cardiovascular diaorder",
    "hos_guid": null
  },
  {
    "allergy_group_id": 2,
    "allergy_group_name": "Blood and lymphatic system disorder",
    "hos_guid": null
  }
]
```
