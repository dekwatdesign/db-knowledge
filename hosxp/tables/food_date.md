# `food_date`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| date_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | date_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "date_id": 1,
    "name": "จันทร์",
    "hos_guid": null
  },
  {
    "date_id": 2,
    "name": "อังคาร",
    "hos_guid": null
  },
  {
    "date_id": 3,
    "name": "พุธ",
    "hos_guid": null
  },
  {
    "date_id": 4,
    "name": "พฤหัสบดี",
    "hos_guid": null
  },
  {
    "date_id": 5,
    "name": "ศุกร์",
    "hos_guid": null
  },
  {
    "date_id": 6,
    "name": "เสาร์",
    "hos_guid": null
  },
  {
    "date_id": 7,
    "name": "อาทิตย์",
    "hos_guid": null
  }
]
```
