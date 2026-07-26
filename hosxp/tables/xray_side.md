# `xray_side`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_side | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | xray_side | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "xray_side": 1,
    "name": "Left",
    "hos_guid": null
  },
  {
    "xray_side": 2,
    "name": "Right",
    "hos_guid": null
  },
  {
    "xray_side": 3,
    "name": "Both",
    "hos_guid": null
  }
]
```
