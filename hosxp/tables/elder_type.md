# `elder_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_type_id | int(11) | NO | PRI | 0 |  |  |
| elder_type_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "elder_type_id": 1,
    "elder_type_name": "ติดสังคม",
    "hos_guid": null
  },
  {
    "elder_type_id": 2,
    "elder_type_name": "ติดบ้าน",
    "hos_guid": null
  },
  {
    "elder_type_id": 3,
    "elder_type_name": "ติดเตียง",
    "hos_guid": null
  }
]
```
