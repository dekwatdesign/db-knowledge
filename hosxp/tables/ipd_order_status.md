# `ipd_order_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_status | char(1) | NO | PRI |  |  |  |
| status_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_status_name | status_name | yes | 1 |
| PRIMARY | order_status | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "order_status": "C",
    "status_name": "Continue",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "order_status": "O",
    "status_name": "One day",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "order_status": "S",
    "status_name": "Stat dose",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
