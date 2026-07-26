# `oper_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oper_type | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | oper_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "oper_type": 1,
    "name": "Emergency",
    "hos_guid": null
  },
  {
    "oper_type": 2,
    "name": "Elective",
    "hos_guid": null
  },
  {
    "oper_type": 3,
    "name": "Non-OR Procedure",
    "hos_guid": null
  }
]
```
