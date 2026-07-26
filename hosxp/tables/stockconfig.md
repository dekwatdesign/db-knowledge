# `stockconfig`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computerlock | varchar(50) | YES |  | NULL |  |  |
| currentyear | datetime | YES |  | NULL |  |  |
| drugdepcheif | varchar(250) | YES |  | NULL |  |  |
| drugstockcheif | varchar(250) | YES |  | NULL |  |  |
| hospitaldirector | varchar(250) | YES |  | NULL |  |  |
| lastentrydate | datetime | YES |  | NULL |  |  |
| moneyofficer | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_hospitalname | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "computerlock": null,
    "currentyear": null,
    "drugdepcheif": "หัวหน้าห้องยา",
    "drugstockcheif": "หัวหน้าคลังยา",
    "hospitaldirector": "[MASKED_FULLNAME]",
    "lastentrydate": null,
    "moneyofficer": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "stock_hospitalname": null
  }
]
```
