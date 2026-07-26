# `sys_img_server_table_list`

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
    "table_name": "dt_photo"
  },
  {
    "table_name": "edoc_scan"
  },
  {
    "table_name": "er_image"
  },
  {
    "table_name": "finger_scan"
  },
  {
    "table_name": "house_image"
  },
  {
    "table_name": "ipt_doctor_scan_image"
  },
  {
    "table_name": "lab_order_image"
  },
  {
    "table_name": "lab_report_image"
  }
]
```
