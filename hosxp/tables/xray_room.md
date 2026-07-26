# `xray_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_room | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| default_room | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | xray_room | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "xray_room": 1,
    "name": "X-RAY",
    "hos_guid": null,
    "default_room": null
  },
  {
    "xray_room": 2,
    "name": "Ultrasound",
    "hos_guid": null,
    "default_room": null
  }
]
```
