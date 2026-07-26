# `hsk_system`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hsk_id | int(1) | NO | PRI | 0 |  |  |
| webname | varchar(100) | YES |  | NULL |  |  |
| name_th | varchar(200) | YES |  | NULL |  |  |
| name_eng | varchar(200) | YES |  | NULL |  |  |
| copy_right | varchar(200) | YES |  | NULL |  |  |
| version | varchar(50) | YES |  | NULL |  |  |
| ip_server | varchar(50) | YES |  | NULL |  |  |
| ip_local_1 | varchar(50) | YES |  | NULL |  |  |
| ip_local_2 | varchar(50) | YES |  | NULL |  |  |
| ip_wan | varchar(50) | YES |  | NULL |  |  |
| lock_note | varchar(5) | YES |  | NULL |  |  |
| timeout | varchar(5) | YES |  | NULL |  |  |
| st_evaluation | int(1) | YES |  | NULL |  |  |
| st_eva_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hsk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hsk_id": 1,
    "webname": "HSK2020",
    "name_th": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "name_eng": "HOSxP SKPH 2020",
    "copy_right": "Copyright &copy; 2020 SKPH All rights reserved.",
    "version": "HSK2020 Version 2.0913",
    "ip_server": "iemr.ycap.go.th",
    "ip_local_1": "192.168.10.7",
    "ip_local_2": "10.1.101.214",
    "ip_wan": "192.168.10.1",
    "lock_note": "-1",
    "timeout": "59:50",
    "st_evaluation": 1,
    "st_eva_date": "2024-02-28"
  }
]
```
