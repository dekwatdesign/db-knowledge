# `ward_admit_snapshot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward_admit_snapshot_id | int(11) | NO | PRI | 0 |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| snap_date | date | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_snap_date | snap_date | no | 1 |
| ix_ward | ward | no | 1 |
| ix_ward_date | ward | no | 1 |
| ix_ward_date | snap_date | no | 2 |
| ix_ward_date_index | snap_date | no | 1 |
| ix_ward_date_index | ward | no | 2 |
| PRIMARY | ward_admit_snapshot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ward_admit_snapshot_id": 1,
    "ward": "03",
    "an": "540000786",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 2,
    "ward": "03",
    "an": "540000787",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 3,
    "ward": "03",
    "an": "540000788",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 4,
    "ward": "03",
    "an": "540000789",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 5,
    "ward": "03",
    "an": "540000791",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 6,
    "ward": "03",
    "an": "540000792",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 7,
    "ward": "01",
    "an": "540000793",
    "snap_date": "2011-10-13",
    "hos_guid": null
  },
  {
    "ward_admit_snapshot_id": 8,
    "ward": "01",
    "an": "540000794",
    "snap_date": "2011-10-13",
    "hos_guid": null
  }
]
```
