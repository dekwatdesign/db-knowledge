# `house_owner`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_owner_id | int(11) | NO | PRI | 0 |  |  |
| hous_owner_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hous_owner_name | hous_owner_name | yes | 1 |
| PRIMARY | house_owner_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "house_owner_id": 1,
    "hous_owner_name": "01 ของตนเอง",
    "hos_guid": "{9C5FA366-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_owner_id": 2,
    "hous_owner_name": "02 เช่า",
    "hos_guid": "{9C5FA596-F542-11DE-BFF4-00215E472B30}"
  }
]
```
