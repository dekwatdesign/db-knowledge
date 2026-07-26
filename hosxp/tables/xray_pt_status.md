# `xray_pt_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_pt_status | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | xray_pt_status | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "xray_pt_status": 1,
    "name": "นั่งรถเข็น",
    "hos_guid": null
  },
  {
    "xray_pt_status": 2,
    "name": "นอนเปล",
    "hos_guid": null
  },
  {
    "xray_pt_status": 3,
    "name": "ปกติ",
    "hos_guid": null
  }
]
```
