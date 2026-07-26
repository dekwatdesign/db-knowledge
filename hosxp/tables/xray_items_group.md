# `xray_items_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_group | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| ecode | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | xray_items_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "xray_items_group": 1,
    "name": "X-Ray",
    "hos_guid": null,
    "ecode": null
  },
  {
    "xray_items_group": 2,
    "name": "Ultrasound",
    "hos_guid": null,
    "ecode": null
  },
  {
    "xray_items_group": 3,
    "name": "CT",
    "hos_guid": null,
    "ecode": null
  },
  {
    "xray_items_group": 4,
    "name": "MRI",
    "hos_guid": null,
    "ecode": null
  },
  {
    "xray_items_group": 5,
    "name": "Mammogram",
    "hos_guid": null,
    "ecode": null
  }
]
```
