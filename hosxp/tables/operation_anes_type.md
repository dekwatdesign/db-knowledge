# `operation_anes_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anes_type_id | int(11) | NO | PRI | 0 |  |  |
| anes_name | varchar(150) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| anes_name | anes_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anes_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "anes_type_id": 1,
    "anes_name": "Regional Anesthesia",
    "price": null,
    "hos_guid": null
  },
  {
    "anes_type_id": 2,
    "anes_name": "General Anesthesia",
    "price": null,
    "hos_guid": null
  }
]
```
