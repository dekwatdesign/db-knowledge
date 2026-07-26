# `visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_type | char(1) | NO | PRI |  |  |  |
| visit_type_name | varchar(150) | YES | UNI | NULL |  |  |
| time_range_begin | time | YES |  | NULL |  |  |
| time_range_end | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_visit_type_name | visit_type_name | yes | 1 |
| PRIMARY | visit_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "visit_type": "I",
    "visit_type_name": "ในเวลา",
    "time_range_begin": "8:30:00",
    "time_range_end": "16:30:00",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "visit_type": "O",
    "visit_type_name": "นอกเวลา",
    "time_range_begin": "16:31:00",
    "time_range_end": "23:59:00",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
