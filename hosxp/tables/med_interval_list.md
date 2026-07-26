# `med_interval_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_interval_list_id | int(11) | NO | PRI | 0 |  |  |
| med_interval_type_id | int(11) | YES | MUL | NULL |  |  |
| interval_time | time | YES |  | NULL |  |  |
| order_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_med_interval_id | med_interval_type_id | no | 1 |
| PRIMARY | med_interval_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_interval_list_id": 1,
    "med_interval_type_id": 1,
    "interval_time": "8:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 2,
    "med_interval_type_id": 2,
    "interval_time": "12:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 3,
    "med_interval_type_id": 3,
    "interval_time": "17:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 4,
    "med_interval_type_id": 4,
    "interval_time": "8:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 5,
    "med_interval_type_id": 4,
    "interval_time": "17:00:00",
    "order_id": 2,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 6,
    "med_interval_type_id": 5,
    "interval_time": "10:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 7,
    "med_interval_type_id": 5,
    "interval_time": "22:00:00",
    "order_id": 2,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  },
  {
    "med_interval_list_id": 8,
    "med_interval_type_id": 6,
    "interval_time": "6:00:00",
    "order_id": 1,
    "hos_guid": null,
    "ipd_nurse_shift_id": null
  }
]
```
