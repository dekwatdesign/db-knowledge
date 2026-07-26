# `teenage_preg_lookup_visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_lookup_visit_type_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_lookup_visit_type_name | varchar(40) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_lookup_visit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "teenage_preg_lookup_visit_type_id": 1,
    "teenage_preg_lookup_visit_type_name": "ก่อนคลอด",
    "hos_guid": null
  },
  {
    "teenage_preg_lookup_visit_type_id": 2,
    "teenage_preg_lookup_visit_type_name": "หลังคลอด",
    "hos_guid": null
  }
]
```
