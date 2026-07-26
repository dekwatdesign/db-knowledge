# `adr_medication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_medication_type_id | int(11) | NO | PRI | 0 |  |  |
| adr_medication_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_medication_type_name | adr_medication_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_medication_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "adr_medication_type_id": 1,
    "adr_medication_type_name": "Suspected product",
    "hos_guid": null
  },
  {
    "adr_medication_type_id": 2,
    "adr_medication_type_name": "Other product",
    "hos_guid": null
  },
  {
    "adr_medication_type_id": 3,
    "adr_medication_type_name": "Product interaction",
    "hos_guid": null
  }
]
```
