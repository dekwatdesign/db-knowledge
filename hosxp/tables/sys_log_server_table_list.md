# `sys_log_server_table_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(200) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | table_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "table_name": "anc_change_log"
  },
  {
    "table_name": "app_login_log"
  },
  {
    "table_name": "clinic_ckd_gfr_type_log"
  },
  {
    "table_name": "dw_emr_log"
  },
  {
    "table_name": "ksklog"
  },
  {
    "table_name": "officer_activity_log"
  },
  {
    "table_name": "opitemrece_log"
  },
  {
    "table_name": "report_access_log"
  }
]
```
