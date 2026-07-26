# `doctor_schedule_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| name | name | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "name": "Full time",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "Part time",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "On call",
    "hos_guid": null
  }
]
```
