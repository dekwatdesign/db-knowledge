# `family`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| family_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| family_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | family_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "family_id": 1,
    "house_id": 1496,
    "family_no": 1,
    "hos_guid": "{909059CC-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 4,
    "house_id": 413,
    "family_no": 1,
    "hos_guid": "{90905D96-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 5,
    "house_id": 364,
    "family_no": 1,
    "hos_guid": "{90905EA4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 6,
    "house_id": 364,
    "family_no": 2,
    "hos_guid": "{90905F94-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 7,
    "house_id": 364,
    "family_no": 3,
    "hos_guid": "{909060AC-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 8,
    "house_id": 364,
    "family_no": 4,
    "hos_guid": "{909061B0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "family_id": 9,
    "house_id": 364,
    "family_no": 5,
    "hos_guid": "{909062A0-F542-11DE-BFF4-00215E472B30}"
  }
]
```
