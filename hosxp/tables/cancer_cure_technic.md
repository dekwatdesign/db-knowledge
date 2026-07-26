# `cancer_cure_technic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_cure_technic_id | int(11) | NO | PRI | 0 |  |  |
| cancer_cure_technic_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_cure_technic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_cure_technic_id": 1,
    "cancer_cure_technic_name": "AP",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 2,
    "cancer_cure_technic_name": "PA",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 3,
    "cancer_cure_technic_name": "AP/Lat",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 4,
    "cancer_cure_technic_name": "PA/Lat",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 5,
    "cancer_cure_technic_name": "AP/PA",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 6,
    "cancer_cure_technic_name": "AP/PA/Lat",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 7,
    "cancer_cure_technic_name": "Rt Lat",
    "hos_guid": null
  },
  {
    "cancer_cure_technic_id": 8,
    "cancer_cure_technic_name": "Lt Lat",
    "hos_guid": null
  }
]
```
