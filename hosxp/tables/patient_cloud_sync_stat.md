# `patient_cloud_sync_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| sync_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn_syncdate | hn | no | 1 |
| ix_hn_syncdate | sync_datetime | no | 2 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530041152",
    "sync_datetime": "2020-06-16 14:03:47"
  },
  {
    "hn": "530063247",
    "sync_datetime": "2020-07-21 15:21:10"
  },
  {
    "hn": "530066252",
    "sync_datetime": "2020-06-08 10:07:25"
  },
  {
    "hn": "530068052",
    "sync_datetime": "2020-06-16 14:15:44"
  },
  {
    "hn": "530068654",
    "sync_datetime": "2020-03-16 15:02:26"
  },
  {
    "hn": "530118653",
    "sync_datetime": "2020-07-22 16:18:34"
  },
  {
    "hn": "530132754",
    "sync_datetime": "2020-01-30 14:08:35"
  },
  {
    "hn": "530147847",
    "sync_datetime": "2020-01-30 10:18:46"
  }
]
```
