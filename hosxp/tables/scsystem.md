# `scsystem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lastcloseperiod | datetime | YES |  | NULL |  |  |
| sharepriceperunit | double(22,3) | YES |  | NULL |  |  |
| standardinterest | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lastcloseperiod": "2000-10-01 00:00:00",
    "sharepriceperunit": 100.0,
    "standardinterest": 1.5,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
