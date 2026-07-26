# `house_deed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_deed_id | int(11) | NO | PRI | 0 |  |  |
| house_deed_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_deed_name | house_deed_name | yes | 1 |
| PRIMARY | house_deed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "house_deed_id": 1,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB7FC4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 2,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB819A-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 3,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB82BC-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 4,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB83AC-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 5,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB849C-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 6,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB8596-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_deed_id": 9,
    "house_deed_name": "[MASKED_FULLNAME]",
    "hos_guid": "{93AB8686-F542-11DE-BFF4-00215E472B30}"
  }
]
```
