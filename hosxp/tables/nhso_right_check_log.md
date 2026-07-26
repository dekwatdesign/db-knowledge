# `nhso_right_check_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_right_check_log_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| check_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| pttype_no | varchar(50) | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| pttype_begin | date | YES |  | NULL |  |  |
| pttype_expire | date | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | nhso_right_check_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "nhso_right_check_log_id": 1,
    "cid": "1xxxxxxxxxxxx",
    "check_datetime": "2021-01-05 08:36:58",
    "staff": "[MASKED_FULLNAME]",
    "pttype": "74",
    "pttype_no": "F741014747195",
    "hospmain": "11703",
    "pttype_begin": "2020-12-04",
    "pttype_expire": "1990-01-01",
    "hospsub": "41888"
  }
]
```
