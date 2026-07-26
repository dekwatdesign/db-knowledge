# `labour_delivery_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| delivery_type_id | int(11) | NO | PRI | 0 |  |  |
| delivery_type_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | delivery_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "delivery_type_id": 1,
    "delivery_type_name": "Spontaneous",
    "hos_guid": null
  },
  {
    "delivery_type_id": 2,
    "delivery_type_name": "Induce Method",
    "hos_guid": null
  },
  {
    "delivery_type_id": 3,
    "delivery_type_name": "Augmentation",
    "hos_guid": null
  }
]
```
