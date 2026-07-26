# `xray_time_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_time_type_id | int(11) | NO | PRI | 0 |  |  |
| xray_time_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xray_time_type_name | xray_time_type_name | yes | 1 |
| PRIMARY | xray_time_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "xray_time_type_id": 1,
    "xray_time_type_name": "ในเวลา",
    "hos_guid": "{C3397926-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_time_type_id": 2,
    "xray_time_type_name": "นอกเวลา",
    "hos_guid": "{C3397B38-F61E-11DE-BFF4-00215E472B30}"
  }
]
```
