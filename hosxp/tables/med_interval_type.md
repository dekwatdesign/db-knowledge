# `med_interval_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_interval_type_id | int(11) | NO | PRI | 0 |  |  |
| interval_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| is_prn | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_interval_name | interval_name | no | 1 |
| PRIMARY | med_interval_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_interval_type_id": 1,
    "interval_name": "08",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 2,
    "interval_name": "12",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 3,
    "interval_name": "17",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 4,
    "interval_name": "08, 17",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 5,
    "interval_name": "10, 22",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 6,
    "interval_name": "06, 14, 22",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 7,
    "interval_name": "08,12,17",
    "hos_guid": null,
    "is_prn": null
  },
  {
    "med_interval_type_id": 8,
    "interval_name": "07",
    "hos_guid": null,
    "is_prn": null
  }
]
```
