# `holiday`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| holiday_date | date | NO | PRI | 0000-00-00 |  |  |
| day_name | varchar(250) | YES | MUL | NULL |  |  |
| part_time_date | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| short_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_day_name | day_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | holiday_date | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "holiday_date": "2009-01-03",
    "day_name": "เสาร์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-04",
    "day_name": "อาทิตย์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-10",
    "day_name": "เสาร์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-11",
    "day_name": "อาทิตย์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-17",
    "day_name": "เสาร์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-18",
    "day_name": "อาทิตย์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-24",
    "day_name": "เสาร์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  },
  {
    "holiday_date": "2009-01-25",
    "day_name": "อาทิตย์",
    "part_time_date": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "short_name": null
  }
]
```
