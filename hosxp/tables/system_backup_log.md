# `system_backup_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| backup_log_id | int(11) | NO | PRI | 0 |  |  |
| backup_datetime | datetime | YES | MUL | NULL |  |  |
| backup_computer | varchar(50) | YES |  | NULL |  |  |
| backup_filename | varchar(250) | YES |  | NULL |  |  |
| backup_size | double(15,3) | YES |  | NULL |  |  |
| backup_finish_datetime | datetime | YES | MUL | NULL |  |  |
| backup_type | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_backup_datetime | backup_datetime | no | 1 |
| ix_backup_finish_datetime | backup_finish_datetime | no | 1 |
| PRIMARY | backup_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "backup_log_id": 2994,
    "backup_datetime": "2022-12-14 19:05:14",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221214181345.7z",
    "backup_size": 1039217005.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 2995,
    "backup_datetime": "2022-12-16 22:38:38",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221216215139.7z",
    "backup_size": 1039969483.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 2996,
    "backup_datetime": "2022-12-19 15:31:53",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_replication_log_backup_20221219153055.7z",
    "backup_size": 38880583.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 2997,
    "backup_datetime": "2022-12-20 16:47:06",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_replication_log_backup_20221220164605.7z",
    "backup_size": 41687145.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 2998,
    "backup_datetime": "2022-12-20 19:33:58",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221220184252.7z",
    "backup_size": 1041015681.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 2999,
    "backup_datetime": "2022-12-22 19:32:33",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221222184119.7z",
    "backup_size": 1041794867.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 3000,
    "backup_datetime": "2022-12-25 23:33:45",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221225224703.7z",
    "backup_size": 1041891978.0,
    "backup_finish_datetime": null,
    "backup_type": null
  },
  {
    "backup_log_id": 3001,
    "backup_datetime": "2022-12-28 21:37:37",
    "backup_computer": "A56-0114 [chatchawal]",
    "backup_filename": "C:\\ProgramData\\hosxp_backup\\hosxp_12251_backup_20221228205116.7z",
    "backup_size": 1043405306.0,
    "backup_finish_datetime": null,
    "backup_type": null
  }
]
```
